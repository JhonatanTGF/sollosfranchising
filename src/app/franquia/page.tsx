import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FeatureCard from '@/components/FeatureCard';

export default function FranquiaPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              FRANQUIA <span className="text-[#D4AF37]">SNIPER</span>
            </h1>
            <p className="text-xl mb-8">
              A maior rede de franquias de entretenimento com estandes de tiro de airsoft do Brasil.
            </p>
            <Button href="/seja-franqueado" variant="accent">
              Quero ser um franqueado
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a Franquia */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">SOBRE A <span className="text-[#D4AF37]">FRANQUIA</span></h2>
            <p className="mb-4">
              A Sniper é uma franquia inovadora no setor de entretenimento, oferecendo uma experiência 
              única com estandes de tiro de airsoft em um ambiente seguro e controlado.
            </p>
            <p className="mb-4">
              Nosso conceito combina diversão, adrenalina e competição, atraindo um público diversificado 
              e proporcionando momentos inesquecíveis para pessoas de todas as idades.
            </p>
            <p className="mb-4">
              Com um modelo de negócio comprovado e alta rentabilidade, a franquia Sniper representa 
              uma excelente oportunidade de investimento para empreendedores que buscam um negócio 
              diferenciado e lucrativo.
            </p>
          </div>
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold">Imagem da Franquia</p>
              <p className="text-sm">(Placeholder para imagem)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Modalidades */}
      <Section bgColor="light">
        <h2 className="text-center mb-12">MODALIDADES <span className="text-[#D4AF37]">SNIPER</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="ESTANDE DE TIRO"
            description="Pratique sua pontaria em nossos estandes de tiro com diferentes níveis de dificuldade e alvos."
            imagePlaceholder="Imagem Estande de Tiro"
          />
          <FeatureCard 
            title="DUELO"
            description="Desafie seus amigos em duelos emocionantes e descubra quem tem a melhor mira e reflexos."
            imagePlaceholder="Imagem Duelo"
          />
          <FeatureCard 
            title="DARK STAND"
            description="Uma experiência única em ambiente com iluminação reduzida, aumentando a adrenalina e o desafio."
            imagePlaceholder="Imagem Dark Stand"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <FeatureCard 
            title="DESAFIO SNIPER"
            description="Teste suas habilidades em uma série de desafios cronometrados com diferentes níveis de dificuldade."
            imagePlaceholder="Imagem Desafio Sniper"
          />
          <FeatureCard 
            title="PROGRESSÃO"
            description="Sistema de pontuação e progressão que incentiva os clientes a retornarem para melhorar suas habilidades."
            imagePlaceholder="Imagem Progressão"
          />
          <FeatureCard 
            title="EVENTOS"
            description="Organização de competições, eventos corporativos e festas temáticas para grupos e empresas."
            imagePlaceholder="Imagem Eventos"
          />
        </div>
      </Section>

      {/* Diferenciais */}
      <Section bgColor="black">
        <h2 className="text-center mb-12 text-white">NOSSOS <span className="text-[#D4AF37]">DIFERENCIAIS</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-6 text-white">
            <div className="text-[#D4AF37] text-4xl mb-4">01</div>
            <h3 className="text-xl font-bold mb-2">CONCEITO INOVADOR</h3>
            <p>Um modelo de negócio único no mercado, combinando entretenimento, esporte e adrenalina em um ambiente seguro.</p>
          </div>
          <div className="bg-[#111] p-6 text-white">
            <div className="text-[#D4AF37] text-4xl mb-4">02</div>
            <h3 className="text-xl font-bold mb-2">ALTA RENTABILIDADE</h3>
            <p>Modelo de negócio com excelente retorno sobre investimento, com payback estimado entre 10 e 15 meses.</p>
          </div>
          <div className="bg-[#111] p-6 text-white">
            <div className="text-[#D4AF37] text-4xl mb-4">03</div>
            <h3 className="text-xl font-bold mb-2">SUPORTE COMPLETO</h3>
            <p>Acompanhamento em todas as etapas, desde a escolha do ponto até o treinamento da equipe e suporte contínuo.</p>
          </div>
          <div className="bg-[#111] p-6 text-white">
            <div className="text-[#D4AF37] text-4xl mb-4">04</div>
            <h3 className="text-xl font-bold mb-2">MARCA RECONHECIDA</h3>
            <p>Faça parte de uma rede em expansão, com reconhecimento nacional e respaldo de uma empresa com 20 anos de mercado.</p>
          </div>
        </div>
      </Section>

      {/* Público-Alvo */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-200 h-80 flex items-center justify-center">
            <div className="text-center">
              <p className="text-lg font-bold">Imagem Público-Alvo</p>
              <p className="text-sm">(Placeholder para imagem)</p>
            </div>
          </div>
          <div>
            <h2 className="mb-6">PÚBLICO-<span className="text-[#D4AF37]">ALVO</span></h2>
            <p className="mb-4">
              A franquia Sniper atende um público diversificado, atraindo pessoas de diferentes 
              idades e perfis que buscam uma experiência de entretenimento diferenciada.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Jovens e adultos em busca de diversão e adrenalina</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Grupos de amigos e famílias</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Empresas para eventos corporativos e team building</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Entusiastas de esportes de tiro e airsoft</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#D4AF37] mr-2">✓</span>
                <span>Turistas em busca de experiências locais</span>
              </li>
            </ul>
            <p>
              Com múltiplas modalidades e níveis de dificuldade, a Sniper oferece opções 
              para iniciantes e experientes, garantindo diversão para todos os públicos.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="accent">
        <div className="text-center">
          <h2 className="mb-6">PRONTO PARA <span className="text-white">INVESTIR?</span></h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Junte-se à maior rede de franquias de entretenimento com estandes de tiro de airsoft do Brasil 
            e comece a empreender em um negócio inovador e lucrativo.
          </p>
          <Button href="/seja-franqueado" variant="primary">
            Quero ser um franqueado
          </Button>
        </div>
      </Section>
    </div>
  );
}
