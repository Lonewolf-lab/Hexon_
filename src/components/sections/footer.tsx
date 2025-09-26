import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/lugano-living-lab/' },
  { name: 'Facebook', href: 'https://www.facebook.com/luganolivinglab' },
  { name: 'X', href: 'https://twitter.com/luganoL_Lab' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCzaV1hWCe8f2T4y9aIMg62A' },
  { name: 'Instagram', href: 'https://www.instagram.com/luganolivinglab/' },
];

const navLinks1 = [
  { name: 'Progetti', href: '/progetti' },
  { name: 'Eventi', href: '/eventi' },
  { name: 'Ricerca', href: '/ricerca' },
  { name: 'Contatto', href: 'mailto:info@luganolivinglab.ch' },
];

const navLinks2 = [
  { name: 'Network', href: '/network' },
  { name: 'Privacy policies', href: '#' },
  { name: 'Impressum', href: '#' },
  { name: 'Lavora con noi', href: '#' },
];

const AnimatedBlob = () => (
  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] pointer-events-none opacity-20">
    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_30s_linear_infinite]">
      <defs>
        <filter id="footer-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="4" />
        </filter>
      </defs>
      <g filter="url(#footer-blur)" transform="translate(100 100)">
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d="M 50,25 A 25,25 0 0 1 50,-25"
            fill="none"
            stroke="var(--color-accent-purple)"
            strokeWidth="6"
            strokeLinecap="round"
            transform={`rotate(${i * 60})`}
          />
        ))}
      </g>
    </svg>
  </div>
);

const Footer = () => {
    
  const linkClassName = "hover:opacity-80 transition-opacity text-sm text-primary-text";
    
  return (
    <footer className="bg-black text-primary-text relative overflow-hidden">
      <div className="container mx-auto px-6 pt-32 pb-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
          
          <div className="md:col-span-4">
            <p className="font-normal text-base mb-4 text-primary-text">Città di Lugano</p>
            <div className="text-secondary-text text-sm space-y-1">
              <p>Comunicazione e innovazione digitale</p>
              <p>Lugano Living Lab</p>
              <p>Piazza della Riforma 1</p>
              <p>CH-6900 Locarno</p>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <ul className="space-y-3">
              {navLinks1.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("mailto:") ? (
                    <a href={link.href} className={linkClassName}>
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkClassName}>
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-2">
            <ul className="space-y-3">
              {navLinks2.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={linkClassName}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-3 lg:col-span-4 relative hidden md:block">
             <AnimatedBlob />
          </div>

        </div>

        <div className="mt-24">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:opacity-80 transition-opacity text-sm text-primary-text">
                {link.name}
                <ArrowUpRight className="w-3 h-3"/>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 bg-secondary relative px-6 sm:px-12 py-20 flex items-center">
          <div>
            <h2 className="font-light text-5xl sm:text-6xl tracking-tight" style={{ lineHeight: '1.1' }}>
              L*3 Lugano <br /> Living Lab
            </h2>
          </div>
          <p className="absolute bottom-6 left-6 sm:left-12 text-xs text-secondary-text">
            2025 © L*3 Lugano Living Lab
          </p>
        </div>
        <div className="lg:w-7/12 bg-accent-yellow text-black px-6 sm:px-12 py-12 flex items-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-12 w-full">
                <div className="flex flex-col">
                    <p className="text-xs mb-4">Promosso da:</p>
                    <div className="flex items-start gap-3">
                        <img src="https://cdn.prod.website-files.com/68343fa1c24481e96810ea51/683c399a5e82b76e828114f2_lugano-logo.svg" alt="Città di Lugano Logo" className="h-12 w-12"/>
                        <p className="font-medium text-sm leading-snug pt-1">Città<br/>di Lugano</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-xs mb-4">In partenariato con:</p>
                    <div className="flex items-start gap-3">
                         <img src="https://cdn.prod.website-files.com/68343fa1c24481e96810ea51/683c39999f8489c09c2b4899_usi-logo.svg" alt="USI Logo" className="h-12 w-12"/>
                         <p className="font-medium text-sm leading-snug pt-1">
                            Università<br/>della<br/>Svizzera<br/>italiana
                         </p>
                    </div>
                </div>
                 <div className="flex flex-col">
                    <p className="text-xs mb-4">Membro di:</p>
                     <div className="flex items-start gap-3">
                         <img src="https://cdn.prod.website-files.com/68343fa1c24481e96810ea51/683c3999f2a3375c3f9104fc_enoll-logo.svg" alt="EnoLL Logo" className="h-12 w-12"/>
                        <p className="font-medium text-sm leading-snug pt-1">
                            European<br/>Network of<br/>Living Labs
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;