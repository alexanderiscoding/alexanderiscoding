import Head from 'next/head'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <>
      <Head>
        <title>Termos de Uso - Alexanderiscoding</title>
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Termos de uso</h1>

        <p className="mb-6">Ao usar nossos serviços, você concorda com estes termos - Por favor, leia-os com atenção.</p>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Como podemos alterar os Termos de Serviço</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Podemos alterar qualquer parte dos Termos de Serviço sem avisar com antecedência nas seguintes circunstâncias:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Para refletir mudanças nas leis e requisitos regulatórios que se aplicam aos serviços, recursos e programas, quando tais alterações exigirem que alteremos nossos termos e condições de uma maneira que não nos permita notificá-lo com razoável antecedência.</li>
              <li>Para lidar com um perigo imprevisto e iminente relacionado à defesa de nossos serviços, malware, spam, violações de dados ou outros riscos de segurança cibernética.</li>
            </ul>
            <p>Também podemos fazer outras alterações em qualquer parte dos Termos de uso, e lhe daremos um aviso razoável de tais alterações por e-mail, e você pode entrar em contato conosco para encerrar seu contrato conosco antes que as alterações entrem em vigor. Uma vez que quaisquer Termos de uso atualizados estejam em vigor, você estará vinculado a eles se continuar a usar os nossos serviços.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Podemos fazer alterações, suspender ou retirar o Serviço</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Podemos atualizar e alterar os Serviços de tempos em tempos por qualquer motivo, inclusive para refletir alterações em nossa estrutura, necessidades dos usuários ou para melhorar o desempenho, aprimorar a funcionalidade ou resolver problemas de segurança. Tentaremos dar-lhe um aviso razoável de quaisquer alterações importantes. Não garantimos que os Serviços, ou qualquer Conteúdo nele, esteja sempre disponível ou acessível sem interrupção. Podemos suspender ou retirar ou restringir a disponibilidade total ou parcial dos Serviços por motivos operacionais. Tentaremos notificá-lo com razoável antecedência sobre qualquer suspensão ou retirada se isso afetar você.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Cadastro nos Serviços</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Para utilizar os Serviços deve primeiro registar-se e criar uma conta de usuário.</p>
            <p className="mb-4">Para se cadastrar como usuário:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Se você já tinha uma conta, você confirma que sua conta antiga não foi encerrada ou suspensa por nós porque você violou algum de nossos termos ou políticas.</li>
              <li>Você se certificará de que todas as informações que nos enviar são verdadeiras, precisas e completas.</li>
              <li>Você atualizará imediatamente qualquer uma de suas informações que nos enviou conforme e quando elas forem alteradas.</li>
              <li>Você consente em receber nossas comunicações eletronicamente por e-mails, e no processamento de seus dados pessoais conforme detalhado em nossa Política de Privacidade.</li>
              <li>Você é responsável por todas as atividades em sua conta, mesmo que, contrariamente aos Termos de Serviço, outra pessoa use sua conta.</li>
              <li>Você deve fornecer outras informações ou registros de verificação que exigimos.</li>
            </ul>
            <p>Você manterá seus detalhes de conta/login confidenciais e seguros, incluindo seus dados de usuário, tokens e qualquer outra informação que faça parte de nossos procedimentos de segurança, e você não os divulgará a mais ninguém. Você entrará em contato com dados@alexanderiscoding.com imediatamente se acreditar que alguém usou ou está usando sua conta sem sua permissão ou se sua conta estiver sujeita a qualquer outra violação de segurança. Você também concorda em ter um cuidado especial ao acessar sua conta de um computador público ou compartilhado para que outras pessoas não possam acessar, visualizar ou registrar seus tokens ou outras informações pessoais.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Direitos que temos, incluindo suspender ou encerrar sua conta</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Podemos, mas não somos obrigados a moderar ou revisar qualquer conteúdo seu para verificar a conformidade com os Termos de Uso e/ou qualquer lei aplicável.</p>
            <p className="mb-4">É nossa política suspender o acesso a qualquer Conteúdo que você postar em nossos Serviços se tomarmos conhecimento de que ele não cumpre os Termos de Uso e/ou qualquer lei aplicável enquanto investigamos a suspeita de não conformidade ou ilegalidade de tal Conteúdo.</p>
            <p className="mb-4">Reservamo-nos o direito, a nosso exclusivo critério, de rescindir seu acesso aos Serviços por qualquer motivo, avisando com 30 dias de antecedência por e-mail.</p>
            <p>Podemos investigar qualquer uso suspeito ou alegado de uso indevido, abuso ou uso ilegal dos Serviços e cooperar com as agências de aplicação da lei em tal investigação.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Pelo que não somos responsáveis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Usaremos o cuidado e a habilidade razoáveis ​​para fornecer a você, mas há certas coisas pelas quais não somos responsáveis, como segue:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Seu Conteúdo pode ser visto por indivíduos que reconhecem sua identidade. Não seremos de forma alguma responsáveis ​​perante você se você for identificado a partir do seu Conteúdo.</li>
              <li>Não fazemos promessas ou garantias sobre a precisão ou não de tais materiais, ou de que os Usuários alcançarão qualquer resultado específico com o uso de tais materiais.</li>
              <li>Não prometemos que os Serviços sejam compatível com todos os dispositivos e sistemas operacionais.</li>
              <li>Não nos responsabilizamos pela disponibilidade da internet, ou quaisquer erros em suas conexões, dispositivo ou outro equipamento, ou software que possam ocorrer em relação ao seu uso dos Serviços.</li>
              <li>Não somos responsáveis ​​por quaisquer contas de Usuário, tokens, contas de e-mail perdidas, roubadas ou comprometidas ou quaisquer atividades não autorizadas resultantes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Como faço para excluir minha conta?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Você pode solicitar a exclusão de sua conta a qualquer momento ao enviar para nosso email dedicado do seu email cadastrado.</p>
            <p>Se você excluir seu perfil, todas as informações da conta serão excluídas permanentemente de nosso sistema quando você confirmar seu desejo de excluir sua conta.</p>
          </CardContent>
        </Card>

        <p>Para mais informações, entre em contato por email.</p>
      </main>
    </>
  )
}