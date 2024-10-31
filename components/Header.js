import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 py-6">
      <div className="container mx-auto px-4 text-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Alexanderiscoding
        </Link>
      </div>
    </header>
  )
}