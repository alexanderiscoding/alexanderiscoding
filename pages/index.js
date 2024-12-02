import Head from 'next/head'
import { CheckCircle, Server, Sliders, Zap } from 'lucide-react'

export default function Page() {
  const Github = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )

  const Linkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )

  const Mail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
  const features = [
    {
      title: 'Escolha o Serviço',
      description: 'Oferecemos soluções personalizadas e períodos de testes gratuitos para que você possa experimentar nossos serviços antes de tomar uma decisão.',
      icon: CheckCircle
    },
    {
      title: 'Hospede o Serviço',
      description: 'Implementamos as melhores práticas de segurança e avaliamos os recursos necessários para garantir uma hospedagem estável e segura para seus serviços.',
      icon: Server
    },
    {
      title: 'Configure o Serviço',
      description: 'Trabalhamos junto com você para entender suas necessidades específicas e personalizar nossos serviços, garantindo a integração simplificada com seu fluxo de trabalho.',
      icon: Sliders
    },
    {
      title: 'Utilize o Serviço',
      description: 'Oferecemos suporte contínuo e garantimos que suas soluções funcionem perfeitamente, coletando seu feedback para melhorias constantes.',
      icon: Zap
    }
  ]
  return (
    <>
      <Head>
        <title>Alexanderiscoding - Transformando Ideias em Tecnologia</title>
        <meta name="description" content="Desenvolvemos soluções de software que beneficiam a comunidade, promovendo melhorias na vida cotidiana e facilitando o acesso a serviços essenciais." />
      </Head>

      <section className="pt-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transformando Ideias em Tecnologia</h1>
          <p className="text-xl md:text-2xl mb-8">Desenvolvemos soluções de software que beneficiam a comunidade.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Entre em Contato</h2>
          <p className="text-xl mb-12">Entre em contato comigo para saber mais sobre como hospedar sua própria instância.</p>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Github className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="https://www.linkedin.com/in/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <Linkedin className="h-6 w-6" aria-hidden="true" />
            </a>
            <a href="mailto:contact@alexanderiscoding.com" className="hover:text-gray-300">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
