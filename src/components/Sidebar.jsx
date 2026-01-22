import { FaGithub, FaTelegramPlane, FaGoogle } from "react-icons/fa";
import photo from "../assets/https://res.cloudinary.com/dmvl6jjcm/image/upload/v1768470585/WhatsApp_Image_2026-01-15_at_14.50.29_fhjdac.jpg";

const Sidebar = () => {
  return (
    <aside className="w-full md:w-72 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
      
      <img
        src={photo}
        alt="Моё фото"
        className="w-32 h-32 rounded-full object-cover mb-4"
      />

      <h3 className="font-semibold text-lg mb-1">Алина</h3>
      <p className="text-sm text-gray-500 mb-4">Frontend Developer</p>

      <div className="flex gap-4 text-xl text-gray-600">
        <a href="#" className="hover:text-black"><FaGithub /></a>
        <a href="#" className="hover:text-blue-500"><FaTelegramPlane /></a>
        <a href="#" className="hover:text-red-500"><FaGoogle /></a>
      </div>

    </aside>
  );
};

export default Sidebar;