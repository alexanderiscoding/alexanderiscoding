import Head from 'next/head';
import Link from 'next/link';
import { DocumentTextIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const services = [
  {
    id: 'iam',
    name: 'Identity and Access Management (IAM)',
    description: 'Gerencie identidades e acessos com segurança e eficiência.',
    apiUrl: '/service/iam',
  }
];

export default function Page() {
  return (
    <>
      <Head>
        <title>Serviços - Alexanderiscoding</title>
      </Head>
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Nossos Serviços</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{app.name}</h2>
                <p className="text-gray-600 mb-4">{app.description}</p>
                <Link
                  href={app.apiUrl}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <DocumentTextIcon className="h-5 w-5 mr-2" />
                  Ver Documentação API
                  <ChevronRightIcon
                    className={`ml-1 transition-transform duration-300 `}
                  />
                </Link>
              </div>
              <div
                className={`h-1 bg-blue-600 transition-all duration-300 ease-in-out`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
