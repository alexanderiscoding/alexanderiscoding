import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground text-gray-800 dark:text-white">Política de Privacidade</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Introdução</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Ao usar nossos serviços, você concorda com estes termos - Por favor, leia-os com atenção.</p>
          <p className="mb-4">Tratamos a privacidade do usuário com muita seriedade e priorizamos a segurança e a confidencialidade dos dados pessoais que você nos fornece quando visita nosso site ou usa nosso serviço. Não rastreamos nada do que você faz, nem monetizamos suas informações nem as compartilhamos sem seu consentimento explícito e informado.</p>
          <p>Recomendamos que todos analisem esta Política cuidadosamente, pois ela contém informações importantes sobre os direitos e obrigações dos usuários.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Informações que coletamos</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Para que nosso Serviço funcione, precisamos coletar certas Informações de você. Essas informações podem incluir informações pessoais, como seu nome, mas também algumas informações não identificáveis, como propriedades de armazenamento de sessão, metadados e informações básicas sobre seu dispositivo.</p>
          <p>O sistema coletará inevitavelmente algumas informações de uso automaticamente quando você visitar e/ou usar o Serviço e as armazenará em arquivos de log. Essas informações referem-se principalmente às informações técnicas sobre o uso do Serviço por meio de seu navegador de internet ou dispositivo móvel e são necessárias para o correto funcionamento técnico do Serviço. Usamos essas informações para administrar o Serviço e melhorar o Site e nossos Serviços para as necessidades de nossos usuários.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Como coletamos informações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Obtemos informações sobre você quando você as fornece voluntariamente a nós.</p>
          <p>Usamos métodos diferentes para coletar Informações Pessoais de e sobre você, por exemplo:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Divulgação direta – ocorre quando você se registra no Serviço ou preenche os campos com Informações Pessoais. Isso também acontece quando você divulga Informações Pessoais por meio do e-mail.</li>
            <li>Tecnologias automatizadas – Conforme você interage com nosso Serviço, podemos coletar automaticamente certas informações técnicas sobre seu dispositivo, informações sobre o comportamento do Serviço no seu dispositivo, etc. Isso é explicado com mais detalhes na parte Informações que coletamos. desta Política.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Como usamos as informações pessoais coletadas</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Usamos as informações coletadas para garantir o bom funcionamento de nosso Serviço, manter a segurança e/ou cumprir nossas obrigações legais.</p>
          <p className="mb-4">Usaremos suas Informações Pessoais somente quando permitido pela lei aplicável e de maneira consistente com esta Política.</p>
          <p>Usamos suas Informações Pessoais para os seguintes propósitos:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Fornecer e manter a melhor versão do Serviço</li>
            <li>Manter o nível adequado de segurança e proteção</li>
            <li>Cumprir nossas obrigações legais</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Compartilhamento de informações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Suas Informações Pessoais que você compartilha conosco é partilhada aos prestadores de serviços de forma a garantir o bom funcionamento do Serviço. Cada serviço tem sua própria Política de Privacidade, isso também inclui os nossos serviços, que são divulgados na seção Serviços.</p>
          <p className="mb-4">Atualmente, partilhamos as Informações Pessoais do Usuário com a PlanetScale, Firebase, GitHub e Vercel serviços que armazenam os dados, gerenciam a autentificação do usuário e que hospedam o site/APIs na Internet.</p>
          <p>Somente compartilharemos informações com agências governamentais conforme exigido por lei em resposta a solicitações legais de autoridades públicas, inclusive para atender aos requisitos de segurança nacional ou de aplicação da lei.</p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Retenção e exclusão de informações</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Armazenamos suas informações pessoais enquanto você for um usuário registrado. Após excluir a conta, suas Informações Pessoais são apagadas de nossos bancos de dados.</p>
          <p className="mb-4">Conservamos os seus Dados Pessoais durante o período em que for um Utilizador registado para garantir o bom funcionamento do nosso Serviço.</p>
          <p className="mb-4">Você pode solicitar a exclusão de sua conta a qualquer momento ao enviar para nosso email dedicado do seu email cadastrado.</p>
          <p>Se você excluir seu perfil, todas as informações da conta serão excluídas permanentemente de nosso sistema quando você confirmar seu desejo de excluir sua conta.</p>
        </CardContent>
      </Card>

      <p className="text-gray-800 dark:text-white">Para mais informações, entre em contato por email.</p>
    </div>
  );
}
