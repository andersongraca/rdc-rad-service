import { BarChart3, Wifi, Zap, Lock, Map, QrCode } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const features: Feature[] = [
  {
    id: "catalog",
    title: "Catálogo Digital",
    description: "Acesso móvel a informações detalhadas de produtos, incluindo fotos, descrições, preços e stock em tempo real.",
    icon: <BarChart3 className="w-6 h-6" />,
    color: "text-blue-600",
  },
  {
    id: "offline",
    title: "Operação Offline",
    description: "Funcionalidade robusta que permite aos vendedores trabalhar sem conexão à internet, sincronizando dados automaticamente.",
    icon: <Wifi className="w-6 h-6" />,
    color: "text-purple-600",
  },
  {
    id: "invoicing",
    title: "Faturação no Terreno",
    description: "Emissão de encomendas e faturas diretamente no dispositivo móvel, com conformidade fiscal AT e ATCUD.",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-600",
  },
  {
    id: "erp-integration",
    title: "Integração ERP Bidirecional",
    description: "Conectividade nativa com Cegid Primavera, PHC GO e Sage para sincronização em tempo real de dados mestres.",
    icon: <Lock className="w-6 h-6" />,
    color: "text-green-600",
  },
  {
    id: "routing",
    title: "Otimização de Rotas",
    description: "Planeamento de rotas eficientes, alertas de clientes próximos e geofencing para maximizar produtividade.",
    icon: <Map className="w-6 h-6" />,
    color: "text-cyan-600",
  },
  {
    id: "barcode",
    title: "Leitura de Código de Barras",
    description: "Agilização da adição de produtos e inventário através de leitura integrada de códigos de barras e QR codes.",
    icon: <QrCode className="w-6 h-6" />,
    color: "text-indigo-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="resources" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Recursos e Aprendizado</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tudo que Precisa para Dominar o NexoVenda
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Funcionalidades avançadas desenhadas para maximizar a eficiência operacional
            e a capacidade de resposta ao cliente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group p-6 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                <div className={feature.color}>{feature.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>

              <div className="mt-4 h-1 w-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-full group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
