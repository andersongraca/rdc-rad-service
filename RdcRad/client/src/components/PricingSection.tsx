import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "49€",
    period: "/mês",
    description: "Para micro-empresas com até 3 vendedores",
    features: [
      "Faturação básica",
      "Catálogo Digital",
      "Operação Offline",
      "1 utilizador",
      "Suporte por email",
      "Atualizações automáticas",
    ],
    highlighted: false,
    cta: "Começar Grátis",
  },
  {
    id: "professional",
    name: "Professional",
    price: "129€",
    period: "/mês",
    description: "Para PMEs em crescimento com equipa de vendas",
    features: [
      "Tudo do Starter +",
      "Integração ERP completa",
      "Gestão de Rotas",
      "Dashboard avançado",
      "Até 10 utilizadores",
      "Suporte prioritário",
      "Análise preditiva básica",
      "Relatórios personalizados",
    ],
    highlighted: true,
    cta: "Solicitar Demo",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Sob Consulta",
    period: "",
    description: "Para grandes distribuidores e operações complexas",
    features: [
      "Tudo do Professional +",
      "Utilizadores ilimitados",
      "Customização total",
      "API aberta",
      "Suporte 24/7",
      "Integrações personalizadas",
      "SLA garantido",
      "Consultoria estratégica",
    ],
    highlighted: false,
    cta: "Contactar Vendas",
  },
];

const addOns = [
  { name: "BI Dashboard Avançado", price: "+15€/mês" },
  { name: "Offline Pro", price: "+10€/mês" },
  { name: "API Access Premium", price: "+25€/mês" },
  { name: "Módulo de Gestão de Rotas", price: "+20€/mês" },
  { name: "Suporte 24/7", price: "+30€/mês" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600">Planos e Preços</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preços Transparentes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu negócio. Sem compromissos, cancele quando quiser.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? "md:scale-105 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl"
                  : "bg-white border border-gray-200 hover:shadow-lg"
              }`}
            >
              <div
                className={`p-8 ${
                  plan.highlighted ? "bg-gradient-to-r from-blue-600 to-blue-700" : "bg-gray-50"
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-white" : "text-gray-900"
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${
                  plan.highlighted ? "text-blue-100" : "text-gray-600"
                }`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}>
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className={plan.highlighted ? "text-blue-100" : "text-gray-600"}>
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className={`p-8 ${
                plan.highlighted ? "bg-blue-50" : "bg-white"
              }`}>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        plan.highlighted ? "text-blue-600" : "text-green-600"
                      }`} />
                      <span className={plan.highlighted ? "text-gray-800" : "text-gray-700"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-lg font-medium transition-all ${
                    plan.highlighted
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Add-ons Opcionais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {addOns.map((addon, idx) => (
              <div key={idx} className="flex flex-col gap-2 p-4 bg-gray-50 rounded-lg">
                <span className="text-sm font-medium text-gray-900">{addon.name}</span>
                <span className="text-lg font-bold text-blue-600">{addon.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
