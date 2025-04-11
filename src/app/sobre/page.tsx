import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';
import StatCounter from '@/components/StatCounter';

export default function SobrePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              SOBRE A <span className="text-[#D4AF37]">SOLLOS</span>
            </h1>
            <p className="text-xl mb-8">
              Conheça nossa história de 20 anos dedicados à excelência, qualidade e inovação.
            </p>
          </div>
        </div>
      </section>

      {/* História */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">NOSSA <span className="text-[#D4AF37]">HISTÓRIA</span></h2>
            <p className="mb-4">
              Desde 2004, percebemos que para crescer era preciso investir em conceito, identidade e qualidade. 
              Desde então, optamos por utilizar o design como ferramenta estratégica e elemento integrador de toda 
              nossa cadeia produtiva.
            </p>
            <p className="mb-4">
              Essa decisão fez com que a SOLLOS ficasse conhecida como uma indústria inovadora, firmando sua 
              posição pioneira no mundo do design.
            </p>
            <p className="mb-4">
              Ao longo de 20 anos, construímos uma trajetória de excelência e compromisso com a qualidade, 
              autenticidade e bom design, tornando-nos referência no setor.
            </p>
          </div>
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold">Imagem Histórica</p>
              <p className="text-sm">(Placeholder para imagem)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Valores */}
      <Section bgColor="light">
        <h2 className="text-center mb-12">NOSSOS <span className="text-[#D4AF37]">VALORES</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card text-center">
            <div className="text-[#D4AF37] text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">QUALIDADE</h3>
            <p>Compromisso com os mais altos padrões em todos os aspectos do nosso negócio, desde a produção até o atendimento ao cliente.</p>
          </div>
          <div className="card text-center">
            <div className="text-[#D4AF37] text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">INOVAÇÃO</h3>
            <p>Busca constante por novas ideias, tecnologias e métodos para oferecer produtos e serviços que superem expectativas.</p>
          </div>
          <div className="card text-center">
            <div className="text-[#D4AF37] text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">AUTENTICIDADE</h3>
            <p>Valorização da originalidade e do design único, criando produtos e experiências que refletem nossa identidade e valores.</p>
          </div>
        </div>
      </Section>

      {/* Números */}
      <Section bgColor="black">
        <h2 className="text-center mb-12 text-white">SOLLOS EM <span className="text-[#D4AF37]">NÚMEROS</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatCounter value="5" label="Plantas Fabris 30 mil m² área" />
          <StatCounter value="1000" prefix="+" label="Colaboradores diretos e indiretos" />
          <StatCounter value="30" prefix="+" label="Países de atuação" />
          <StatCounter value="120" label="Prêmios internacionais de design" />
        </div>
      </Section>

      {/* Franchising */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold">Imagem Franchising</p>
              <p className="text-sm">(Placeholder para imagem)</p>
            </div>
          </div>
          <div>
            <h2 className="mb-6">SOLLOS <span className="text-[#D4AF37]">FRANCHISING</span></h2>
            <p className="mb-4">
              Com base em nossa experiência de 20 anos e posição consolidada no mercado, 
              expandimos nossos horizontes com a criação da Sollos Franchising, trazendo 
              para o mercado a franquia Sniper.
            </p>
            <p className="mb-4">
              A Sollos Franchising representa nossa entrada no setor de entretenimento, 
              oferecendo um modelo de negócio inovador, rentável e com suporte completo 
              para nossos franqueados.
            </p>
            <p className="mb-6">
              Nosso objetivo é levar a mesma excelência e qualidade que nos tornaram 
              referência no setor de design para o mercado de franquias.
            </p>
            <Button href="/franquia" variant="primary">
              Conheça a franquia Sniper
            </Button>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="accent">
        <div className="text-center">
          <h2 className="mb-6">FAÇA PARTE DA <span className="text-white">NOSSA HISTÓRIA</span></h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Junte-se à Sollos Franchising e seja parte de uma empresa com 20 anos de tradição e excelência.
          </p>
          <Button href="/seja-franqueado" variant="primary">
            Quero ser um franqueado
          </Button>
        </div>
      </Section>
    </div>
  );
}
