import Link from "next/link";

const features = [
  {
    title: "Instantly Deployable",
    description: "Ready for Vercel from the ground up with sensible defaults and modern tooling.",
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M12 2L1 21h22L12 2zm0 5.6l6.16 10.4H5.84L12 7.6z"
        />
      </svg>
    )
  },
  {
    title: "Designed to Impress",
    description: "Crisp gradients, glassmorphism, and responsive layout ensure a delightful first impression.",
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M5 3h14a2 2 0 012 2v14l-4-3-4 3-4-3-4 3V5a2 2 0 012-2z"
        />
      </svg>
    )
  },
  {
    title: "DX Optimized",
    description: "Strict TypeScript, linting, and typed routes are configured for confident iteration.",
    icon: (
      <svg className="feature-card__icon" viewBox="0 0 24 24" aria-hidden>
        <path
          fill="currentColor"
          d="M4 6a2 2 0 012-2h4v2H6v12h4v2H6a2 2 0 01-2-2V6zm10-2h4a2 2 0 012 2v12a2 2 0 01-2 2h-4v-2h4V6h-4V4z"
        />
      </svg>
    )
  }
];

const milestones = [
  {
    label: "01",
    heading: "Command the Greeting",
    copy: "Kick off conversations with an elegant hero section tailored for human or AI visitors alike."
  },
  {
    label: "02",
    heading: "Showcase Capabilities",
    copy: "Highlight key qualities of your autonomous experience so teammates instantly grasp the value."
  },
  {
    label: "03",
    heading: "Launch in Seconds",
    copy: "Deploy straight to Vercel, then iterate confidently with built-in linting and modern tooling."
  }
];

export default function Home() {
  return (
    <div className="hero">
      <span className="hero__badge" aria-label="Autonomous greeting ready">
        <svg viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M12 22a10 10 0 100-20 10 10 0 000 20zm-.75-6.25l-3.5-3.5 1.5-1.5 2 2 4.5-4.5 1.5 1.5-6 6z"
          />
        </svg>
        Agentic greeting initialized
      </span>
      <h1 className="hero__title">Hi there, welcome to your autonomous launchpad.</h1>
      <p className="hero__subtitle">
        This polished Next.js experience is generated end-to-end without hesitation. Customize the narrative, connect
        APIs, and ship directly to production with zero setup friction.
      </p>
      <Link className="hero__cta" href="https://agentic-609c3197.vercel.app" target="_blank" rel="noreferrer">
        Visit live deployment
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path
            fill="currentColor"
            d="M5 5h14v14h-2V8.41l-9.29 9.3-1.42-1.42L15.59 7H5V5z"
          />
        </svg>
      </Link>

      <section className="features" aria-label="Core capabilities">
        {features.map(feature => (
          <article className="feature-card" key={feature.title}>
            {feature.icon}
            <h2 className="feature-card__title">{feature.title}</h2>
            <p className="feature-card__description">{feature.description}</p>
          </article>
        ))}
      </section>

      <section className="timeline" aria-label="Launch milestones">
        {milestones.map(item => (
          <article className="timeline__item" key={item.heading}>
            <span className="timeline__label">{item.label}</span>
            <h3 className="timeline__heading">{item.heading}</h3>
            <p className="timeline__copy">{item.copy}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
