/* Sajin Raj Amatya — Portfolio app.jsx */
const { useState, useEffect, useRef, useCallback } = React;

/* ============================================================
   DATA
============================================================ */
const SKILLS = [
  { name: 'Python',           icon: 'assets/icons/python.svg' },
  { name: 'SQL',              icon: 'assets/icons/sql.svg' },
  { name: 'Pandas',           icon: 'assets/icons/pandas.svg' },
  { name: 'RPA',              icon: 'assets/icons/rpa.svg' },
  { name: 'GenAI',            icon: 'assets/icons/genai.svg' },
  { name: 'Apache Airflow',   icon: 'assets/icons/airflow.svg' },
  { name: 'Microsoft Fabric', icon: 'assets/icons/fabric.svg' },
  { name: 'SSIS',             icon: 'assets/icons/ssis.svg' },
  { name: 'SSAS',             icon: 'assets/icons/ssas.svg' },
  { name: 'SSMS',             icon: 'assets/icons/ssms.svg' },
  { name: 'Power BI',         icon: 'assets/icons/powerbi.svg' },
  { name: 'dbt',              icon: 'assets/icons/dbt.svg' },
  { name: 'Databricks',       icon: 'assets/icons/databricks.svg' },
  { name: 'Azure',            icon: 'assets/icons/azure.svg' },
  { name: 'Docker',           icon: 'assets/icons/docker.svg' },
  { name: 'PyTorch',          icon: 'assets/icons/pytorch.svg' },
  { name: 'Unsloth',          icon: 'assets/icons/unsloth.svg' },
  { name: 'FastAPI',          icon: 'assets/icons/fastapi.svg' },
  { name: 'Django',           icon: 'assets/icons/django.svg' },
];

const SERVICES = [
  {
    title: 'Data Engineering',
    desc: 'Scalable pipelines and lakehouse architectures with strong governance and performance baked in.',
  },
  {
    title: 'Data Analytics',
    desc: 'Turning raw data into clear, decision-grade insight with SQL, Power BI and modern analytics tooling.',
  },
  {
    title: 'Applied AI',
    desc: 'Using GenAI, automation and fine-tuned models to make data workflows faster and decisions sharper.',
  },
  {
    title: 'Cloud & Platform',
    desc: 'Designing and deploying data solutions on Azure — Microsoft Fabric, cost management, performance tuning.',
  },
];

const EXPERIENCES = [
  {
    company: 'Quick Fox Consulting Pvt. Ltd.',
    role: 'Associate Software Engineer',
    timeline: 'Nov 2025 — Present',
    logo: 'assets/quickfox_logo.jpg',
    highlights: [
      'Developed and tested the Pandas node for Quick Studio using Python OOP, Pydantic, FastAPI, the Factory pattern and Git.',
      'Fine-tuned computer vision models to detect handwritten signatures, and VLMs on cheque datasets.',
      'Handled data generation and QA to ensure high-quality training inputs for model fine-tuning.',
    ],
  },
  {
    company: 'Quick Fox Consulting Pvt. Ltd.',
    role: 'Software Engineering Intern',
    timeline: 'Aug 2025 — Nov 2025',
    logo: 'assets/quickfox_logo.jpg',
    highlights: [
      'Built invoice extraction workflows using LLMs, refining prompts to reduce hallucinations.',
      'Worked with Azure Document Intelligence SDK (Python) and trained custom extraction models.',
      'Developed RPA bots tailored to client business requirements.',
    ],
  },
  {
    company: 'Danson Solutions Pvt. Ltd.',
    role: 'Artificial Intelligence Intern',
    timeline: 'Oct 2024 — Feb 2025',
    logo: 'assets/danson_logo.webp',
    highlights: [
      'Designed AI-powered content generation and summarization solutions using LLMs and prompt engineering.',
      'Automated Google Sheets and Drive tasks with gspread, Google APIs and Python scripts.',
      'Performed web scraping with Beautiful Soup and Selenium for structured data collection.',
      'Ran requirement gathering, EDA and statistical analysis to build business insights and visualizations.',
    ],
  },
];

