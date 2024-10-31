import Head from 'next/head'

export default function VDP() {
  return (
    <>
      <Head>
        <title>Política de Divulgação de Vulnerabilidades - Alexanderiscoding</title>
      </Head>

      <h1 className="text-3xl font-bold mb-6">Política de Divulgação de Vulnerabilidades (VDP)</h1>

      <div className="space-y-4">
        <p>
          Estou comprometido em proteger seus dados. Acredito que a comunidade de pesquisa de segurança independente é um contribuidor fundamental para a segurança da Internet e agradeço por relatórios de possíveis problemas de segurança.
        </p>

        <p>
          Esta política fornece diretrizes para que os pesquisadores de segurança conduzam pesquisas éticas e coordenem a divulgação de vulnerabilidades de segurança para correções.
        </p>

        <p>
          Desenvolvi esta política para manter um senso de responsabilidade para com os pesquisadores de segurança que compartilhem seu conhecimento comigo. Incentivando os pesquisadores de segurança a relatar possíveis vulnerabilidades de segurança que descobrirem para que posso corrigi-las e manter nossos usuários protegidos.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Como relatar uma vulnerabilidade</h2>

        <ul className="list-none space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Descrever a vulnerabilidade, onde ela ocorre e o impacto no mundo real.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Oferecer uma descrição detalhada das etapas necessárias para reproduzir a vulnerabilidade (pontos de contato, capturas de tela e vídeos são úteis).
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Incluir uma vulnerabilidade por relatório (a menos que estejam em uma cadeia de ataques).
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Enviar relatório para nosso email dedicado com os requisitos acima ou através do nosso GitHub Security Advisories.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">O que você pode esperar dessa vulnerabilidade</h2>

        <ul className="list-none space-y-2">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Confirmaremos o recebimento do seu relatório em um dia útil.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Enviaremos a você uma confirmação da existência da vulnerabilidade e seremos o mais transparentes possível sobre o processo de correção, incluindo problemas ou desafios que possam atrasar a resolução.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            Manteremos um diálogo aberto para discutir as questões.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-4">Isenção de responsabilidade</h2>

        <p>
          Quaisquer atividades conduzidas de maneira consistente com esta política serão consideradas conduta autorizada, e não moveremos nenhuma ação legal contra você. Se uma ação legal for ajuizada por um terceiro contra você em relação às atividades conduzidas de acordo com esta política, tomaremos medidas para divulgar que suas ações foram conduzidas em conformidade com esta política.
        </p>
      </div>
    </>
  )
}