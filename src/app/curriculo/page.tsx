import React from 'react';
import './curriculo.css'; // certifique-se que o CSS esteja nesse caminho

export default function CurriculoPage() {
    return (
        <>
            {/* Cabeçalho com nome e informações de contato */}
            <div className="curriculo-header">
                <h1>Allan Andrade de Jesus</h1>
                <a
                    href="/curriculo.pdf"
                    className="floating-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📄 Baixar Currículo
                </a>

                <p>
                    Email: <a href="mailto:allan.aj1993@gmail.com">allan.aj1993@gmail.com</a> |
                    Telefone: (21) 96429-9127
                </p>
                <p>Idade: 32 anos | Localização: São João de Meriti, Rio de Janeiro</p>
                <p>
                    LinkedIn: <a href="https://linkedin.com/in/allan93aj">linkedin.com/in/allan93aj</a> |
                    GitHub: <a href="https://github.com/Allan93aj">github.com/Allan93aj</a> |
                    Instagram: <a href="https://instagram.com/aandradedev">instagram.com/aandradedev</a>
                </p>
            </div>

            {/* Conteúdo principal */}
            <main className="curriculo-main">
                {/* Experiência Profissional */}
                <section className="curriculo-section">
                    <h2>Experiência Profissional</h2>

                    <div className="job">
                        <h3>Simples Inovação | Desenvolvedor Front-end</h3>
                        <p className="job-periodo">08/2024 – 06/2025</p>
                        <ul>
                            <li>Construção de páginas responsivas e otimizadas para e-commerce utilizando VTEX IO e Shopify.</li>
                            <li>Desenvolvimento de interfaces intuitivas com foco em usabilidade (UX/UI).</li>
                            <li>Otimização para SEO com boas práticas de performance e meta tags.</li>
                            <li>Colaboração com design e marketing usando metodologias ágeis.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Level4 | Desenvolvedor Front-end</h3>
                        <p className="job-periodo">06/2022 – 04/2024</p>
                        <ul>
                            <li>Desenvolvi e mantive layouts para e-commerce com VTEX IO.</li>
                            <li>Implementei landing pages com HTML, CSS, JS e TypeScript.</li>
                            <li>Trabalhei junto a designers aplicando UX/UI.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Logcommerce | Desenvolvedor Front-end</h3>
                        <p className="job-periodo">01/2021 – 12/2021</p>
                        <ul>
                            <li>Gerenciei projetos VTEX.</li>
                            <li>Usei JS, jQuery, CSS e HTML para melhorar o desempenho do site.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Simples Inovação | Desenvolvedor Front-end</h3>
                        <p className="job-periodo">06/2019 – 12/2020</p>
                        <ul>
                            <li>Criação de layouts e landing pages para e-commerce usando VTEX.</li>
                        </ul>
                    </div>

                    <div className="job">
                        <h3>Microlins | Monitor de Informática</h3>
                        <p className="job-periodo">11/2018 – 03/2019</p>
                        <ul>
                            <li>Auxílio e monitoria de alunos em cursos de informática.</li>
                        </ul>
                    </div>
                </section>

                {/* Habilidades Técnicas */}
                <section className="curriculo-section">
                    <h2>Habilidades Técnicas</h2>
                    <ul>
                        <li>Linguagens: HTML, CSS, Javascript, TypeScript</li>
                        <li>Frameworks: React.js, jQuery, Node.js</li>
                        <li>E-commerce: VTEX, Shopify</li>
                        <li>Ferramentas: WordPress, Figma, Photoshop</li>
                        <li>Metodologias: Kanban, Scrum</li>
                        <li>Versionamento: GIT</li>
                    </ul>
                </section>

                {/* Formação Acadêmica */}
                <section className="curriculo-section">
                    <h2>Formação Acadêmica</h2>
                    <p>Bacharelado em Ciência da Computação - Universidade Cruzeiro do Sul</p>
                    <p>Técnico em Informática - Senac-RJ</p>
                </section>

                {/* Certificações e Cursos */}
                <section className="curriculo-section">
                    <h2>Certificações e Cursos</h2>
                    <ul>
                        <li>AWS Re/Start Graduate - Senac RJ</li>
                        <li>Inglês Intermediário</li>
                        <li>Pacote Office (Word, Excel, PowerPoint)</li>
                        <li>Montagem e Manutenção de Computadores - S.O.S</li>
                        <li>Cursos de React, Node.js e Python</li>
                    </ul>
                </section>
            </main>
        </>
    );
}
