import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              SEJA UM FRANQUEADO <span className="text-[#D4AF37]">SNIPER</span>
            </h1>
            <p className="text-xl mb-8">
              A maior rede de franquias de entretenimento com estandes de tiro de airsoft do Brasil. 
              Invista em um negócio com alta rentabilidade e retorno garantido.
            </p>
            <Link href="/seja-franqueado" className="btn-accent">
              Quero ser um franqueado
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre a Franquia */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">SOBRE A <span className="text-[#D4AF37]">FRANQUIA</span></h2>
              <p className="mb-4">
                A Sollos Franchising, com 20 anos de história dedicada à excelência e qualidade, 
                traz para o mercado a franquia Sniper, uma experiência única de entretenimento 
                com estandes de tiro de airsoft.
              </p>
              <p className="mb-6">
                Nossa missão é proporcionar diversão e adrenalina em um ambiente seguro e 
                controlado, oferecendo diferentes modalidades para todas as idades.
              </p>
              <Link href="/sobre" className="btn-primary">
                Conheça nossa história
              </Link>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-bold">Imagem da Franquia</p>
                <p className="text-sm">(Placeholder para imagem)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section bg-black text-white">
        <div className="container">
          <h2 className="text-center mb-12">NOSSOS <span className="text-[#D4AF37]">NÚMEROS</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-[#D4AF37] mb-2">+30</div>
              <p className="uppercase text-sm tracking-wider">Países de Atuação</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#D4AF37] mb-2">+1000</div>
              <p className="uppercase text-sm tracking-wider">Colaboradores</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#D4AF37] mb-2">+1200</div>
              <p className="uppercase text-sm tracking-wider">Itens em Produção</p>
            </div>
            <div>
              <div className="text-5xl font-black text-[#D4AF37] mb-2">120</div>
              <p className="uppercase text-sm tracking-wider">Prêmios Internacionais</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalidades */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">MODALIDADES <span className="text-[#D4AF37]">SNIPER</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <p className="font-bold">Imagem Estande de Tiro</p>
              </div>
              <h3 className="text-xl font-bold mb-2">ESTANDE DE TIRO</h3>
              <p>Pratique sua pontaria em nossos estandes de tiro com diferentes níveis de dificuldade e alvos.</p>
            </div>
            <div className="card">
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <p className="font-bold">Imagem Duelo</p>
              </div>
              <h3 className="text-xl font-bold mb-2">DUELO</h3>
              <p>Desafie seus amigos em duelos emocionantes e descubra quem tem a melhor mira e reflexos.</p>
            </div>
            <div className="card">
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <p className="font-bold">Imagem Dark Stand</p>
              </div>
              <h3 className="text-xl font-bold mb-2">DARK STAND</h3>
              <p>Uma experiência única em ambiente com iluminação reduzida, aumentando a adrenalina e o desafio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seja um Franqueado */}
      <section className="section bg-[#D4AF37] text-black">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">INVISTA EM UM NEGÓCIO DE <span className="text-white">SUCESSO</span></h2>
              <p className="mb-4">
                A franquia Sniper oferece um modelo de negócio com alta rentabilidade, 
                com payback estimado entre 10 e 15 meses e faturamento que pode ultrapassar 
                1 milhão de reais ao ano.
              </p>
              <p className="mb-6">
                Oferecemos todo o suporte necessário para o sucesso do seu negócio, 
                desde a escolha do ponto até o treinamento da equipe e suporte contínuo.
              </p>
              <Link href="/seja-franqueado" className="bg-black text-white px-6 py-3 rounded-none uppercase font-bold tracking-wider hover:bg-opacity-90 transition-all">
                Quero saber mais
              </Link>
            </div>
            <div className="bg-gray-200 h-80 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-bold">Imagem de Franqueado</p>
                <p className="text-sm">(Placeholder para imagem)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="text-center mb-12">DEPOIMENTOS DE <span className="text-[#D4AF37]">FRANQUEADOS</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <p className="italic mb-4">
                "Investir na franquia Sniper foi a melhor decisão que tomei. O retorno veio mais rápido do que o esperado e o suporte da Sollos Franchising é excepcional."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">João Silva</p>
                  <p className="text-sm">Franqueado em São Paulo</p>
                </div>
              </div>
            </div>
            <div className="card">
              <p className="italic mb-4">
                "A franquia Sniper atrai um público diversificado e fiel. O modelo de negócio é sólido e a marca já é reconhecida no mercado, o que facilita muito a captação de clientes."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">Maria Oliveira</p>
                  <p className="text-sm">Franqueada em Belo Horizonte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section bg-black text-white text-center">
        <div className="container">
          <h2 className="mb-6">PRONTO PARA <span className="text-[#D4AF37]">COMEÇAR?</span></h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Entre em contato conosco e descubra como fazer parte da maior rede de franquias de entretenimento com estandes de tiro de airsoft do Brasil.
          </p>
          <Link href="/contato" className="btn-accent">
            Fale com um consultor
          </Link>
        </div>
      </section>
    </div>
  );
}
