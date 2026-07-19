import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  EnvelopeSimple,
  List,
  MapPin,
  Phone,
  Play,
  X,
} from "@phosphor-icons/react";

export const projects = [
  {
    id: "villa",
    number: "01",
    title: "Villa Méditerranéenne",
    label: "Extérieur · Visualisation 3D",
    year: "2026",
    category: "Extérieur",
    cover: "/assets/hero-villa.png",
    position: "center",
    description:
      "Un refuge extérieur paisible, façonné par la pierre chaleureuse, l’ombre du bois et une palette végétale méditerranéenne.",
    media: [
      { type: "image", src: "/assets/hero-villa.png", alt: "Piscine de villa et pergola en bois au coucher du soleil" },
      { type: "image", src: "/assets/villa-pool-alternate.jpg", alt: "Vue panoramique de la piscine et du foyer extérieur" },
      { type: "image", src: "/assets/villa-angle.png", alt: "Vue alternative de l’extérieur de la villa" },
      { type: "image", src: "/assets/villa-lounge.jpg", alt: "Salon extérieur sous la pergola textile" },
      { type: "image", src: "/assets/villa-twilight.png", alt: "Extérieur de la villa au crépuscule" },
      { type: "image", src: "/assets/villa-detail.png", alt: "Vue détaillée de l’aménagement extérieur" },
      { type: "video", src: "/assets/villa-film.mp4", alt: "Visite cinématique de l’extérieur de la villa" },
    ],
  },
  {
    id: "casa",
    number: "02",
    title: "Cuisine Casa Verde",
    label: "Intérieur · Du concept au détail",
    year: "2026",
    category: "Intérieur",
    cover: "/assets/casa-verde.jpg",
    position: "center",
    description:
      "Une cuisine contemporaine développée depuis la perspective dessinée à la main jusqu’à l’étude des matériaux et aux détails techniques.",
    media: [
      { type: "image", src: "/assets/casa-verde.jpg", alt: "Rendu de la cuisine Casa Verde" },
      { type: "image", src: "/assets/casa-sink-detail.jpg", alt: "Vue détaillée du linéaire évier de la cuisine Casa Verde" },
      { type: "image", src: "/assets/casa-storage-detail.jpg", alt: "Composition des rangements toute hauteur de Casa Verde" },
      { type: "image", src: "/assets/casa-sketch.png", alt: "Perspective de cuisine dessinée à la main" },
      { type: "image", src: "/assets/casa-palette.png", alt: "Palette de matériaux de Casa Verde" },
      { type: "image", src: "/assets/casa-technical.png", alt: "Planche technique de la cuisine Casa Verde" },
      { type: "video", src: "/assets/casa-film.mp4", alt: "Animation cinématique de la cuisine Casa Verde" },
    ],
  },
  {
    id: "kitchen",
    number: "03",
    title: "Cuisine Monochrome",
    label: "Intérieur · Étude jour et nuit",
    year: "2026",
    category: "Intérieur",
    cover: "/assets/kitchen-main.png",
    position: "center",
    description:
      "Une cuisine en L précise, équilibrant pierre claire, chêne chaleureux et rangements noirs réfléchissants dans des scènes de jour et de nuit.",
    media: [
      { type: "image", src: "/assets/kitchen-main.png", alt: "Cuisine contemporaine en lumière de jour" },
      { type: "image", src: "/assets/kitchen-night.png", alt: "Étude d’éclairage nocturne de la cuisine contemporaine" },
      { type: "image", src: "/assets/kitchen-night-side.jpg", alt: "Vue nocturne des rangements et de l’éclairage intégré" },
      { type: "image", src: "/assets/kitchen-night-wide.jpg", alt: "Vue nocturne du plan de travail et de la zone cuisson" },
      { type: "image", src: "/assets/kitchen-side.png", alt: "Vue latérale de la cuisine" },
      { type: "image", src: "/assets/kitchen-wide.png", alt: "Vue large de la cuisine" },
      { type: "video", src: "/assets/kitchen-film.mp4", alt: "Animation de la cuisine" },
    ],
  },
  {
    id: "planning",
    number: "04",
    title: "Développement Cuisine",
    label: "Technique · Matériaux et implantation",
    year: "2026",
    category: "Études",
    cover: "/assets/kitchen-board-1.jpg",
    position: "center",
    description:
      "Un ensemble coordonné de plans, élévations, sélections de matériaux et visualisations finales.",
    media: [
      { type: "image", src: "/assets/kitchen-board-1.jpg", alt: "Planche de présentation du développement de la cuisine" },
      { type: "image", src: "/assets/kitchen-board-2.jpg", alt: "Planche de conception et de matériaux de la cuisine" },
      { type: "image", src: "/assets/sl-kitchen.jpg", alt: "Rendu de la cuisine SL" },
      { type: "image", src: "/assets/sl-plan.jpg", alt: "Plan de la cuisine SL" },
    ],
  },
  {
    id: "residence",
    number: "05",
    title: "Étude Résidentielle",
    label: "Architecture · Plans et zonage",
    year: "2026",
    category: "Études",
    cover: "/assets/residence-plan.png",
    position: "center",
    description:
      "Un aménagement résidentiel développé par l’étude de la circulation, du zonage et des plans architecturaux détaillés.",
    media: [
      { type: "image", src: "/assets/residence-plan.png", alt: "Plan meublé du rez-de-chaussée de la résidence" },
      { type: "image", src: "/assets/residence-zoning.png", alt: "Étude du zonage fonctionnel de la résidence" },
      { type: "image", src: "/assets/residence-plan-level.png", alt: "Plan de l’étage de la résidence" },
      { type: "image", src: "/assets/residence-structure.png", alt: "Plan de structure et trame constructive de la résidence" },
      { type: "image", src: "/assets/residence-sections.png", alt: "Coupes techniques et développement de l’escalier" },
    ],
  },
  {
    id: "padel",
    number: "06",
    title: "Centre de Padel",
    label: "Commercial · Aménagement du site",
    year: "2026",
    category: "Commercial",
    cover: "/assets/padel-site.png",
    position: "center",
    description:
      "Une proposition de loisirs coordonnant terrains de padel, paysage, accueil et circulation sur une parcelle urbaine irrégulière.",
    media: [
      { type: "image", src: "/assets/padel-site-context.png", alt: "Analyse du contexte urbain et végétal du centre de padel" },
      { type: "image", src: "/assets/padel-zoning.png", alt: "Zonage fonctionnel du centre de padel" },
      { type: "image", src: "/assets/padel-concept.png", alt: "Schémas conceptuels de la forme et des circulations" },
      { type: "image", src: "/assets/padel-site.png", alt: "Plan de site du centre de padel" },
      { type: "image", src: "/assets/padel-plan.png", alt: "Plan développé du centre de padel" },
    ],
  },
  {
    id: "restaurant",
    number: "07",
    title: "Aménagement Restaurant",
    label: "Commercial · Plans et implantation",
    year: "2026",
    category: "Commercial",
    cover: "/assets/restaurant-plan-furnished.jpg",
    position: "center",
    description:
      "Une étude d’aménagement commercial développant la capacité d’accueil, les circulations, les zones de service et plusieurs niveaux de détail du plan.",
    media: [
      { type: "image", src: "/assets/restaurant-plan-furnished.jpg", alt: "Plan meublé et implantation générale du restaurant" },
      { type: "image", src: "/assets/restaurant-plan-zoning.jpg", alt: "Plan de zonage et limites fonctionnelles du restaurant" },
      { type: "image", src: "/assets/restaurant-plan-detailed.jpg", alt: "Plan détaillé des espaces de restauration et de service" },
      { type: "image", src: "/assets/restaurant-plan-structure.jpg", alt: "Trame structurelle et distribution du restaurant" },
      { type: "image", src: "/assets/restaurant-plan-layout.jpg", alt: "Variante d’implantation du mobilier et des assises" },
    ],
  },
  {
    id: "rceh",
    number: "08",
    title: "Résidence Collective RCEH",
    label: "Architecture · Analyse et distribution",
    year: "2026",
    category: "Études",
    cover: "/assets/rceh-plan.png",
    position: "center",
    description:
      "Une étude résidentielle collective articulant analyse du site, orientation solaire, distribution des logements et lecture technique des plans.",
    media: [
      { type: "image", src: "/assets/rceh-site-analysis.png", alt: "Analyse des limites, accès et voisinage du terrain RCEH" },
      { type: "image", src: "/assets/rceh-sun-analysis.png", alt: "Étude de l’ensoleillement du terrain RCEH" },
      { type: "image", src: "/assets/rceh-ground-plan.png", alt: "Plan développé des logements de la résidence collective" },
      { type: "image", src: "/assets/rceh-plan.png", alt: "Plan meublé de la résidence collective" },
      { type: "image", src: "/assets/rceh-plan-legend.png", alt: "Plan architectural accompagné de sa légende technique" },
    ],
  },
];

