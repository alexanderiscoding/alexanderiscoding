import Link from "next/link";
import Image from "next/image";

export default function Component() {
  return (
    <footer className="bg-gray-100 dark:bg-black border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start">
          <div className="mb-6 md:mb-0 md:order-2 flex justify-center">
            <Image src="https://assets.alexanderiscoding.com/favicons/favicon-32x32.png" alt="Alexanderiscoding logo" width={32} height={32} />
          </div>
          <nav className="mb-6 md:mb-0 md:order-1">
            <ul className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row md:space-x-4">
              <li>
                <Link href="https://github.com/alexanderiscoding/alexanderiscoding/issues" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Relatar problema
                </Link>
              </li>
              <li>
                <Link href="https://github.com/alexanderiscoding/alexanderiscoding/discussions/categories/ideas" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Solicitar melhorias
                </Link>
              </li>
              <li>
                <Link href="/service" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Serviços
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="mb-6 md:mb-0 md:order-3">
            <ul className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row md:space-x-4">
              <li>
                <Link href="/vdp" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Vulnerabilidades
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-800 dark:text-white hover:text-primary transition-colors">
                  Termos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">© 2022 - 2024 Alexanderiscoding. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
