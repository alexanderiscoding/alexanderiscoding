import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  const services = [
    {
      name: "Identity and Access Management (IAM)",
      description: "Gerencie identidades e acessos com segurança e eficiência.",
      documentationUrl: "/service/iam",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-foreground text-gray-800 dark:text-white">Nossos Serviços</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">{service.name}</CardTitle>
              <CardDescription className="text-sm md:text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full">
                <Link href={service.documentationUrl}>Ver Documentação API</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
