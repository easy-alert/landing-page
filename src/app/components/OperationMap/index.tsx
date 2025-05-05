"use client";

import Image from "next/image";
import { MainButton } from "@/components/Buttons/MainButton";
import mapResponsive from "@/assets/mapResponsive.svg";
import operationMap from "@/assets/onlyOperationMap.svg";
import leftDetail from "@/assets/details/leftDetail.svg";
import rightDetail from "@/assets/details/rightDetail.svg";
import { useState } from "react";
import { formApi } from "@/app/api/postForm/pipedriveApi";
import WhatsApp from "@/assets/whatsapp.svg";
import Telephone from "@/assets/icons/telephone.svg";
import Mail from "@/assets/icons/mail.svg";

export const OperationMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [contactByWhatsapp, setContactByWhatsapp] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowPopup(false);
  };

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    companyName?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: typeof errors = {};
    let hasErrors = false;

    if (!name.trim()) {
      newErrors.name = "Campo obrigatório";
      hasErrors = true;
    }
    if (!email.trim()) {
      newErrors.email = "Campo obrigatório";
      hasErrors = true;
    }
    if (!phone.trim()) {
      newErrors.phone = "Campo obrigatório";
      hasErrors = true;
    }
    if (!companyName.trim()) {
      newErrors.companyName = "Campo obrigatório";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 4000);

    const formData = {
      name,
      email,
      phone,
      companyName,
      contactByWhatsapp,
    };

    try {
      await formApi.post("", formData);

      setName("");
      setEmail("");
      setPhone("");
      setCompanyName("");
      setContactByWhatsapp(false);
      setErrors({});

      setIsModalOpen(false);

      if (contactByWhatsapp) {
        const whatsappMessage = `Olá, meu nome é ${name}. Gostaria de agendar uma demonstração.`;
        const whatsappUrl = `https://wa.me/5548991537724?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Ocorreu um erro ao enviar o formulário.");
    }
  };

  const handleInfoClick = (contactType: string) => {
    if (contactType === "telefone") {
    }
    if (contactType === "email") {
    }
  };

  return (
    <section className="flex justify-center gap-20 xl:px-28 xl:pt-16 mt-56 relative">
      <Image
        src={leftDetail}
        alt=""
        className="absolute top-0 left-0 hidden xl:flex"
      />
      <Image
        src={rightDetail}
        alt=""
        className="absolute bottom-0 right-0 hidden xl:flex"
      />
      <div className="w-width647 flex xl:flex-1 items-center justify-center gap-44">
        <Image src={operationMap} alt="" className="hidden xl:flex" />
        <article className="flex flex-col items-center gap-8 max-w-lg px-4 xl:max-w-width530 xl:items-start">
          <div className="flex flex-col gap-3">
            <h4 className="text-caption font-helveticaNeueMedium uppercase text-veryLightGray">
              Sempre presente
            </h4>
            <h2 className="text-title text-lightBlack ">
              {"Para Todos e \nem Todo Lugar"}
            </h2>
            <p className="text-lightGray text-sectionParagraph max-w-lg">
              Nossa missão é facilitar o dia a dia dos síndicos, oferecendo uma
              gestão das manutenções simples e ágil.
            </p>
          </div>
          <div className="hidden xl:flex">
            <MainButton onClick={() => setIsModalOpen(true)}>
              Agende uma demonstração
            </MainButton>
          </div>
          <div className="flex flex-col gap-6 xl:hidden">
            <div>
              <Image src={mapResponsive} alt="" />
            </div>
            <div>
              <MainButton responsiveWidth="w-full">
                Agende uma demonstração
              </MainButton>
            </div>
          </div>
        </article>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 w-full max-w-2xl shadow-lg my-8 relative">
            <button
              onClick={handleModalClose}
              className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold text-center mb-4 text-easyAlertColor">
              Preencha o formulário, entraremos em contato em breve
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 border border-gray-200 rounded p-4"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm font-medium">
                  Nome *
                </label>
                <input
                  id="name"
                  type="text"
                  className={`border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded p-2 text-sm`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-medium">
                  E-mail *
                </label>
                <input
                  id="email"
                  type="email"
                  className={`border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded p-2 text-sm`}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((prev) => ({ ...prev, email: undefined }));
                  }}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } rounded p-2 text-sm`}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setErrors((prev) => ({ ...prev, phone: undefined }));
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="companyName" className="text-sm font-medium">
                  Nome da empresa *
                </label>
                <input
                  id="companyName"
                  type="text"
                  className={`border ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  } rounded p-2 text-sm`}
                  value={companyName}
                  onChange={(e) => {
                    setCompanyName(e.target.value);
                    setErrors((prev) => ({ ...prev, companyName: undefined }));
                  }}
                />
                {errors.companyName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.companyName}
                  </p>
                )}
              </div>

              <div>
                <p className="font-semibold text-sm mb-1">
                  Como prefere ser contatado? *
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <label className="flex items-center gap-2 border border-gray-300 rounded p-2 text-sm cursor-pointer hover:shadow-md transition">
                    <input
                      type="checkbox"
                      className="accent-easyAlertColor"
                      checked={contactByWhatsapp}
                      onChange={() => setContactByWhatsapp(!contactByWhatsapp)}
                    />
                    <Image
                      src={WhatsApp}
                      alt="WhatsApp"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs">WhatsApp</span>
                  </label>

                  {showPopup && (
                    <div className="fixed bottom-5 right-5 bg-white text-black px-6 py-4 rounded-lg shadow-lg border border-gray-200 z-50 transition-all duration-300 max-w-xs text-center">
                      Em breve nossos especialistas entrarão em contato.
                    </div>
                  )}

                  <label className="flex items-center gap-2 border border-gray-300 rounded p-2 text-sm cursor-pointer hover:shadow-md transition">
                    <input
                      type="checkbox"
                      className="accent-easyAlertColor"
                      onClick={() => handleInfoClick("telefone")}
                    />
                    <Image
                      src={Telephone}
                      alt="Telefone"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs">Telefone</span>
                  </label>

                  <label className="flex items-center gap-2 border border-gray-300 rounded p-2 text-sm cursor-pointer hover:shadow-md transition">
                    <input
                      type="checkbox"
                      className="accent-easyAlertColor"
                      onClick={() => handleInfoClick("email")}
                    />
                    <Image src={Mail} alt="E-mail" width={20} height={20} />
                    <span>E-mail</span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-easyAlertColor text-white font-semibold py-2 px-4 rounded hover:bg-opacity-90 transition"
              >
                Solicitar contato
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
