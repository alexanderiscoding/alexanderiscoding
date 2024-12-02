import Head from 'next/head';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
  const services = [
    {
      name: "Identity and Access Management (IAM)",
      description: "Gerencie identidades e acessos com segurança e eficiência.",
      documentationUrl: "/service/iam"
    },
    {
      name: "Cloud Storage",
      description: "Armazenamento escalável e seguro para seus dados na nuvem.",
      documentationUrl: "/docs/cloud-storage"
    },
    {
      name: "Serverless Computing",
      description: "Execute código sem se preocupar com a infraestrutura subjacente.",
      documentationUrl: "/docs/serverless"
    },
    {
      name: "Continuous Integration/Continuous Deployment (CI/CD)",
      description: "Automatize seus processos de desenvolvimento e implantação.",
      documentationUrl: "/docs/ci-cd"
    },
    {
      name: "Monitoramento e Análise",
      description: "Obtenha insights valiosos sobre o desempenho de suas aplicações.",
      documentationUrl: "/docs/monitoring"
    }
  ];
  return (
    <>
      <Head>
        <title>Serviços - Alexanderiscoding</title>
      </Head>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Nossos Serviços</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={service.documentationUrl}>
                    Ver Documentação API
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
