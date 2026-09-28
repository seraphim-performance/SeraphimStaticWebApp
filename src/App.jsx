import { site, intro, prototype, upcoming, contact } from './content.js'
import SeraphimLogo from './SeraphimLogo.jsx'

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <header className="hero">
        <h1 className="logo">
          <SeraphimLogo className="logo-mark" />
        </h1>
        <p className="url">{site.url}</p>
        <span className="tether" aria-hidden="true" />
      </header>

      <main>
        <section className="block" aria-label="About Seraphim">
          <p className="intro">{intro}</p>
        </section>

        <span className="tether" aria-hidden="true" />

        <section className="block" aria-labelledby="prototype-title">
          <h2 id="prototype-title" className="heading">
            <span className="heading-lead">{prototype.lead}</span>
            <span className="visually-hidden">: </span>
            <span className="product">{prototype.name}</span>
          </h2>
          <p className="body">{prototype.body}</p>
        </section>

        <span className="tether" aria-hidden="true" />

        <section className="block" aria-labelledby="upcoming-title">
          <h2 id="upcoming-title" className="heading">
            <span className="heading-lead">{upcoming.lead}</span>
            <span className="visually-hidden">: </span>
            <span className="statement">{upcoming.body}</span>
          </h2>
        </section>
      </main>

      <footer className="footer">
        <p className="contact-name">{contact.name}</p>
        <a className="contact-email" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
        <p className="copyright">
          © {year} {site.name}
        </p>
      </footer>
    </>
  )
}
