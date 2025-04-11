import React from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";

export default function SejaFranqueadoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              SEJA UM{" "}
              <span className="text-[#446EEC]">FRANQUEADO</span>
            </h1>
            <p className="text-xl mb-8">
              Invista em um negócio inovador e lucrativo. Faça parte
              da maior rede de franquias de entretenimento com
              estandes de tiro de airsoft do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <Section bgColor="white">
        <h2 className="text-center mb-12">
          VANTAGENS DE SER UM{" "}
          <span className="text-[#446EEC]">FRANQUEADO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              ALTA RENTABILIDADE
            </h3>
            <p>
              Modelo de negócio com excelente retorno sobre
              investimento, com payback estimado entre 10 e 15 meses.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              MARCA CONSOLIDADA
            </h3>
            <p>
              Faça parte de uma rede em expansão, com reconhecimento
              nacional e respaldo de uma empresa com 20 anos de
              mercado.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">
              SUPORTE COMPLETO
            </h3>
            <p>
              Acompanhamento em todas as etapas, desde a escolha do
              ponto até o treinamento da equipe e suporte contínuo.
            </p>
          </div>
        </div>
      </Section>

      {/* Investimento */}
      <Section bgColor="black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-white">
              INVESTIMENTO{" "}
              <span className="text-[#446EEC]">NECESSÁRIO</span>
            </h2>
            <p className="mb-4 text-white">
              A franquia Sniper oferece um modelo de negócio com
              investimento acessível e alto potencial de retorno,
              ideal para empreendedores que buscam um negócio
              diferenciado e lucrativo.
            </p>
            <div className="bg-[#111] p-6 mb-6">
              <h3 className="text-xl font-bold mb-2 text-[#446EEC]">
                INVESTIMENTO INICIAL
              </h3>
              <p className="text-white mb-2">
                A partir de R$ 350.000,00, incluindo:
              </p>
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Taxa de franquia</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Equipamentos e mobiliário</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Projeto arquitetônico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Treinamento inicial</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Material de marketing</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#111] p-6">
              <h3 className="text-xl font-bold mb-2 text-[#446EEC]">
                RETORNO ESPERADO
              </h3>
              <ul className="space-y-2 text-white">
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>
                    Faturamento médio mensal: R$ 80.000 a R$ 120.000
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Payback estimado: 10 a 15 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>Lucratividade média: 25% a 35%</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-gray-700 h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg font-bold">Gráfico de Retorno</p>
              <p className="text-sm">(Placeholder para gráfico)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Processo */}
      <Section bgColor="light">
        <h2 className="text-center mb-12">
          PROCESSO DE <span className="text-[#446EEC]">SELEÇÃO</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">01</div>
            <h3 className="text-xl font-bold mb-2">
              CONTATO INICIAL
            </h3>
            <p>
              Preencha o formulário de interesse e nossa equipe
              entrará em contato para uma conversa inicial.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">02</div>
            <h3 className="text-xl font-bold mb-2">ENTREVISTA</h3>
            <p>
              Reunião para apresentação detalhada do modelo de negócio
              e esclarecimento de dúvidas.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">03</div>
            <h3 className="text-xl font-bold mb-2">APROVAÇÃO</h3>
            <p>
              Análise do perfil do candidato e aprovação para se
              tornar um franqueado Sniper.
            </p>
          </div>
          <div className="card text-center">
            <div className="text-[#446EEC] text-5xl mb-4">04</div>
            <h3 className="text-xl font-bold mb-2">IMPLANTAÇÃO</h3>
            <p>
              Assinatura do contrato, escolha do ponto, projeto e
              montagem da unidade.
            </p>
          </div>
        </div>
      </Section>

      {/* Formulário */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">
              QUERO SER UM{" "}
              <span className="text-[#446EEC]">FRANQUEADO</span>
            </h2>
            <p className="mb-6">
              Preencha o formulário ao lado para receber mais
              informações sobre como se tornar um franqueado Sniper.
              Nossa equipe entrará em contato para dar início ao
              processo de seleção.
            </p>
            <div className="bg-gray-100 p-6">
              <h3 className="text-xl font-bold mb-4">
                CONTATO DIRETO
              </h3>
              <p className="mb-2">
                Se preferir, entre em contato diretamente conosco:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>expancao@franquiasniper.com.br</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#446EEC] mr-2">✓</span>
                  <span>(41) 9 9839-2690</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium mb-1"
                >
                  Cidade/Estado
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-3 border border-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="investment"
                  className="block text-sm font-medium mb-1"
                >
                  Capital Disponível para Investimento
                </label>
                <select
                  id="investment"
                  className="w-full p-3 border border-gray-300"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="200-300">
                    R$ 200.000 a R$ 300.000
                  </option>
                  <option value="300-400">
                    R$ 300.000 a R$ 400.000
                  </option>
                  <option value="400+">Acima de R$ 400.000</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-3 border border-gray-300"
                ></textarea>
              </div>
              <div>
                <Button variant="accent" className="w-full">
                  Enviar Formulário
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
