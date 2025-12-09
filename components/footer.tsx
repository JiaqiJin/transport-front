import Link from "next/link";
import { Logo } from "./logo";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
} from "@tabler/icons-react";

export function Footer() {
  const pages = [
    { title: "Inicio", href: "#" },
    { title: "Servicios", href: "#services" },
    { title: "Flota", href: "#" },
    { title: "Conócenos", href: "#" },
    { title: "Contacto", href: "#contact" },
  ];

  const socials = [
    { title: "Facebook", href: "#" },
    { title: "Instagram", href: "#" },
    { title: "Twitter", href: "#" },
    { title: "LinkedIn", href: "#" },
  ];

  const legal = [
    { title: "Aviso Legal", href: "#" },
    { title: "Política de Privacidad", href: "#" },
    { title: "Política de Cookies", href: "#" },
  ];

  return (
    <footer id="contact" className="w-full max-w-7xl mx-auto rounded-xl m-10 bg-gray-50 border border-gray-100">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex items-start flex-col">
            <Logo />
            <h2 className="text-2xl font-medium mt-8 max-w-md text-gray-600">
              Tu compañero de confianza en cada kilómetro. Seguridad, confort y puntualidad.
            </h2>
            <div className="mt-8 text-sm text-gray-500">
              <p>📍 Calle del Transporte, 123, Madrid, España</p>
              <p>📞 +34 912 345 678</p>
              <p>✉️ info@transportespremium.es</p>
            </div>
          </div>

          <div className="grid justify-self-end grid-cols-1 md:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="space-y-6">
              <h3 className="font-semibold text-gray-900">Empresa</h3>
              <ul className="space-y-3">
                {pages.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-gray-900">Síguenos</h3>
              <ul className="space-y-3">
                {socials.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-gray-900">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 Transportes Premium. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-gray-400 hover:text-orange-600 transition-colors"
            >
              <IconBrandTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-orange-600 transition-colors"
            >
              <IconBrandLinkedin size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-orange-600 transition-colors"
            >
              <IconBrandFacebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-orange-600 transition-colors"
            >
              <IconBrandInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
