import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground text-gray-800 dark:text-white">Política de Divulgação de Vulnerabilidades (VDP)</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Nosso Compromisso</CardTitle>
          <CardDescription>Estou comprometido em proteger seus dados. Acredito que a comunidade de pesquisa de segurança independente é um contribuidor fundamental para a segurança da Internet e agradeço por relatórios de possíveis problemas de segurança.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Esta política fornece diretrizes para que os pesquisadores de segurança conduzam pesquisas éticas e coordenem a divulgação de vulnerabilidades de segurança para correções.</p>
          <p className="mt-4">Desenvolvi esta política para manter um senso de responsabilidade para com os pesquisadores de segurança que compartilhem seu conhecimento comigo. Incentivando os pesquisadores de segurança a relatar possíveis vulnerabilidades de segurança que descobrirem para que posso corrigi-las e manter nossos usuários protegidos.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Como relatar uma vulnerabilidade</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Descrever a vulnerabilidade, onde ela ocorre e o impacto no mundo real.
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Oferecer uma descrição detalhada das etapas necessárias para reproduzir a vulnerabilidade (pontos de contato, capturas de tela e vídeos são úteis).
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Incluir uma vulnerabilidade por relatório (a menos que estejam em uma cadeia de ataques).
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Enviar relatório para nosso email dedicado com os requisitos acima ou através do nosso GitHub Security Advisories.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>O que você pode esperar dessa vulnerabilidade</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Confirmaremos o recebimento do seu relatório em um dia útil.
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Enviaremos a você uma confirmação da existência da vulnerabilidade e seremos o mais transparentes possível sobre o processo de correção, incluindo problemas ou desafios que possam atrasar a resolução.
            </li>
            <li className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Manteremos um diálogo aberto para discutir as questões.
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Isenção de responsabilidade</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Quaisquer atividades conduzidas de maneira consistente com esta política serão consideradas conduta autorizada, e não moveremos nenhuma ação legal contra você. Se uma ação legal for ajuizada por um terceiro contra você em relação às atividades conduzidas de acordo com esta política, tomaremos medidas para divulgar que suas ações foram conduzidas em conformidade com esta política.</p>
        </CardContent>
      </Card>
    </div>
  );
}
