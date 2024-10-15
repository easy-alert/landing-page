import { NextRequest, NextResponse } from "next/server";
import { pipedriveApi } from "./pipedriveApi";

function isEmpty(value: string | null) {
  if (!value || value === "null" || value === "undefined") {
    return null;
  }
  return value;
}

export async function POST(req: NextRequest) {
  const { name, phone, email, companyName, message } = await req.json();
  const origin = isEmpty(req.nextUrl.searchParams.get("origin"));

  const pipedrivePerson = {
    name,
    email: [
      {
        value: email,
        primary: true,
      },
    ],
    phone: [
      {
        value: phone,
        primary: true,
      },
    ],
  };

  try {
    const personInfo = await pipedriveApi.post("/persons", pipedrivePerson);

    const person = {
      id: personInfo.data.data.id,
      name: personInfo.data.data.name,
    };

    const organizationInfo = await pipedriveApi.post("/organizations", {
      name: companyName,
    });

    const organization = {
      id: organizationInfo.data.data.id,
      name: organizationInfo.data.data.name,
    };

    const deal = {
      title: person.name,
      person_id: person.id,
      org_id: organization.id,
      pipeline_id: 1,
      stage_id: 6,
      // Mensagem do card
      "6e795f0922737021363e1b5f3ad87a46a71e8ae7": message,
      // Campanha
      cb064d0e71c353ca3a4e3c85440c4f8fef23d14e: origin || "Orgânico",
      // Origem
      f4d9e92487b40f17b362624d0cea16778df2da84: "79",
    };

    await pipedriveApi.post("/deals", deal);
  } catch (error: any) {
    console.log(error.response.data);
    return NextResponse.json(
      { message: "Erro ao enviar o formulário." },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Formulário enviado com sucesso." });
}
