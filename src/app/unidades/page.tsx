import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function UnidadesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              NOSSAS <span className="text-[#D4AF37]">UNIDADES</span>
            </h1>
            <p className="text-xl mb-8">
              Conheça as unidades da franquia Sniper espalhadas pelo Brasil e encontre a mais próxima de você.
            </p>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <Section bgColor="white">
        <h2 className="text-center mb-12">ONDE <span className="text-[#D4AF37]">ESTAMOS</span></h2>
        <div className="bg-gray-200 h-96 flex items-center justify-center mb-12">
          <div className="text-center">
            <p className="text-lg font-bold">Mapa de Unidades</p>
            <p className="text-sm">(Placeholder para mapa interativo)</p>
          </div>
        </div>
        <div className="text-center">
          <p className="mb-6">
            A franquia Sniper está em constante expansão, com unidades em diversas cidades do Brasil.
            Encontre a unidade mais próxima de você e venha viver essa experiência única!
          </p>
          <Button href="/seja-franqueado" variant="primary">
            Quero abrir uma unidade na minha cidade
          </Button>
        </div>
      </Section>

      {/* Unidades por Região */}
      <Section bgColor="light">
        <h2 className="text-center mb-12">UNIDADES POR <span className="text-[#D4AF37]">REGIÃO</span></h2>
        
        {/* Sudeste */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b border-[#D4AF37] pb-2">SUDESTE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="text-xl font-bold mb-2">São Paulo - Shopping Ibirapuera</h4>
              <p className="mb-2">Av. Ibirapuera, 3103 - Indianópolis</p>
              <p className="mb-2">São Paulo - SP</p>
              <p className="mb-4">Tel: (11) 9999-9999</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-2">São Paulo - Shopping Eldorado</h4>
              <p className="mb-2">Av. Rebouças, 3970 - Pinheiros</p>
              <p className="mb-2">São Paulo - SP</p>
              <p className="mb-4">Tel: (11) 9999-8888</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-2">Piracicaba - Piracicaba Shopping</h4>
              <p className="mb-2">Av. Limeira, 722 - Areião</p>
              <p className="mb-2">Piracicaba - SP</p>
              <p className="mb-4">Tel: (19) 9999-7777</p>
              <p className="bg-[#D4AF37] text-black inline-block px-2 py-1 text-sm font-bold">EM IMPLANTAÇÃO</p>
            </div>
          </div>
        </div>
        
        {/* Sul */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 border-b border-[#D4AF37] pb-2">SUL</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="text-xl font-bold mb-2">Curitiba - Shopping Palladium</h4>
              <p className="mb-2">R. Pres. Kennedy, 4121 - Portão</p>
              <p className="mb-2">Curitiba - PR</p>
              <p className="mb-4">Tel: (41) 9999-6666</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-2">Porto Alegre - Bourbon Shopping</h4>
              <p className="mb-2">Av. Assis Brasil, 164 - São João</p>
              <p className="mb-2">Porto Alegre - RS</p>
              <p className="mb-4">Tel: (51) 9999-5555</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
          </div>
        </div>
        
        {/* Nordeste */}
        <div>
          <h3 className="text-2xl font-bold mb-6 border-b border-[#D4AF37] pb-2">NORDESTE</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h4 className="text-xl font-bold mb-2">Salvador - Shopping Barra</h4>
              <p className="mb-2">Av. Centenário, 2992 - Barra</p>
              <p className="mb-2">Salvador - BA</p>
              <p className="mb-4">Tel: (71) 9999-4444</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
            <div className="card">
              <h4 className="text-xl font-bold mb-2">Recife - Shopping Recife</h4>
              <p className="mb-2">R. Padre Carapuceiro, 777 - Boa Viagem</p>
              <p className="mb-2">Recife - PE</p>
              <p className="mb-4">Tel: (81) 9999-3333</p>
              <a href="#" className="text-[#D4AF37] font-bold">Ver no mapa</a>
            </div>
          </div>
        </div>
      </Section>

      {/* Novas Unidades */}
      <Section bgColor="black">
        <h2 className="text-center mb-12 text-white">NOVAS <span className="text-[#D4AF37]">UNIDADES</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">EM BREVE EM NOVAS CIDADES</h3>
            <p className="mb-6 text-white">
              A franquia Sniper está em constante expansão, com novas unidades sendo implantadas em diversas cidades do Brasil.
              Fique atento às novidades e seja o primeiro a conhecer nossas novas unidades!
            </p>
            <div className="bg-[#111] p-6 text-white mb-6">
              <h4 className="text-xl font-bold mb-2 text-[#D4AF37]">PRÓXIMAS INAUGURAÇÕES</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Piracicaba - SP (Junho/2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Brasília - DF (Julho/2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Belo Horizonte - MG (Agosto/2025)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  <span>Fortaleza - CE (Setembro/2025)</span>
                </li>
              </ul>
            </div>
            <Button href="/seja-franqueado" variant="accent">
              Quero ser um franqueado
            </Button>
          </div>
          <div className="bg-gray-700 h-80 flex items-center justify-center">
            <div className="text-center text-white">
              <p className="text-lg font-bold">Imagem Nova Unidade</p>
              <p className="text-sm">(Placeholder para imagem)</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="accent">
        <div className="text-center">
          <h2 className="mb-6">NÃO TEM UMA UNIDADE NA SUA <span className="text-white">CIDADE?</span></h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Seja o pioneiro! Traga a franquia Sniper para sua cidade e ofereça uma experiência única de entretenimento.
          </p>
          <Button href="/seja-franqueado" variant="primary">
            Quero abrir uma unidade
          </Button>
        </div>
      </Section>
    </div>
  );
}