const EDUCATION = [
  {
    degree: 'BSc (Hons) Computing with Artificial Intelligence',
    institution: 'Islington College — affiliated with London Metropolitan University',
    location: 'Kamalpokhari, Kathmandu',
    timeline: '2022 — 2025',
    tags: ['Machine Learning', 'Software Engineering', 'System Design', 'Big Data', 'Cloud Computing', 'IoT'],
  },
  {
    degree: 'School Leaving Certificate (SLC) — Science',
    institution: 'Kathmandu Model Secondary School',
    location: 'Kathmandu',
    timeline: '2020 — 2022',
    tags: ['National Examinations Board', 'Physics · Chemistry · Mathematics'],
  },
];

const PROJECTS = [
  {
    title: 'Employee Timesheet ETL',
    type: 'Data Engineering',
    year: '2025',
    desc: 'End-to-end ETL pipeline processing employee timesheet & HR data — extracts CSVs to MinIO (S3), transforms with Pandas, loads into PostgreSQL (3NF + Star Schema), and serves analytics via a secure FastAPI backend. Python · Apache Airflow · FastAPI · PostgreSQL · MinIO · Docker.',
    url: 'https://github.com/sajinamatya/employee_timesheet_ETL_project-',
    badge: 'Featured',
  },
  {
    title: 'Banking OCR',
    type: 'Computer Vision',
    year: '2025',
    desc: 'Django onboarding workflow with OCR, document ID, location tracking and face recognition for KYC. Python · Tesseract · YOLOv8s · OpenCV · MySQL · Roboflow.',
    url: 'https://github.com/sajinamatya/Banking-OCR',
  },
  {
    title: 'Expensoft Web App',
    type: 'Full-stack Web',
    year: '2024',
    desc: 'Expense and income tracker with CRUD, session management, role-based auth and analytics dashboards. Java EE · JSP/JSTL · Servlets · SQL · Tomcat.',
    url: 'https://github.com/sajinamatya/Expensoft',
  },
  {
    title: 'Road Pothole Detection',
    type: 'Object Detection',
    year: '2024',
    desc: 'Fine-tuned a YOLOv8s model on custom pothole data and deployed the inference app with Streamlit. Python · OpenCV.',
    url: 'https://github.com/sajinamatya/Road-Pothole-detection',
    liveUrl: 'https://sajinamatya-road-pothole-detection-deploy-dfdscu.streamlit.app/',
  },
  {
    title: 'Taxi Trip Data Pipeline',
    type: 'Data Warehouse',
    year: '2024',
    desc: 'Designed a data warehouse schema, built ETL with SSIS, analysed with SSAS/DAX and delivered Power BI dashboards for large-scale taxi trip data.',
    url: 'https://github.com/sajinamatya/Big-Data-Analytic-Taxi-provider-',
  },
  {
    title: 'Web Scraping Job Details',
    type: 'Data Pipeline',
    year: '2023',
    desc: 'Scraped job listings from Mero-Job, transformed data with Pandas and automated ETL into Excel using Airflow DAGs for scheduling and monitoring.',
    url: 'https://github.com/sajinamatya/Web-scraping-Jobs',
  },
  {
    title: 'Credit Card Default Prediction',
    type: 'Machine Learning',
    year: '2023',
    desc: 'Compared ML algorithms to identify customers at risk of credit-card default using demographic and payment data — enabling data-driven credit-risk decisions.',
    url: 'https://github.com/sajinamatya/Credit-card-default-prediction-',
  },
];

const CERTS_BANNERS = [
  { src: 'assets/cert_microsoft.png', alt: 'Microsoft Certified Fabric Data Engineer' },
  { src: 'assets/cert_de.png',        alt: 'DataCamp Certified Data Engineer' },
  { src: 'assets/cert_ds.png',        alt: 'DataCamp Data Scientist Associate' },
  { src: 'assets/cert_sql.png',       alt: 'DataCamp SQL Associate' },
];

