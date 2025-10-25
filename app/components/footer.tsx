export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Crafted autonomously by Codex · {new Date().getFullYear()} | Deploy-ready for Vercel
      </p>
      <div className="footer__links">
        <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="footer__link">
          Next.js Docs
        </a>
        <a href="https://vercel.com" target="_blank" rel="noreferrer" className="footer__link">
          Vercel Platform
        </a>
      </div>
    </footer>
  );
}
