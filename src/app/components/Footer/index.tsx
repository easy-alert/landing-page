"use client";

import Image from "next/image";
import LogoFooter from "../../../assets/logoFooter.svg";
import Instagram from "../../../assets/instagram.svg";
import Facebook from "../../../assets/facebook.svg";
import YoutubeFilled from "../../../assets/youtubeFilled.svg";
import ArrowUp from "../../../assets/arrowUp.svg";
import WhatsApp from "../../../assets/whatsapp.svg";
import Telephone from "../../../assets/icons/telephone.svg";
import Mail from "../../../assets/icons/mail.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import { useEffect, useState } from "react";
import Link from "next/link";
import { formApi } from "@/app/api/postForm/pipedriveApi";

export const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [contactByWhatsapp, setContactByWhatsapp] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);

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

  const handleModalClose = () => {
    setIsModalOpen(false);
    setShowPopup(false);
  };
  const handleInfoClick = (contactType: string) => {
    if (contactType === "telefone") {
    }
    if (contactType === "email") {
    }
  };
  const goToTop = () => window.scrollTo(0, 0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="Rodape"
      className="flex flex-col bg-easyAlertColor py-8 px-10 mt-28 gap-6 xl:h-[475px]"
    >
      <div className="flex flex-col gap-6 justify-between xl:items-center xl:flex-row">
        <Image src={LogoFooter} alt="EasyAlert logo" className="self-center" />
        <hr className="bg-white flex flex-1 opacity-20 xl:hidden" />
        <MainButton bgColor="bg-white" color="text-easyAlertColor font-bold">
          Agende uma demonstração
        </MainButton>
      </div>

      <hr className="bg-white opacity-20 hidden xl:flex" />

      <div className="flex flex-1 flex-col-reverse gap-6 xl:flex-row">
        <div className="flex flex-col flex-1 justify-between">
          <div className="flex flex-col gap-5">
            <h6 className="text-white">Endereço</h6>
            <address className="not-italic text-white opacity-60">
              Criciúma - SC
            </address>
          </div>
          <p className="text-white opacity-60">&#169; 2024 — Copyright</p>
        </div>

        <div className="flex flex-col flex-1 gap-5">
          <h6 className="text-white">Info</h6>
          <ul className="flex flex-col">
            {["Sobre", "Funcionalidades", "Depoimentos", "Normas"].map(
              (item) => (
                <li
                  key={item}
                  className="transition-transform hover:scale-105 text-white opacity-60"
                >
                  <Link href={`#${item}`}>{item}</Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-col flex-1 gap-5 relative">
          <h6 className="text-white">Contato</h6>
          <div className="flex flex-col gap-1">
            <p className="text-white opacity-60">Telefone: (48) 2102-6465</p>
            <p className="text-white opacity-60">WhatsApp: (48) 9 9153-7724</p>
            <p className="text-white opacity-60">
              E-mail: contato@easyalert.com.br
            </p>
          </div>
          <div className="flex gap-2 items-center xl:absolute xl:top-0 xl:right-0">
            <button
              onClick={() =>
                window.open("https://www.instagram.com/easy.alert", "_blank")
              }
              className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105"
            >
              <Image src={Instagram} alt="Instagram" />
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.facebook.com/easyalert.sistema",
                  "_blank"
                )
              }
              className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105"
            >
              <Image src={Facebook} alt="Facebook" />
            </button>
            <button
              onClick={() =>
                window.open("https://www.youtube.com/@easyalert4402", "_blank")
              }
              className="h-10 w-10 bg-red-400 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105"
            >
              <Image src={YoutubeFilled} alt="Youtube" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-2 items-center fixed bottom-12 right-10 z-30"></div>

      <div className="flex gap-2 items-center fixed bottom-12 right-10 z-30">
        <button
          onClick={() => setIsModalOpen(true)}
          className="h-14 w-14 bg-green-500 flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105"
        >
          <Image src={WhatsApp} alt="Formulário de contato" />
        </button>

        {scrollPosition !== 0 && (
          <button
            onClick={goToTop}
            className="h-12 w-12 bg-white flex items-center justify-center rounded-full hover:shadow-2xl transition-transform hover:scale-105"
          >
            <Image src={ArrowUp} alt="Ir ao topo" />
          </button>
        )}
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
    </footer>
  );
};
