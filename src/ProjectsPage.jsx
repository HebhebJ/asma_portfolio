import { useState } from "react";
import { ArrowUpRight, Images, List, X } from "@phosphor-icons/react";
import { Lightbox, projects } from "./App.jsx";

export function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);
  const [previewProject, setPreviewProject] = useState(projects[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="site-shell projects-page">
        <aside className="rail" aria-label="Identité du portfolio">
          <a className="rail__mark" href="/" aria-label="Retour à l’accueil">AKT</a>
          <span className="rail__location">GABÈS — TUNISIE</span>
          <span className="rail__coordinates">34.097° N<br />10.098° E</span>
        </aside>

        <div className="page">
          <header className="topbar projects-page__topbar">
            <a className="mobile-mark" href="/" aria-label="Retour à l’accueil">AKT</a>
            <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navigation principale">
              <a href="/" onClick={closeMenu}>Accueil</a>
              <a href="/projects.html" aria-current="page" onClick={closeMenu}>Projets</a>
              <a href="/#studio" onClick={closeMenu}>Profil</a>
              <a href="/#contact" onClick={closeMenu}>Contact</a>
            </nav>
            <span className="projects-page__count">{String(projects.length).padStart(2, "0")} projets / 2026</span>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir ou fermer le menu">
              {menuOpen ? <X /> : <List />}
            </button>
          </header>

          <main>
            <section className="projects-index-hero">
              <span className="eyebrow">Index complet / Asma Kamel Thabti</span>
              <h1>Tous les<br />projets<span>.</span></h1>
              <p>
                Une sélection de projets résidentiels, commerciaux et de loisirs :
                du premier croquis à la visualisation finale.
              </p>
              <span className="projects-index-hero__note">Cliquez sur un projet pour ouvrir son dossier</span>
            </section>

            <section className="project-index" aria-label="Liste de tous les projets">
              <div className="project-index__preview" aria-hidden="true">
                <img src={previewProject.cover} alt="" />
                <div>
                  <span>{previewProject.number}</span>
                  <strong>{previewProject.title}</strong>
                </div>
              </div>

              <div className="project-index__list">
                {projects.map((project) => (
                  <article
                    className="project-index__row"
                    key={project.id}
                    onMouseEnter={() => setPreviewProject(project)}
                    onFocus={() => setPreviewProject(project)}
                  >
                    <span className="project-index__number">{project.number}</span>
                    <button onClick={() => setActiveProject(project)}>
                      <span className="project-index__title">{project.title}</span>
                      <span className="project-index__label">{project.label}</span>
                    </button>
                    <span className="project-index__year">{project.year}</span>
                    <button
                      className="project-index__open"
                      onClick={() => setActiveProject(project)}
                      aria-label={`Ouvrir le dossier ${project.title}`}
                    >
                      <Images />
                      <span>Ouvrir le dossier</span>
                      <ArrowUpRight />
                    </button>
                  </article>
                ))}
              </div>
            </section>

            <section className="projects-page__contact">
              <span>Un projet à imaginer ?</span>
              <a href="mailto:asmakamelthabti@gmail.com">
                Parlons-en <ArrowUpRight />
              </a>
            </section>
          </main>
        </div>
      </div>

      {activeProject && <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
}
