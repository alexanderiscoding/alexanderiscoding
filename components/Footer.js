import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/3 flex justify-center space-x-4 mb-4 md:mb-0">
            <Link href="https://github.com/alexanderiscoding/alexanderiscoding/issues" className="hover:text-blue-400 transition-colors">Relatar problema</Link>
            <Link href="https://github.com/alexanderiscoding/alexanderiscoding/discussions/categories/ideas" className="hover:text-blue-400 transition-colors">Solicitar melhorias</Link>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Serviços</Link>
          </div>
          <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
            <div>
              <Image
                src="https://assets.alexanderiscoding.com/favicons/favicon-32x32.png"
                alt="Alexanderiscoding logo"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 flex justify-center space-x-4 mb-4 md:mb-0">
            <Link href="/vdp" className="hover:text-blue-400 transition-colors">Vulnerabilidades</Link>
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacidade</Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">Termos</Link>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2022 - 2024 Alexanderiscoding. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}