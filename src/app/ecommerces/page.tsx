import React from 'react';
import './ecommerces.css';

interface Ecommerce {
  nome: string;
  descricao: string;
  imagem: string;
  link: string;
}

const ecommerces: Ecommerce[] = [
  {
    nome: 'Elle Et Lui',
    descricao: 'A Elle et Lui é uma marca de moda masculina e feminina fundada no Rio de Janeiro, que combina estilo clássico e sofisticação. Oferece roupas elegantes e atemporais, com vendas em lojas físicas e online para todo o Brasil.',
    imagem: 'img/projetos/elleetlui.png',
    link: 'https://www.elleetlui.com.br/',
  },
  {
    nome: 'Projeto B',
    descricao: 'E-commerce feito na Nuvemshop com layout responsivo.',
    imagem: '/img/projeto2.png',
    link: 'https://projeto-b.com',
  },
  {
    nome: 'Projeto C',
    descricao: 'Loja personalizada no Shopify com checkout otimizado.',
    imagem: '/img/projeto3.png',
    link: 'https://projeto-c.com',
  },
];

const EcommerceList: React.FC = () => {
  return (
    <div className="ecommerces-container">
      <h1 className="ecommerces-title">Meus E-commerces</h1>
      <div className="ecommerces-grid">
        {ecommerces.map((item, index) => (
          <div key={index} className="ecommerces-card">
            <a 
             className="ecommerces-link"
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
            <img src={item.imagem} alt={item.nome} />
            <h2 className="ecommerces-name">{item.nome}</h2>
            </a>
            <p className="ecommerces-desc">{item.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcommerceList;
