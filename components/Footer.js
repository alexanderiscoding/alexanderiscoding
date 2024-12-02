import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-800 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><Button variant="link" asChild><Link href="https://github.com/alexanderiscoding/alexanderiscoding/issues" className="text-white" target="_blank" rel="noopener noreferrer">Relatar problema</Link></Button></li>
              <li><Button variant="link" asChild><Link href="https://github.com/alexanderiscoding/alexanderiscoding/discussions/categories/ideas" className="text-white" target="_blank" rel="noopener noreferrer">Solicitar melhorias</Link></Button></li>
              <li><Button variant="link" asChild><Link href="/services" className="text-white">Serviços</Link></Button></li>
            </ul>
          </nav>
          <Image
            src="https://assets.alexanderiscoding.com/favicons/favicon-32x32.png"
            alt="Alexanderiscoding logo"
            width={32}
            height={32}
          />
          <nav>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <li><Button variant="link" asChild><Link href="/vdp" className="text-white">Vulnerabilidades</Link></Button></li>
              <li><Button variant="link" asChild><Link href="/privacy" className="text-white">Privacidade</Link></Button></li>
              <li><Button variant="link" asChild><Link href="/terms" className="text-white">Termos</Link></Button></li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-400">
          &copy; 2022 - 2024 Alexanderiscoding. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}