const categories = ["Tous", "Intérieur", "Extérieur", "Études", "Commercial"];

function Media({ item, className = "" }) {
  if (item.type === "video") {
    return <video className={className} src={item.src} controls autoPlay muted playsInline />;
  }
  return <img className={className} src={item.src} alt={item.alt} />;
}

export function Lightbox({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const item = project.media[index];

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + project.media.length) % project.media.length);
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % project.media.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    document.body.classList.add("modal-open");
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.classList.remove("modal-open");
    };
  }, [onClose, project.media.length]);

  const change = (direction) => {
    setIndex((current) => (current + direction + project.media.length) % project.media.length);
  };

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Galerie du projet ${project.title}`}>
      <div className="lightbox__top">
        <div>
          <span className="eyebrow">{project.number} / {project.year}</span>
          <h2>{project.title}</h2>
        </div>
        <button className="icon-button icon-button--light" onClick={onClose} aria-label="Fermer la galerie">
          <X weight="light" />
        </button>
      </div>

      <div className="lightbox__stage">
        <Media item={item} />
        {item.type === "video" && <span className="lightbox__video-label"><Play weight="fill" /> Film du projet</span>}
      </div>

      <div className="lightbox__footer">
        <p>{project.description}</p>
        <div className="lightbox__controls">
          <span>{String(index + 1).padStart(2, "0")} / {String(project.media.length).padStart(2, "0")}</span>
          <button className="icon-button icon-button--light" onClick={() => change(-1)} aria-label="Image précédente">
            <ArrowLeft />
          </button>
          <button className="icon-button icon-button--light" onClick={() => change(1)} aria-label="Image suivante">
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="lightbox__thumbs" aria-label="Miniatures de la galerie">
        {project.media.map((media, mediaIndex) => (
          <button
            key={`${media.src}-${mediaIndex}`}
            className={mediaIndex === index ? "active" : ""}
            onClick={() => setIndex(mediaIndex)}
            aria-label={`Voir le média ${mediaIndex + 1}`}
          >
            {media.type === "video" ? (
              <span className="video-thumb"><Play weight="fill" /></span>
            ) : (
              <img src={media.src} alt="" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export function App() {
  const [category, setCategory] = useState("Tous");
  const [activeProject, setActiveProject] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProjects = useMemo(
    () => (category === "Tous" ? projects : projects.filter((project) => project.category === category)),
    [category],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [category]);

  const openProject = (project) => {
    setActiveProject(project);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="site-shell">
        <aside className="rail" aria-label="Identité du portfolio">
          <a className="rail__mark" href="#top" aria-label="Retour en haut">AKT</a>
          <span className="rail__location">GABÈS — TUNISIA</span>
          <span className="rail__coordinates">34.097° N<br />10.098° E</span>
        </aside>

        <div className="page">
          <header className="topbar" id="top">
            <a className="mobile-mark" href="#top" aria-label="Retour en haut">AKT</a>
            <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Navigation principale">
              <a href="/" aria-current="page" onClick={closeMenu}>Accueil</a>
              <a href="/projects.html" onClick={closeMenu}>Projets</a>
              <a href="#studio" onClick={closeMenu}>Profil</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </nav>
            <a className="availability" href="mailto:asmakamelthabti@gmail.com">
              <span /> Disponible pour collaborations
            </a>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Ouvrir ou fermer le menu">
              {menuOpen ? <X /> : <List />}
            </button>
          </header>

          <main>
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero__intro">
                <img
                  className="hero__wordmark"
                  src="/assets/asma-wordmark.png"
                  alt="Asma Kamel Thabti"
                />
                <p className="hero__role">Designer d’intérieur diplômée</p>
                <h1 id="hero-title">De la première ligne<br />à l’atmosphère finale<span>.</span></h1>
                <p className="hero__summary">
                  Design d’intérieur, développement technique et visualisation 2D/3D.
                </p>
                <a className="outline-button" href="#projects">
                  Découvrir le portfolio <ArrowRight />
                </a>
              </div>

              <div className="hero__visual" aria-label="Projet vedette : villa méditerranéenne">
                <img className="hero__photo" src="/assets/hero-villa.png" alt="Extérieur d’une villa méditerranéenne avec piscine et pergola en bois" />
                <img className="hero__plan" src="/assets/residence-plan.png" alt="" />
                <div className="hero__project-label">
                  <strong>Extérieur Villa</strong>
                  <span>/ 2026</span>
                </div>
                <div className="hero__annotation">Projet résidentiel — Gabès, Tunisie<br />Phase : visualisation finale</div>
              </div>

              <a className="hero__scroll" href="#process" aria-label="Faire défiler vers le processus">
                Défiler <ArrowDown />
              </a>
            </section>

            <section className="process" id="process" aria-label="Processus de conception">
              {[
                ["01", "Concept", "Intentions & parti"],
                ["02", "Développement", "Plans & détails techniques"],
                ["03", "Visualisation", "Matériaux, lumière & ambiance"],
              ].map(([number, title, note]) => (
                <div className="process__step" key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><small>{note}</small></div>
                </div>
              ))}
              <div className="process__stamp">2D ↔ 3D</div>
            </section>

            <section className="projects-section" id="projects">
              <div className="section-heading" data-reveal>
                <div>
                  <span className="eyebrow">Travaux sélectionnés / 2026</span>
                  <h2>Des projets façonnés<br />de l’idée à l’expérience.</h2>
                </div>
                <p>
                  Espaces résidentiels, commerciaux et de loisirs développés à travers un processus complet :
                  analyse, zonage, plans, détails techniques et visualisation finale.
                </p>
              </div>

              <div className="projects-toolbar" data-reveal>
                <div className="filters" role="group" aria-label="Filtrer les projets">
                {categories.map((item) => (
                  <button
                    key={item}
                    className={category === item ? "active" : ""}
                    onClick={() => setCategory(item)}
                    aria-pressed={category === item}
                  >
                    {item}
                  </button>
                ))}
                </div>
                <a className="all-projects-link" href="/projects.html">Voir tous les projets <ArrowUpRight /></a>
              </div>

              <div className="project-grid">
                {visibleProjects.map((project, index) => (
                  <article
                    className={`project-card project-card--${(index % 3) + 1}`}
                    key={project.id}
                    data-reveal
                  >
                    <button className="project-card__media" onClick={() => openProject(project)} aria-label={`Ouvrir ${project.title}`}>
                      <img src={project.cover} alt="" style={{ objectPosition: project.position }} />
                      <span className="project-card__open"><ArrowUpRight /></span>
                      {project.media.some((item) => item.type === "video") && (
                        <span className="project-card__film"><Play weight="fill" /> Film</span>
                      )}
                    </button>
                    <div className="project-card__meta">
                      <span>{project.number}</span>
                      <div>
                        <h3>{project.title}</h3>
                        <p>{project.label}</p>
                      </div>
                      <span>{project.year}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="studio" id="studio">
              <div className="studio__title" data-reveal>
                <span className="eyebrow">Profil / Gabès</span>
                <h2>Clarté technique.<br />Atmosphère humaine.</h2>
              </div>
              <div className="studio__copy" data-reveal>
                <p className="studio__lead">
                  Je conçois des espaces modernes, fonctionnels et esthétiques, en passant avec précision
                  de l’analyse du site et du concept aux plans, dossiers techniques, choix des matériaux et rendus 3D professionnels.
                </p>
                <p>
                  Diplômée en Architecture d’Intérieur à l’IMSET Tunisie, je suis ouverte aux collaborations
                  à distance, aux missions freelance et aux partenariats durables avec des agences d’architecture,
                  bureaux de design, entreprises et particuliers.
                </p>
                <div className="studio__facts">
                  <div><span>Domaines</span><strong>Résidentiel<br />Commercial<br />Hôtellerie</strong></div>
                  <div><span>Logiciels</span><strong>AutoCAD<br />SketchUp · V-Ray<br />3ds Max · Lumion</strong></div>
                  <div><span>Langues</span><strong>Arabe<br />Français<br />Italien · Anglais</strong></div>
                </div>
              </div>
              <div className="studio__portrait" data-reveal>
                <img src="/assets/asma-portrait.jpeg" alt="Portrait d’Asma Kamel Thabti" />
                <span>Asma Kamel Thabti<br />Designer d’intérieur</span>
              </div>
            </section>

            <section className="contact" id="contact">
              <span className="contact__index">09 / Contact</span>
              <div className="contact__headline" data-reveal>
                <p>Vous avez un espace en tête ?</p>
                <h2>Transformons la première ligne<br />en atmosphère<span>.</span></h2>
              </div>
              <div className="contact__details" data-reveal>
                <a href="mailto:asmakamelthabti@gmail.com">
                  <EnvelopeSimple /> asmakamelthabti@gmail.com <ArrowUpRight />
                </a>
                <a href="tel:+21625938386">
                  <Phone /> +216 25 938 386
                </a>
                <span><MapPin /> Gabès, Tunisie · À distance dans le monde entier</span>
              </div>
              <footer>
                <span>© 2026 Asma Kamel Thabti</span>
                <a href="#top">Retour en haut <ArrowUpRight /></a>
              </footer>
            </section>
          </main>
        </div>
      </div>

      {activeProject && <Lightbox project={activeProject} onClose={() => setActiveProject(null)} />}
    </>
  );
}
