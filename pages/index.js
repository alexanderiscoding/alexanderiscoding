import Head from 'next/head'
import { UserCircleIcon, ServerIcon, CogIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Page() {
  return (
    <>
      <Head>
        <title>Alexanderiscoding - Transformando Ideias em Tecnologia</title>
        <meta name="description" content="Desenvolvemos soluções de software que beneficiam a comunidade, promovendo melhorias na vida cotidiana e facilitando o acesso a serviços essenciais." />
      </Head>

      <section className="text-center mb-16">
        <h1 className="text-[54px] font-medium mb-6">Transformando Ideias em Tecnologia</h1>
        <p className="text-2xl max-w-3xl mx-auto font-light mb-12">
          Desenvolvemos soluções de software que beneficiam a comunidade, promovendo melhorias na vida cotidiana e facilitando o acesso a serviços essenciais.
        </p>
      </section>

      <section id="servicos" className="mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <UserCircleIcon className="h-6 w-6 text-indigo-600 mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Escolha o Serviço</h3>
            </div>
            <p>Oferecemos soluções personalizadas e períodos de testes gratuitos para que você possa experimentar nossos serviços antes de tomar uma decisão.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <ServerIcon className="h-6 w-6 text-indigo-600 mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Hospede o Serviço</h3>
            </div>
            <p>Implementamos as melhores práticas de segurança e avaliamos os recursos necessários para garantir uma hospedagem estável e segura para seus serviços.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CogIcon className="h-6 w-6 text-indigo-600 mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Configure o Serviço</h3>
            </div>
            <p>Trabalhamos junto com você para entender suas necessidades específicas e personalizar nossos serviços, garantindo a integração simplificada com seu fluxo de trabalho.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-indigo-600 mr-2" aria-hidden="true" />
              <h3 className="text-xl font-semibold mb-2">Utilize o Serviço</h3>
            </div>
            <p>Oferecemos suporte contínuo e garantimos que suas soluções funcionem perfeitamente, coletando seu feedback para melhorias constantes.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Entre em Contato</h2>
        <p className="mb-4 max-w-2xl mx-auto">
          Entre em contato comigo para saber mais sobre como hospedar sua própria instância.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <GithubIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com/in/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
            <LinkedinIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contato@alexanderiscoding.com" className="text-gray-600 hover:text-blue-600 transition-colors">
            <MailIcon className="h-6 w-6" aria-hidden="true" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </section>
    </>
  )
}
