"use client";

import { useState } from "react";

import Image from "next/image";

import { useGetTrackingTags } from "@/hooks/useTrackingTags";

import { formApi } from "@/app/api/postForm/pipedriveApi";

import WhatsApp from "@/assets/whatsapp.svg";
import Telephone from "@/assets/icons/telephone.svg";
import Mail from "@/assets/icons/mail.svg";
import x from "@/assets/icons/x.svg";

type HabllaFormProps = {
  onClose: () => void;
};

export const HabllaForm = ({ onClose }: HabllaFormProps) => {
  const tags = useGetTrackingTags("sessionStorage");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");

  const [contactByWhatsapp, setContactByWhatsapp] = useState(false);
  const [contactByPhone, setContactByPhone] = useState(false);
  const [contactByEmail, setContactByEmail] = useState(false);

  const [showPopup, setShowPopup] = useState(false);

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
    companyName?: string;
  }>({});

  const handleClearValues = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setContactByWhatsapp(false);
    setContactByPhone(false);
    setContactByEmail(false);
  };

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
      contactByPhone,
      contactByEmail,
      gad_source: tags.gad_source || "",
      gad_campaignid: tags.gad_campaignid || "",
      gbraid: tags.gbraid || "",
      gclid: tags.gclid || "",
      utm_source: tags.utm_source || "",
      utm_medium: tags.utm_medium || "",
      utm_campaign: tags.utm_campaign || "",
      utm_term: tags.utm_term || "",
      fbclid: tags.fbclid || "",
    };

    try {
      await formApi.post("", formData);

      handleClearValues();
      setErrors({});

      if (contactByWhatsapp) {
        const whatsappMessage = `Olá, meu nome é ${name}. Gostaria de agendar uma demonstração.`;
        const whatsappUrl = `https://wa.me/5548991537724?text=${encodeURIComponent(
          whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank");
      }

      window.dataLayer.push({ event: "novo_lead" });
    } catch (error) {
      console.error("Erro no envio:", error);
      alert("Ocorreu um erro ao enviar o formulário.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-5 w-full max-w-2xl shadow-lg my-8 relative">
        {/* Botão para fechar o modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          <Image src={x} alt="Fechar" width={20} height={20} />
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
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
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
                <Image src={WhatsApp} alt="WhatsApp" width={20} height={20} />
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
                  checked={contactByPhone}
                  onChange={() => setContactByPhone(!contactByPhone)}
                />
                <Image src={Telephone} alt="Telefone" width={20} height={20} />
                <span className="text-xs">Telefone</span>
              </label>

              <label className="flex items-center gap-2 border border-gray-300 rounded p-2 text-sm cursor-pointer hover:shadow-md transition">
                <input
                  type="checkbox"
                  className="accent-easyAlertColor"
                  checked={contactByEmail}
                  onChange={() => setContactByEmail(!contactByEmail)}
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
  );
};
