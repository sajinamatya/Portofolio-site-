import type { CSSProperties } from 'react'
import { useEffect, useState } from 'react'
import profilePhoto from './assets/profile.jpg'
import dataCampBanner from './assets/DE - Twitter.png'
import dsAssociateBanner from './assets/DS Associate - Twitter.png'
import sqlAssociateBanner from './assets/SQL Associate - Twitter.png'
import microsoftCertBanner from './assets/image.png'
import quickFoxLogo from './assets/quickfox_logo.jpg'
import dansonLogo from './assets/danson-solution-logo-10.webp'
import pythonIcon from './assets/icons/python.svg'
import sqlIcon from './assets/icons/sql.svg'
import pandasIcon from './assets/icons/pandas.svg'
import rpaIcon from './assets/icons/rpa.svg'
import genaiIcon from './assets/icons/genai.svg'
import airflowIcon from './assets/icons/airflow.svg'
import fabricIcon from './assets/icons/fabric.svg'
import ssisIcon from './assets/icons/ssis.svg'
import ssasIcon from './assets/icons/ssas.svg'
import ssmsIcon from './assets/icons/ssms.svg'
import powerbiIcon from './assets/icons/powerbi.svg'
import dbtIcon from './assets/icons/dbt.svg'
import databricksIcon from './assets/icons/databricks.svg'
import azureIcon from './assets/icons/azure.svg'
import dockerIcon from './assets/icons/docker.svg'
import pytorchIcon from './assets/icons/pytorch.svg'
import unslothIcon from './assets/icons/unsloth.svg'
import fastapiIcon from './assets/icons/fastapi.svg'
import djangoIcon from './assets/icons/django.svg'
import './App.css'

const services = [
  {
    title: 'Data Engineering',
    description:
      'Build scalable pipelines and lakehouse architectures with strong governance and performance in mind.',
  },
  {
    title: 'Data Analytics',
    description:
      'Transform raw data into actionable insights using SQL, Power BI, and modern analytics tooling.',
  },
  {
    title: 'Applied AI',
    description:
      'Leverage GenAI and automation to improve data workflows and decision making.',
  },
  {
    title: 'Cloud & Platform Engineering',
    description:
      'Design and deploy data solutions on Azure — from infrastructure setup and Microsoft Fabric to cost management and performance tuning in the cloud.',
  },
]

const skills = [
  { name: 'Python', icon: pythonIcon },
  { name: 'SQL', icon: sqlIcon },
  { name: 'Pandas', icon: pandasIcon },
  { name: 'RPA', icon: rpaIcon },
  { name: 'GenAI', icon: genaiIcon },
  { name: 'Apache Airflow', icon: airflowIcon },
  { name: 'Microsoft Fabric', icon: fabricIcon },
  { name: 'SSIS', icon: ssisIcon },
  { name: 'SSAS', icon: ssasIcon },
  { name: 'SSMS', icon: ssmsIcon },
  { name: 'Power BI', icon: powerbiIcon },
  { name: 'dbt', icon: dbtIcon },
  { name: 'Databricks', icon: databricksIcon },
  { name: 'Azure', icon: azureIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'PyTorch', icon: pytorchIcon },
  { name: 'Unsloth', icon: unslothIcon },
  { name: 'FastAPI', icon: fastapiIcon },
  { name: 'Django', icon: djangoIcon },
]

const projects = [
  {
    title: 'Banking OCR',
    type: 'Computer Vision',
    description:
      'Django-based onboarding workflow using OCR, document ID, location tracking, and face recognition for KYC. Built with Python, Tesseract, YOLOv8s, OpenCV, MySQL, and Roboflow-labeled data.',
    url: 'https://github.com/sajinamatya/Banking-OCR',
  },
  {
    title: 'Expensoft Web App',
    type: 'Full-Stack Web App',
    description:
      'Expense and income tracking platform with CRUD features, session management, role-based auth, and analytics dashboards using Java EE (JSP/JSTL/Servlets), SQL, and Tomcat.',
    url: 'https://github.com/sajinamatya/Expensoft',
  },
  {
    title: 'Road Pothole Detection',
    type: 'Object Detection',
    description:
      'Fine-tuned a YOLOv8s model on custom pothole data and deployed the inference app with Streamlit using Python and OpenCV.',
    url: 'https://github.com/sajinamatya/Road-Pothole-detection',
    liveUrl: 'https://sajinamatya-road-pothole-detection-deploy-dfdscu.streamlit.app/',
  },
  {
    title: 'Taxi Trip Data Pipeline',
    type: 'Data Warehouse',
    description:
      'Designed a data warehouse schema, built ETL with SSIS, analyzed with SSAS/DAX, and delivered Power BI dashboards for large-scale taxi trip data.',
    url: 'https://github.com/sajinamatya/Big-Data-Analytic-Taxi-provider-',
  },
  {
    title: 'Web Scraping Job Details',
    type: 'Data Pipeline',
    description:
      'Scraped job listings from Mero-Job, transformed data with Pandas, and automated ETL into Excel using Airflow DAGs for scheduling and monitoring.',
    url: 'https://github.com/sajinamatya/Web-scraping-Jobs',
  },
  {
    title: 'Credit Card Default Prediction',
    type: 'Machine Learning',
    description:
      'Compared machine learning algorithms to identify customers at risk of credit card default using demographic and payment data, enabling data-driven credit risk decisions.',
    url: 'https://github.com/sajinamatya/Credit-card-default-prediction-',
  },
]

