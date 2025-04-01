/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Formata a mensagem para o WhatsApp
    const whatsappMessage = `

${formData.message}
    `.trim();

    // Substitua pelo seu número de WhatsApp com código do país (sem espaços ou caracteres especiais)
    const phoneNumber = "5554999807405"; // Exemplo: 55 (Brasil) + DDD + número

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let's work together!
      </h1>
      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae quia
        excepturi corrupti repellendus. Aliquid!
      </p>

      <form onSubmit={handleSubmit} className="mt-8 block w-full">
        {/* Campos do formulário (mantidos iguais) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-transparent outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="flex-1 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-transparent outline-none w-full"
          />
        </div>

        <textarea
          name="message"
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md outline-none"
          rows={7}
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message via WhatsApp
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
