import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 shadow-xl rounded-lg max-w-md w-full p-8 m-4 text-center">
        <div className="mb-4">
          <Image
            src="/profile.jpg" 
            alt="Foto Profil"
            width={150}
            height={150}
            className="rounded-full mx-auto border-4 border-blue-500 object-cover"
            priority
          />
        </div>

        <h1 className="text-3xl font-bold mb-1">Amazia</h1>
        <h2 className="text-xl text-blue-400 font-light mb-4">
          Software Engineer & Web Developer
        </h2>

        <p className="text-gray-300 mb-6 px-4">
          Selamat datang di portofolio saya. Saya seorang pengembang yang
          bersemangat dalam membangun aplikasi web yang modern dan fungsional
          dengan Next.js dan Tailwind.
        </p>

        <div className="flex justify-center space-x-6 mb-8"> {/* Ditambahkan mb-8 untuk jarak */}
          <a
            href="https://github.com/username-anda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/username-anda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://instagram.com/username-anda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-500 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700"> 
          <h3 className="text-2xl font-semibold mb-4">Proyek & Keahlian</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
            <div className="bg-gray-700 rounded-lg p-3">
              <Image
                src="/bootstrap-hero.jpg" 
                alt="Bootstrap Framework"
                width={300} 
                height={150} 
                className="rounded-md object-cover w-full h-auto"
              />
              <p className="text-sm text-gray-300 mt-2">
                Pengembangan antarmuka responsif dengan Bootstrap.
              </p>
            </div>

            {/* Gambar 3: Dreamweaver */}
            <div className="bg-gray-700 rounded-lg p-3">
              <Image
                src="/dreamweaver-web-design.jpg" 
                alt="Web Design dengan Dreamweaver"
                width={300} 
                height={150} 
                className="rounded-md object-cover w-full h-auto"
              />
              <p className="text-sm text-gray-300 mt-2">
                Dasar-dasar Web Design dan pengembangan dengan Dreamweaver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