const certifications = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
    issuer: 'Microsoft',
    issued: 'Apr 5, 2026',
    expires: 'Apr 6, 2027',
    url: 'https://learn.microsoft.com/en-us/users/sajinamatya-4888/credentials/5326094a9219850f',
  },
  {
    title: 'Certified Data Engineer',
    issuer: 'DataCamp',
    issued: 'Sep 18, 2024',
    url: 'https://www.datacamp.com/certificate/DE0010458953414',
  },
  {
    title: 'Data Scientist Associate',
    issuer: 'DataCamp',
    issued: 'Aug 22, 2024',
    url: 'https://www.datacamp.com/certificate/DSA0012121570076',
  },
  {
    title: 'SQL Associate',
    issuer: 'DataCamp',
    issued: '2024',
    url: 'https://www.datacamp.com/certificate/SQA0014675194623',
  },
]

const experiences = [
  {
    company: 'Quick Fox Consulting Pvt. Ltd.',
    timeline: 'Nov 2025 – Present',
    role: 'Associate Software Engineer',
    highlights: [
      'Developed and tested the Pandas node for Quick Studio using Python OOP, Pydantic, FastAPI, Factory pattern, and Git.',
      'Fine-tuned computer vision models to detect handwritten signatures and VLMs on cheque datasets.',
      'Handled data generation and QA to ensure high-quality training inputs for model fine-tuning.',
    ],
    logo: quickFoxLogo,
  },
  {
    company: 'Quick Fox Consulting Pvt. Ltd.',
    timeline: 'Aug 2025 – Nov 2025',
    role: 'Software Engineering Intern',
    highlights: [
      'Built invoice extraction workflows using LLMs, improving prompts to reduce hallucinations.',
      'Worked with Azure Document Intelligence SDK (Python) and trained custom extraction models.',
      'Developed RPA bots tailored to client business requirements.',
    ],
    logo: quickFoxLogo,
  },
  {
    company: 'Danson Solutions Pvt. Ltd.',
    timeline: 'Oct 2024 – Feb 2025',
    role: 'Artificial Intelligence Intern',
    highlights: [
      'Designed AI-powered content generation and summarization solutions using LLMs and prompt engineering.',
      'Automated Google Sheets and Drive tasks with gspread, Google APIs, and Python scripts.',
      'Performed web scraping with Beautiful Soup and Selenium for structured data collection.',
      'Conducted requirement gathering, EDA, and statistical analysis to build business insights and visualizations.',
    ],
    logo: dansonLogo,
  },
]

