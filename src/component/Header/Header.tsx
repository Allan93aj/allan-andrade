// src/components/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md">
            <Link href={"/"}>
                <div className="text-xl font-bold text-gray-900">Allan Andrade / Desenvolvedor Front-end</div>
            </Link>
            <nav>
                <ul className="flex gap-6 text-gray-700 font-medium">
                    <li>
                        <Link href="/sobre" className="hover:text-blue-600 transition-colors">
                            Sobre mim
                        </Link>
                    </li>
                    <li>
                        <Link href="/curriculo" className="hover:text-blue-600 transition-colors">
                            Currículo
                        </Link>
                    </li>
                    <li>
                        <Link href="/ecommerces" className="hover:text-blue-600 transition-colors">
                            E-commerces
                        </Link>
                    </li>
                    <li>
                        <Link href="/outros-projetos" className="hover:text-blue-600 transition-colors">
                            Outros projetos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" className="hover:text-blue-600 transition-colors">
                            Contato
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