const CERTS = [
  { title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)', issuer: 'Microsoft', issued: 'Apr 5, 2026', expires: 'Apr 6, 2027', url: 'https://learn.microsoft.com/en-us/users/sajinamatya-4888/credentials/5326094a9219850f' },
  { title: 'Certified Data Engineer',          issuer: 'DataCamp', issued: 'Sep 18, 2024', url: 'https://www.datacamp.com/certificate/DE0010458953414' },
  { title: 'Data Scientist Associate',         issuer: 'DataCamp', issued: 'Aug 22, 2024', url: 'https://www.datacamp.com/certificate/DSA0012121570076' },
  { title: 'SQL Associate',                    issuer: 'DataCamp', issued: '2024',          url: 'https://www.datacamp.com/certificate/SQA0014675194623' },
];

const SECTIONS = [
  { id: 'work',     label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certs',    label: 'Credentials' },
  { id: 'cv',       label: 'CV' },
  { id: 'contact',  label: 'Contact' },
];

/* ============================================================
   HOOKS / HELPERS
============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* Count-up animation for a numeric string like "7" or "DP-700" */
function useCountUp(target, duration = 1200) {
  const [display, setDisplay] = React.useState('0');
  const ref = useRef(null);
  useEffect(() => {
    const num = parseInt(target, 10);
    if (isNaN(num)) { setDisplay(target); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(String(Math.round(eased * num)));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(el);
    ref.current.__io = io;
    return () => io.disconnect();
  }, [target, duration]);
  return [display, ref];
}

/* Typed-text cycling hook */
function useTyped(phrases, speed = 70, pause = 1800) {
  const [text, setText] = React.useState('');
  useEffect(() => {
    let pi = 0, ci = 0, deleting = false, timer;
    const tick = () => {
      const phrase = phrases[pi];
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        ci++;
        if (ci === phrase.length) { deleting = true; timer = setTimeout(tick, pause); return; }
      } else {
        setText(phrase.slice(0, ci - 1));
        ci--;
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed);
    };
    timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, []);
  return text;
}

/* Animated KPI box */
function KpiBox({ value, label }) {
  const num = parseInt(value, 10);
  const [display, ref] = isNaN(num) ? [value, useRef(null)] : useCountUp(value);
  return (
    <div className="kpi" ref={ref}>
      <div className="v">{isNaN(num) ? value : display}{isNaN(num) ? '' : (value.includes('+') ? '+' : '')}</div>
      <div className="l">{label}</div>
    </div>
  );
}

function useScrollGlobals(setScrolled, setActive) {
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
      const bar = document.getElementById('scrollBar');
      if (bar) bar.style.setProperty('--p', p);

      // active section
      const fromTop = window.scrollY + window.innerHeight * 0.35;
      let cur = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= fromTop) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [setScrolled, setActive]);
}

function useCursorBlob() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const blob = document.getElementById('cursorBlob');
    if (!blob) return;
    let tx = window.innerWidth / 2, ty = window.innerHeight / 2;
    let x = tx, y = ty;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    window.addEventListener('mousemove', move);
    let raf;
    const tick = () => {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(raf);
    };
  }, []);
}