const educations = [
  {
    degree: 'BSc (Hons) Computing with Artificial Intelligence',
    timeline: '2022 - 2025',
    institution: 'Islington College — affiliated with London Metropolitan University',
    location: 'Kamalpokhari, Kathmandu',
    tags: ['Machine Learning', 'Software Engineering', 'System Design', 'Big Data', 'Cloud Computing', 'IoT'],
    colorAccent: '#6d28d9',
    colorBg: '#ede9fe',
  },
  {
    degree: 'School Leaving Certificate (SLC) — Science',
    timeline: '2020 - 2022',
    institution: 'Kathmandu Model Secondary School',
    location: 'Kathmandu',
    tags: ['National Examinations Board', 'Physics • Chemistry • Maths'],
    colorAccent: '#059669',
    colorBg: '#d1fae5',
  },
]

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cvOpen, setCvOpen] = useState(false)

  useEffect(() => {
    if (cvOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [cvOpen])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const progress = Math.min(
        1,
        window.scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)
      )
      document.documentElement.style.setProperty('--scroll-progress', `${progress}`)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal, .reveal-item')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="page">
      <div className="scroll-progress" aria-hidden="true"></div>

      {/* Navbar */}
      <div className="navbar-wrapper">
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
          <a className="brand" href="#home">
            <span className="brand-mark">S</span>
            <span className="brand-name">Sajin Raj Amatya</span>
          </a>
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
            <a href="#services" onClick={() => setNavOpen(false)}>Services</a>
            <a href="#experience" onClick={() => setNavOpen(false)}>Experience</a>
            <a href="#education" onClick={() => setNavOpen(false)}>Education</a>
            <a href="#works" onClick={() => setNavOpen(false)}>Works</a>
            <a href="#certifications" onClick={() => setNavOpen(false)}>Certifications</a>
            <a href="#cv" onClick={() => setNavOpen(false)}>CV</a>
            <a href="#contact" onClick={() => setNavOpen(false)}>Contact</a>
          </nav>
          <div className="nav-actions">
            <a className="nav-cta" href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="nav-cta ghost" href="https://github.com/sajinamatya" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>
      </div>

      {/* Hero */}
      <section className="hero scroll-section reveal" id="home">
        <div className="hero-left">
          <p className="hero-label">Introduction</p>
          <h1>
            Data Science &amp; Engineering
            <span className="accent">.</span>
          </h1>
          <p className="hero-subtitle">
            Microsoft Fabric Data Engineer (DP-700) certified. A data professional with a strong interest in
            data engineering, data analysis, and artificial intelligence.
          </p>
          <p className="hero-body">
            Experienced in Python, RPA, SQL, Pandas, database design, GenAI, Apache Airflow, and tools such as
            Microsoft Fabric, SSIS, SSAS, SSMS, and Power BI. Currently expanding expertise in dbt, Databricks,
            and Azure to deliver enterprise-scale solutions.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#works">
              View projects
            </a>
            <a className="button ghost" href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">
              Let's connect
            </a>
            <a className="button ghost" href="https://github.com/sajinamatya" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="hero-tags">
            {skills.map((skill, index) => (
              <span key={skill.name} className="reveal-item" style={{ '--i': index } as CSSProperties}>
                <img className="skill-icon" src={skill.icon} alt="" aria-hidden="true" />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card reveal-item" style={{ '--i': 0 } as CSSProperties}>
            <img src={profilePhoto} alt="Sajin Raj Amatya" />
            <div>
              <h2>Sajin Raj Amatya</h2>
              <p>Data Engineer · Analytics · AI</p>
            </div>
          </div>
          <div className="hero-stats">
            <div className="reveal-item" style={{ '--i': 1 } as CSSProperties}>
              <h3>DP-700</h3>
              <p>Certification</p>
            </div>
            <div className="reveal-item" style={{ '--i': 2 } as CSSProperties}>
              <h3>14+</h3>
              <p>Tools mastered</p>
            </div>
            <div className="reveal-item" style={{ '--i': 3 } as CSSProperties}>
              <h3>Open</h3>
              <p>To opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="grid-section scroll-section reveal" id="services">
        <div className="section-title">
          <p>Services</p>
          <h2>Focused on data impact.</h2>
          <p className="section-note">
            I help teams turn complex data into reliable systems, fast insights, and AI-ready pipelines. From
            architecture and orchestration to analytics and automation, I build solutions that scale with the
            business and stay easy to maintain.
          </p>
        </div>
        <div className="cards">
          {services.map((service, index) => (
            <article key={service.title} className="reveal-item" style={{ '--i': index } as CSSProperties}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="grid-section scroll-section reveal" id="experience">
        <div className="section-title">
          <p>Experience</p>
          <h2>Work experience.</h2>
        </div>
        <div className="experience-list">
          {experiences.map((item, index) => (
            <article key={`${item.company}-${item.role}`} className="experience-card reveal-item" style={{ '--i': index } as CSSProperties}>
              <div className="experience-header">
                <div className="experience-title">
                  {item.logo ? (
                    <img className="experience-logo" src={item.logo} alt={`${item.company} logo`} />
                  ) : null}
                  <div>
                    <h3>{item.role}</h3>
                    <p className="meta">{item.company}</p>
                  </div>
                </div>
                <span className="experience-time">{item.timeline}</span>
              </div>
              <ul>
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="grid-section scroll-section reveal" id="education">
        <div className="section-title">
          <p>Education</p>
          <h2>Academic background.</h2>
        </div>
        <div className="education-list">
          {educations.map((item, index) => (
            <article key={item.degree} className="education-card reveal-item" style={{ '--i': index, '--accent-color': item.colorAccent, '--accent-bg': item.colorBg } as CSSProperties}>
              <div className="education-header">
                <div className="education-title">
                  <h3>{item.degree}</h3>
                  <p className="meta">{item.institution}</p>
                  <p className="meta location">{item.location}</p>
                </div>
                <span className="education-time">{item.timeline}</span>
              </div>
              <div className="education-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="edu-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="grid-section scroll-section reveal" id="works">
        <div className="section-title">
          <p>Portfolio</p>
          <h2>Selected project work.</h2>
        </div>
        <div className="cards projects">
          {projects.map((project, index) => (
            <article key={project.title} className="reveal-item" style={{ '--i': index } as CSSProperties}>
              <div className="pill">{project.type}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.url ? (
                  <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                    View project →
                  </a>
                ) : null}
                {project.liveUrl ? (
                  <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live demo →
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="grid-section scroll-section reveal" id="certifications">
        <div className="section-title">
          <p>Certifications</p>
          <h2>Professional credentials.</h2>
        </div>
        <div className="cert-banner-grid">
          <div className="cert-banner reveal-item" style={{ '--i': 0 } as CSSProperties}>
            <img src={microsoftCertBanner} alt="Microsoft Certified: Fabric Data Engineer Associate" />
          </div>
          <div className="cert-banner reveal-item" style={{ '--i': 1 } as CSSProperties}>
            <img src={dataCampBanner} alt="DataCamp Certified Data Engineer banner" />
            <div className="cert-overlay">
              <h3>Certified as a Data Engineer</h3>
              <p>By DataCamp</p>
            </div>
          </div>
          <div className="cert-banner reveal-item" style={{ '--i': 2 } as CSSProperties}>
            <img src={dsAssociateBanner} alt="DataCamp Certified Data Scientist Associate banner" />
            <div className="cert-overlay">
              <h3>Certified as a Data Scientist Associate</h3>
              <p>By DataCamp</p>
            </div>
          </div>
          <div className="cert-banner reveal-item" style={{ '--i': 3 } as CSSProperties}>
            <img src={sqlAssociateBanner} alt="DataCamp Certified SQL Associate banner" />
            <div className="cert-overlay">
              <h3>Certified as a SQL Associate</h3>
              <p>By DataCamp</p>
            </div>
          </div>
        </div>
        <div className="cards certifications">
          {certifications.map((cert, index) => (
            <article key={cert.title} className="reveal-item" style={{ '--i': index } as CSSProperties}>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <p className="meta">Issued: {cert.issued}</p>
              {cert.expires ? <p className="meta">Expires: {cert.expires}</p> : null}
              {cert.url ? (
                <a className="text-link" href={cert.url} target="_blank" rel="noreferrer" style={{ marginTop: '10px' }}>
                  View credential →
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* CV */}
      <section className="grid-section scroll-section reveal" id="cv">
        <div className="section-title">
          <p>CV</p>
          <h2>View my curriculum vitae.</h2>
          <p className="section-note">
            Download or open the latest version of my CV.
          </p>
        </div>
        <div className="cv-card reveal-item" style={{ '--i': 0 } as CSSProperties}>
          <div>
            <h3>Sajin Raj Amatya — CV</h3>
            <p className="meta">PDF · Updated</p>
          </div>
          <div className="cv-actions">
            <button className="button primary" onClick={() => setCvOpen(true)}>
              View CV
            </button>
            <a className="button ghost" href="/SajinRajAmatya_CV.pdf" download>
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="grid-section scroll-section reveal" id="contact">
        <div className="section-title">
          <p>Contact</p>
          <h2>Let's discuss opportunities.</h2>
        </div>
        <div className="contact-card reveal-item" style={{ '--i': 0 } as CSSProperties}>
          <div>
            <h3>LinkedIn</h3>
            <p>www.linkedin.com/in/sajin-amatya</p>
          </div>
          <div className="cv-actions">
            <a className="button primary" href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">
              Message me
            </a>
            <a className="button ghost" href="https://github.com/sajinamatya" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Sajin Raj Amatya. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sajin-amatya" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/sajinamatya" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

      {/* CV Modal */}
      {cvOpen && (
        <div className="cv-modal-overlay" onClick={() => setCvOpen(false)}>
          <div className="cv-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cv-modal-close" onClick={() => setCvOpen(false)} aria-label="Close modal">×</button>
            <iframe src="/SajinRajAmatya_CV.pdf" title="CV" className="cv-iframe" />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
