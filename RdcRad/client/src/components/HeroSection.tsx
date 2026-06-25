import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-20 pb-32">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 w-fit">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-600">
                SFA Puro para Portugal
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Automação de Força de Vendas para o Terreno
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Integração nativa com ERPs portugueses (Primavera, PHC, Sage), operação
              offline robusta e inteligência transacional. Tudo que os seus vendedores
              precisam para fechar negócios no local do cliente.
            </p>

            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  <strong>Catálogo Digital</strong> com stock em tempo real
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  <strong>Faturação no Terreno</strong> com conformidade AT
                </span>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">
                  <strong>Operação Offline</strong> com sincronização automática
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-base px-8 py-3 rounded-lg">
                Começar Demonstração
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 text-base px-8 py-3 rounded-lg"
              >
                Ver Planos
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">NexoVenda Dashboard</h3>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600">2.4M</div>
                    <div className="text-xs text-gray-600 mt-1">Vendas Mês</div>
                    <div className="text-xs text-green-600 font-medium mt-2">↑ 12.5%</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">+34%</div>
                    <div className="text-xs text-gray-600 mt-1">Crescimento</div>
                    <div className="text-xs text-green-600 font-medium mt-2">↑ 8.2%</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600">156</div>
                    <div className="text-xs text-gray-600 mt-1">Encomendas</div>
                    <div className="text-xs text-green-600 font-medium mt-2">↑ 23%</div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg h-32 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-gray-600">Gráfico de Vendas</div>
                    <div className="text-xs text-gray-500 mt-1">Últimos 7 dias</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-green-500 text-white rounded-full p-4 shadow-lg">
              <div className="text-sm font-bold">Offline Ready</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full -mr-48 -mt-48 opacity-50"></div>
    </section>
  );
}
