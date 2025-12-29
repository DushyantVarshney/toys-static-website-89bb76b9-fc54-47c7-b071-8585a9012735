const features = [
  {
    title: "App Router",
    detail: "Uses the /app directory with layouts, metadata, and server components by default."
  },
  {
    title: "TypeScript-first",
    detail: "Strict TypeScript config, ready for typed routes and editor tooling."
  },
  {
    title: "ESLint + Core Web Vitals",
    detail: "Next.js linting preset included to keep pages performant and accessible."
  },
  {
    title: "Ready to deploy",
    detail: "Standard scripts for development, production builds, and lint checks."
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Next.js Template</p>
        <h1>Start building with the App Router</h1>
        <p className="lede">
          Opinionated defaults, clean styling, and scripts to get you from idea to deployed
          Next.js app faster.
        </p>
        <div className="cta-row">
          <a className="button primary" href="https://nextjs.org/docs">
            Read the docs
          </a>
          <a className="button ghost" href="https://nextjs.org/learn">
            Take the tutorial
          </a>
        </div>
      </header>

      <section className="card-grid" aria-label="Template features">
        {features.map((feature) => (
          <article className="card" key={feature.title}>
            <h2>{feature.title}</h2>
            <p>{feature.detail}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
