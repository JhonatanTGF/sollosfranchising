import React from 'react';
import Section from '@/components/Section';
import Button from '@/components/Button';

export default function ContatoPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              FALE <span className="text-[#D4AF37]">CONOSCO</span>
            </h1>
            <p className="text-xl mb-8">
              Entre em contato com a Sollos Franchising. Estamos à disposição para esclarecer suas dúvidas e fornecer mais informações.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <Section bgColor="white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="mb-6">ENVIE SUA <span className="text-[#D4AF37]">MENSAGEM</span></h2>
            <p className="mb-6">
              Preencha o formulário ao lado para entrar em contato conosco. Nossa equipe responderá o mais breve possível.
            </p>
            <div className="bg-gray-100 p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">INFORMAÇÕES DE CONTATO</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <span>contato@sollosfranchising.com.br</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span>(11) 9999-9999</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#D4AF37] mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </span>
                  <span>
                    Av. Paulista, 1000 - Bela Vista<br />
                    São Paulo - SP, 01310-100<br />
                    Brasil
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-black hover:text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="#" className="text-black hover:text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Nome Completo</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">E-mail</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Telefone</label>
                <input type="tel" id="phone" className="w-full p-3 border border-gray-300" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                <select id="subject" className="w-full p-3 border border-gray-300">
                  <option value="">Selecione um assunto</option>
                  <option value="franquia">Informações sobre franquia</option>
                  <option value="parceria">Proposta de parceria</option>
                  <option value="imprensa">Contato para imprensa</option>
                  <option value="outro">Outro assunto</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                <textarea id="message" rows={6} className="w-full p-3 border border-gray-300"></textarea>
              </div>
              <div>
                <Button variant="accent" className="w-full">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>

      {/* Mapa */}
      <Section bgColor="light" className="pt-0">
        <div className="bg-gray-200 h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-lg font-bold">Mapa de Localização</p>
            <p className="text-sm">(Placeholder para mapa)</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section bgColor="white">
        <h2 className="text-center mb-12">PERGUNTAS <span className="text-[#D4AF37]">FREQUENTES</span></h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Como faço para me tornar um franqueado?</h3>
            <p>Para se tornar um franqueado Sniper, preencha o formulário na página "Seja um Franqueado" ou entre em contato diretamente conosco. Nossa equipe entrará em contato para dar início ao processo de seleção.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Qual é o investimento inicial para abrir uma franquia?</h3>
            <p>O investimento inicial para abrir uma franquia Sniper é a partir de R$ 250.000,00, incluindo taxa de franquia, equipamentos, mobiliário, projeto arquitetônico e treinamento inicial.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Quanto tempo leva para abrir uma unidade?</h3>
            <p>O tempo médio para abertura de uma unidade é de 3 a 4 meses, desde a assinatura do contrato até a inauguração, incluindo escolha do ponto, projeto, obras e treinamento.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Preciso ter experiência no setor?</h3>
            <p>Não é necessário ter experiência prévia no setor. Oferecemos treinamento completo e suporte contínuo para garantir o sucesso do seu negócio.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quais são as cidades disponíveis para novas unidades?</h3>
            <p>Temos disponibilidade para novas unidades em diversas cidades do Brasil. Entre em contato conosco para verificar a disponibilidade na sua região.</p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section bgColor="accent">
        <div className="text-center">
          <h2 className="mb-6">AINDA COM <span className="text-white">DÚVIDAS?</span></h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Nossa equipe está pronta para esclarecer todas as suas dúvidas e fornecer mais informações sobre a franquia Sniper.
          </p>
          <Button href="/seja-franqueado" variant="primary">
            Fale com um consultor
          </Button>
        </div>
      </Section>
    </div>
  );
}
