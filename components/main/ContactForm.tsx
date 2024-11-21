"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        "service_7c4mkov", // Remplacez par votre Service ID
        "template_0bc06ot", // Remplacez par votre Template ID
        templateParams,
        "JwiuzhyHmtm6fPSF9" // Remplacez par votre Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("Email sending failed:", err);
          setError("Une erreur est survenue lors de l'envoi du message.");
        }
      );
  };

  return (
    <div id ="contact-form" className="w-full max-w-[90%] md:max-w-md mx-auto mt-10 bg-gray-800 p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4 md:mb-6">
        Contactez-moi
      </h2>
      {success && (
        <p className="text-green-500 text-center mb-4">
          Votre message a été envoyé avec succès !
        </p>
      )}
      {error && (
        <p className="text-red-500 text-center mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="text-gray-300">
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-gray-300">
            Adresse email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
            placeholder="Votre email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full mt-1 p-2 rounded bg-gray-700 text-white"
            placeholder="Votre message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 