/* magnetic button — bind via ref */
function Magnetic({ children, strength = 18, className = '', ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / (r.width / 2);
      const dy = (e.clientY - cy) / (r.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);
  return <span ref={ref} className={`magnet ${className}`} {...rest}>{children}</span>;
}

/* ============================================================
   APP
============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "motion": 1
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch (e) { return 'light'; }
  });
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('work');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  // Tweaks
  const [t, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  useReveal();
  useScrollGlobals(setScrolled, setActive);
  useCursorBlob();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--motion', String(t.motion));
  }, [t.motion]);

  useEffect(() => {
    document.body.style.overflow = cvOpen ? 'hidden' : '';
  }, [cvOpen]);

  return (
    <>
      <Nav theme={theme} setTheme={setTheme} scrolled={scrolled} active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <SkillsMarquee />
      <Work />
      <Services />
      <Experience />
      <Education />
      <Certifications />
      <CV onView={() => setCvOpen(true)} />
      <Contact />
      <Footer />

      {cvOpen && (
        <div className="modal-bg" onClick={() => setCvOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setCvOpen(false)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
            </button>
            <iframe src="assets/SajinRajAmatya_CV.pdf" title="Sajin Raj Amatya — CV" />
          </div>
        </div>
      )}

      {window.TweaksPanel && (
        <window.TweaksPanel title="Tweaks">
          <window.TweakSection label="Motion">
            <window.TweakSlider
              label="Intensity"
              value={t.motion}
              min={0} max={1.5} step={0.05}
              onChange={(v) => setTweak('motion', v)}
            />
          </window.TweakSection>
        </window.TweaksPanel>
      )}
    </>
  );
}

/* ============================================================
   NAV
============================================================ */
function Nav({ theme, setTheme, scrolled, active, menuOpen, setMenuOpen }) {
  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">SA</span>
          <span className="brand-name">Sajin Raj Amatya<span className="dim-slash">/</span><span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>Data Engineer</span></span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className={active === s.id ? 'active' : ''}>
              {s.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button className="theme-toggle" aria-label="Toggle theme" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
              </svg>
            )}
          </button>
          <button className="menu-toggle" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
              : <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></svg>}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {SECTIONS.map((s) => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setMenuOpen(false)}>{s.label} <span>↗</span></a>
        ))}
      </div>
    </header>
  );
}

