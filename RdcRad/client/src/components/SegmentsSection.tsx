import { ArrowRight, Truck, Package, Factory, ShoppingCart, Users, Briefcase } from "lucide-react";

interface Segment {
  id: string;
  title: string;
  description: string;
  metric: string;
  features: string[];
  color: string;
  bgColor: string;
  icon: React.ReactNode;
}

const segments: Segment[] = [
  {
    id: "distribution",
    title: "Distribuição",
    description: "Otimize rotas de entrega e gerencie logística com dashboards inteligentes",
    metric: "52% redução em tempo de entrega",
    features: ["Otimização de rotas", "Rastreamento em tempo real", "Redução de custos"],
    color: "#1e40af",
    bgColor: "bg-blue-50",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    id: "logistics",
    title: "Logística",
    description: "Acompanhe carga e otimize armazenagem com análise preditiva",
    metric: "60% melhoria em eficiência",
    features: ["Rastreamento completo", "Previsão de demanda", "Otimização de espaço"],
    color: "#7c3aed",
    bgColor: "bg-purple-50",
    icon: <Package className="w-8 h-8" />,
  },
  {
    id: "industry",
    title: "Indústria de Bens de Consumo",
    description: "Otimize manufatura com análise de dados e previsão de demanda",
    metric: "45% de aumento em produtividade",
    features: ["Redução de custos", "Aumento de eficiência", "Controle de qualidade"],
    color: "#ea580c",
    bgColor: "bg-orange-50",
    icon: <Factory className="w-8 h-8" />,
  },
  {
    id: "wholesale",
    title: "Grossistas (Wholesale)",
    description: "Gerencie cadeias de suprimento e otimize inventário com IA",
    metric: "38% redução em desperdício",
    features: ["Gestão de inventário", "Previsão de tendências", "Redução de desperdício"],
    color: "#059669",
    bgColor: "bg-green-50",
    icon: <ShoppingCart className="w-8 h-8" />,
  },
  {
    id: "retail",
    title: "Comércio a Retalho",
    description: "Aumente vendas com análise de clientes e gestão de estoque",
    metric: "35% aumento em vendas",
    features: ["Análise de vendas", "Gestão de estoque", "Experiência do cliente"],
    color: "#0891b2",
    bgColor: "bg-cyan-50",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "services",
    title: "Prestação de Serviços",
    description: "Melhore alocação de recursos e performance com métricas",
    metric: "48% melhoria em produtividade",
    features: ["Alocação de recursos", "Análise de performance", "Satisfação do cliente"],
    color: "#4f46e5",
    bgColor: "bg-indigo-50",
    icon: <Briefcase className="w-8 h-8" />,
  },
];

export default function SegmentsSection() {
  return (
    <section id="segments" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Segmentos de Mercado</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Soluções Especializadas por Setor
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            NexoVenda é desenhado para os principais segmentos do mercado português,
            com funcionalidades específicas para cada indústria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {segments.map((segment) => (
            <div
              key={segment.id}
              className={`${segment.bgColor} rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer group`}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white transition-transform group-hover:scale-110"
                style={{ backgroundColor: segment.color }}
              >
                {segment.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{segment.title}</h3>

              <p className="text-sm text-gray-600 mb-4">{segment.description}</p>

              <div className="bg-white rounded-lg p-3 mb-4 border border-gray-200">
                <div className="text-sm font-semibold text-gray-900">{segment.metric}</div>
              </div>

              <div className="space-y-2 mb-6">
                {segment.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ backgroundColor: segment.color }}
                    ></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="inline-flex items-center gap-2 text-sm font-medium transition-colors group/link">
                <span style={{ color: segment.color }} className="group-hover/link:underline">
                  Saiba Mais
                </span>
                <ArrowRight
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                  style={{ color: segment.color }}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
