"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          SOLLOS<span className="text-[#446EEC]">.</span> FRANCHISING
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/sobre" className="nav-link">
            Sobre Nós
          </Link>
          <Link href="/franquia" className="nav-link">
            Franquia Sniper
          </Link>
          <Link href="/seja-franqueado" className="nav-link">
            Seja um Franqueado
          </Link>
          <Link href="/unidades" className="nav-link">
            Unidades
          </Link>
          <Link href="/contato" className="nav-link">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link
              href="/franquia"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Franquia Sniper
            </Link>
            <Link
              href="/seja-franqueado"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Seja um Franqueado
            </Link>
            <Link
              href="/unidades"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Unidades
            </Link>
            <Link
              href="/contato"
              className="nav-link block py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
