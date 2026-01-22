import React, { useEffect, useState } from "react";
import { FaGithub, FaTelegramPlane, FaVk } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [coords, setCoords] = useState(null);
  const [userCoords, setUserCoords] = useState(null);

  const ASIA_MALL = {
    lat: 42.85570920364617,
    lng: 74.58258377467789,
  };

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lon = pos.coords.longitude.toFixed(6);
        setCoords(`${lat},${lon}`);
      });
    }
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        // "kalilov04",      //  Service ID из EmailJS
        // "YOUR_TEMPLATE_ID",     // Template ID из EmailJS
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        // "c8GC8fcEai0r9q2vN"       // Public Key из EmailJS
      )
      .then(
        (result) => {
          alert("Сообщение отправлено! Проверяй свой e-mail ✅");
          setForm({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          alert("Ошибка при отправке, попробуй ещё раз ❌");
          console.log(error.text);
        }
      );
  };

  // Новые функции для геолокации и маршрута
  const getUserLocation = () => {
    if (!navigator.geolocation) {
      alert("Геолокация не поддерживается");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      () => alert("Не удалось получить геолокацию ❌")
    );
  };

  const openRoute = () => {
    if (!userCoords) return;
    window.open(
      `https://www.google.com/maps/dir/${userCoords.lat},${userCoords.lng}/${ASIA_MALL.lat},${ASIA_MALL.lng}`,
      "_blank"
    );
  };

  return (
    <div
      className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
    >

      <div className="mt-16 max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.811690846015!2d74.58258377467789!3d42.85570920364617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec9d3088356eb%3A0xb6b7beaa1240556a!2sAsia%20Mall!5e0!3m2!1sen!2skg!4v1769077183669"
          className="w-full h-[350px] rounded-xl border border-gray-700 shadow-lg shadow-yellow-400/20"
          loading="lazy"
          allowFullScreen
        />

        <div className="flex flex-wrap gap-4 mt-4">

          {userCoords && (
            <button
              onClick={openRoute}
              className="px-5 py-2 bg-[#1c1c1c] text-white border border-gray-600 rounded shadow-md shadow-yellow-400/20 hover:shadow-yellow-400/50 transition"
            >
              🧭 Build route
            </button>
          )}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-white mb-4">Contact Form</h1>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-5xl mx-auto px-2">
  <div className="flex flex-col md:flex-row gap-4">
    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={form.name}
      onChange={handleChange}
      className="flex-1 p-3 rounded-md border border-gray-600 bg-[#1c1c1c] text-white placeholder-gray-400 shadow-md shadow-yellow-400/20 focus:outline-none focus:shadow-yellow-400/50 transition-all duration-300"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={form.email}
      onChange={handleChange}
      className="flex-1 p-3 rounded-md border border-gray-600 bg-[#1c1c1c] text-white placeholder-gray-400 shadow-md shadow-yellow-400/20 focus:outline-none focus:shadow-yellow-400/50 transition-all duration-300"
      required
    />
  </div>

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    value={form.subject}
    onChange={handleChange}
    className="w-full p-3 rounded-md border border-gray-600 bg-[#1c1c1c] text-white placeholder-gray-400 shadow-md shadow-yellow-400/20 focus:outline-none focus:shadow-yellow-400/50 transition-all duration-300"
    required
  />

  <textarea
    name="message"
    placeholder="Your Message"
    value={form.message}
    onChange={handleChange}
    className="w-full p-3 rounded-md border border-gray-600 bg-[#1c1c1c] text-white placeholder-gray-400 shadow-md shadow-yellow-400/20 focus:outline-none focus:shadow-yellow-400/50 transition-all duration-300"
    rows={6} // делаем по умолчанию побольше высоту
    required
  />

  <div className="flex justify-end">
    <button
      type="submit"
      className="px-6 py-3 bg-[#1c1c1c] text-white rounded border border-gray-600 shadow-md shadow-yellow-400/20 hover:shadow-yellow-400/50 transition-all duration-300 active:scale-95"
    >
      Send Message
    </button>
  </div>
</form>



    </div>
  );
};

export default Contact;
