import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Server, Sliders, Zap } from "lucide-react";

export default function Page() {
  const features = [
    {
      title: "Escolha o Serviço",
      description: "Oferecemos soluções personalizadas e períodos de testes gratuitos para que você possa experimentar nossos serviços antes de tomar uma decisão.",
      icon: CheckCircle,
    },
    {
      title: "Hospede o Serviço",
      description: "Implementamos as melhores práticas de segurança e avaliamos os recursos necessários para garantir uma hospedagem estável e segura para seus serviços.",
      icon: Server,
    },
    {
      title: "Configure o Serviço",
      description: "Trabalhamos junto com você para entender suas necessidades específicas e personalizar nossos serviços, garantindo a integração simplificada com seu fluxo de trabalho.",
      icon: Sliders,
    },
    {
      title: "Utilize o Serviço",
      description: "Oferecemos suporte contínuo e garantimos que suas soluções funcionem perfeitamente, coletando seu feedback para melhorias constantes.",
      icon: Zap,
    },
  ];
  const Github = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );

  const Linkedin = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );

  const Mail = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
  return (
    <>
      <section className="pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">Transformando Ideias em Tecnologia</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-800 dark:text-white">Desenvolvemos software que conectam ideias à tecnologia para criar soluções que geram impacto.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Nosso Processo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="pt-6">
                <CardContent>
                  <feature.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Entre em Contato</h2>
          <p className="text-xl mb-12 text-gray-800 dark:text-white">Entre em contato comigo para saber mais sobre como hospedar sua própria instância.</p>
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/alexanderiscoding" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:contact@alexanderiscoding.com" className="text-gray-800 hover:text-gray-600 dark:hover:text-gray-300 dark:text-white">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