/* ============================================================
   HERO
============================================================ */
function Hero() {
  return (
    <section className="hero wrap reveal" id="top">
      <div className="hero-top">
        <span className="status"><span className="status-dot"></span> Open to opportunities · Kathmandu, NP</span>
        <div className="hero-meta">
          <span>Role <b>Data Engineer</b></span>
          <span>Cert <b>DP-700</b></span>
          <span>Year <b>2026</b></span>
        </div>
      </div>

      <div className="hero-headline">
        <h1 className="hero-h1">
          From raw data<br />to <span className="accent">AI.</span>
        </h1>
      </div>

      <div className="hero-bottom">
        <div className="hero-intro">
          <p>
            <b>Data Science &amp; Engineering.</b> Microsoft Fabric Data Engineer <span className="hl">DP-700</span> certified — a data professional with a strong interest in data engineering, data analysis and artificial intelligence.
          </p>
          <p style={{ marginTop: 14 }}>
            Experienced in <b>Python, RPA, SQL, Pandas</b>, database design, GenAI, Apache Airflow, and tools such as Microsoft Fabric, SSIS, SSAS, SSMS and Power BI. Currently expanding expertise in <b>dbt, Databricks</b> and <b>Azure</b> to deliver enterprise-scale solutions.
          </p>
          <div className="hero-actions">
            <Magnetic strength={6}>
              <a className="btn primary" href="#work">View work <span className="arrow">↗</span></a>
            </Magnetic>
            <Magnetic strength={6}>
              <a className="btn ghost" href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">Get in touch <span className="arrow">→</span></a>
            </Magnetic>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-id">
            <img src="assets/profile.jpg" alt="Sajin Raj Amatya" />
            <div>
              <div className="name">Sajin Raj Amatya</div>
              <div className="role">Data Engineer · Kathmandu</div>
            </div>
          </div>
          <div className="kpi-grid">
            <KpiBox value="DP-700" label="Microsoft cert" />
            <KpiBox value="3" label="Yrs experience" />
            <KpiBox value="19" label="Tools / stack" />
            <KpiBox value="7" label="Shipped projects" />
          </div>
          <div className="hero-availability">
            <span className="dot" aria-hidden="true"></span>
            <span>Available for new opportunities · Q2 2026</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ============================================================
   SKILLS MARQUEE
============================================================ */
function SkillsMarquee() {
  // duplicate for seamless loop
  const items = [...SKILLS, ...SKILLS];
  return (
    <div className="skills-marquee wrap" style={{ maxWidth: '100%', padding: 0, marginTop: 0, position: 'relative', zIndex: 2 }}>
      <div className="skills-track">
        {items.map((s, i) => (
          <span key={i} className="skill-chip">
            <img src={s.icon} alt="" aria-hidden="true" />
            {s.name}
            <span className="dot" aria-hidden="true"></span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   WORK (Projects)
============================================================ */
function Work() {
  return (
    <section className="section wrap" id="work">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 01 — Selected work</div>
          <h2>Things I&rsquo;ve <span className="accent">shipped</span>.</h2>
        </div>
        <p className="lede">
          Seven projects across data engineering, computer vision and ML — each links to source on GitHub, with live demos where applicable.
        </p>
      </div>

      <div className="proj-list">
        {PROJECTS.map((p, i) => (
          <div key={p.title}
               className={`proj-row reveal${p.badge ? ' proj-row--featured' : ''}`}
               style={{ '--i': i }}
               onClick={(e) => {
                 if (e.target.closest('a')) return;
                 window.open(p.url, '_blank', 'noopener,noreferrer');
               }}
               role="link"
               tabIndex={0}>
            <span className="proj-bar" aria-hidden="true"></span>
            <span className="proj-num">P/{String(i + 1).padStart(2, '0')}</span>
            <div>
              <div className="proj-title">
                {p.title}
                {p.badge && <span className="proj-badge">{p.badge}</span>}
              </div>
              {(p.liveUrl) && (
                <div className="proj-links">
                  <a href={p.url} target="_blank" rel="noreferrer">Source ↗</a>
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">Live demo ↗</a>
                </div>
              )}
              {(!p.liveUrl && p.badge) && (
                <div className="proj-links">
                  <a href={p.url} target="_blank" rel="noreferrer">Source ↗</a>
                </div>
              )}
            </div>
            <div className="proj-type">{p.type}<span className="year">{p.year}</span></div>
            <div className="proj-desc">{p.desc}</div>
            <a href={p.url} target="_blank" rel="noreferrer" className="proj-arrow" aria-label={`Open ${p.title}`}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="9 7 17 7 17 15"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   SERVICES
============================================================ */
function Services() {
  return (
    <section className="section wrap" id="services">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 02 — Services</div>
          <h2>What I&rsquo;m <span className="accent">good</span> at.</h2>
        </div>
        <p className="lede">
          I help teams turn complex data into reliable systems, fast insights and AI-ready pipelines — from architecture and orchestration to analytics and automation.
        </p>
      </div>

      <div className="services">
        {SERVICES.map((s, i) => (
          <div className="service-row reveal" style={{ '--i': i }} key={s.title}>
            <div className="service-num">/{String(i + 1).padStart(2, '0')}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-plus">+</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EXPERIENCE  — sticky stack
============================================================ */
function Experience() {
  return (
    <section className="section wrap" id="experience">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 03 — Experience</div>
          <h2>Where I&rsquo;ve <span className="accent">worked</span>.</h2>
        </div>
        <p className="lede">
          Three roles across consulting and AI — from invoice extraction with LLMs to fine-tuning vision models on cheques and signatures.
        </p>
      </div>

      <div className="exp-list">
        {EXPERIENCES.map((e, i) => (
          <article className="exp-row reveal" style={{ '--i': i }} key={`${e.company}-${e.role}`}>
            <div className="exp-head">
              <div className="exp-id">
                <img className="exp-logo" src={e.logo} alt={`${e.company} logo`} />
                <div>
                  <div className="exp-role">{e.role}</div>
                  <div className="exp-company">{e.company}</div>
                </div>
              </div>
              <span className="exp-time">{e.timeline}</span>
            </div>
            <ul>
              {e.highlights.map((h, j) => <li key={j}>{h}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   EDUCATION
============================================================ */
function Education() {
  return (
    <section className="section wrap" id="education">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 04 — Education</div>
          <h2>Where I <span className="accent">studied</span>.</h2>
        </div>
        <p className="lede">
          A foundation in Computing with AI from London Met (via Islington College), backed by a science-stream secondary education.
        </p>
      </div>

      <div className="edu-list">
        {EDUCATION.map((e, i) => (
          <article className="edu-card reveal" style={{ '--i': i }} key={e.degree}>
            <div>
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-meta">{e.institution}</div>
              <div className="edu-loc">{e.location}</div>
            </div>
            <span className="edu-time">{e.timeline}</span>
            <div className="edu-tags">
              {e.tags.map((t) => <span key={t} className="edu-tag">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   CERTIFICATIONS
============================================================ */
function Certifications() {
  return (
    <section className="section wrap" id="certs">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 05 — Credentials</div>
          <h2>The <span className="accent">paperwork</span>.</h2>
        </div>
        <p className="lede">
          Microsoft Fabric DP-700, plus DataCamp tracks in Data Engineering, Data Science and SQL.
        </p>
      </div>

      <div className="cert-grid">
        {CERTS_BANNERS.map((c, i) => (
          <div className="cert-banner reveal" style={{ '--i': i }} key={i}>
            <img src={c.src} alt={c.alt} />
          </div>
        ))}
      </div>

      <ul className="cert-list">
        {CERTS.map((c, i) => (
          <li className="cert-row reveal" style={{ '--i': i }} key={c.title}>
            <div>
              <div className="cert-title">{c.title}</div>
              <div className="cert-meta">
                {c.issuer} · Issued {c.issued}{c.expires ? ` · Expires ${c.expires}` : ''}
              </div>
            </div>
            {c.url && <a href={c.url} target="_blank" rel="noreferrer">View credential ↗</a>}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ============================================================
   CV
============================================================ */
function CV({ onView }) {
  return (
    <section className="section wrap" id="cv">
      <div className="section-head reveal">
        <div>
          <div className="section-num">§ 06 — Curriculum vitae</div>
          <h2>Read the <span className="accent">long version</span>.</h2>
        </div>
        <p className="lede">
          The full resume as a PDF — open it in-browser, or grab a download.
        </p>
      </div>

      <div className="cv-card reveal">
        <div>
          <h3>Sajin Raj Amatya — CV</h3>
          <p className="meta">PDF · Updated 2026</p>
        </div>
        <div className="cv-actions">
          <Magnetic strength={6}><a className="btn primary" href="assets/SajinRajAmatya_CV.pdf" target="_blank" rel="noreferrer">View CV <span className="arrow">↗</span></a></Magnetic>
          <Magnetic strength={6}><a className="btn ghost" href="assets/SajinRajAmatya_CV.pdf" download>Download <span className="arrow">↓</span></a></Magnetic>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTACT
============================================================ */
function Contact() {
  return (
    <section className="section wrap contact-block reveal" id="contact">
      <span className="eyebrow contact-eyebrow">§ 07 — Let&rsquo;s talk</span>
      <h2>
        <a href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">
          Let&rsquo;s build <span className="accent">something</span>.
        </a>
      </h2>
      <p className="contact-sub">
        I&rsquo;m open to roles in data engineering, analytics and applied AI — full-time or contract.
        Best way to reach me is LinkedIn or GitHub below.
      </p>
      <div className="contact-links">
        <Magnetic strength={4}><a href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.84H5.67v8.5h2.67zM7 8.67a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.67v-4.66c0-2.5-1.34-3.66-3.13-3.66a2.7 2.7 0 0 0-2.45 1.35V9.84h-2.67c.04.75 0 8.5 0 8.5h2.67v-4.75c0-.24.02-.48.09-.65.2-.48.63-.97 1.37-.97.96 0 1.35.73 1.35 1.8v4.57h2.77z"/></svg>
          LinkedIn
        </a></Magnetic>
        <Magnetic strength={4}><a href="https://github.com/sajinamatya" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
          GitHub
        </a></Magnetic>
        <Magnetic strength={4}><a href="https://learn.microsoft.com/en-us/users/sajinamatya-4888" target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8.5v8.5H3V3zm9.5 0H21v8.5h-8.5V3zM3 12.5h8.5V21H3v-8.5zm9.5 0H21V21h-8.5v-8.5z"/></svg>
          Microsoft Learn
        </a></Magnetic>
        <Magnetic strength={4}><a href="assets/SajinRajAmatya_CV.pdf" download>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          Download CV
        </a></Magnetic>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer className="footer wrap">
      <span>© {new Date().getFullYear()} Sajin Raj Amatya</span>
      <span>Kathmandu · Nepal</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}

/* ============================================================
   MOUNT
============================================================ */
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
