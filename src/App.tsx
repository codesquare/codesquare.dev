import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "./assets/codesquare_logo.png";

const UnderConstruction = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <img src={Logo} alt="Codesquare logo" className="w-64 mb-8" />

      <div className="text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          🚧 Under Construction 🚧
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 text-balance">
          Vår hemsida är på gång! Codesquare arbetar just nu med att bygga något
          riktigt bra. Vi är snart tillbaka!
        </p>
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://www.instagram.com/codesquare.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/codesquare.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/company/codesquare-ab"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
