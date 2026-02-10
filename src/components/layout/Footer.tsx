import { footerData } from '../../data/footerData';

function IconSocialFacebook() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_38256_1310)">
        <path d="M9.96053 9.96075H8.29365V7.35023C8.29365 6.72772 8.28253 5.92637 7.42668 5.92637C6.5585 5.92637 6.42569 6.60462 6.42569 7.30491V9.96057H4.7588V4.59229H6.35903V5.32592H6.38143C6.70774 4.76801 7.31443 4.43479 7.9603 4.45875C9.64977 4.45875 9.96129 5.57004 9.96129 7.01578L9.96053 9.96075ZM2.87795 3.85848C2.34371 3.85859 1.91055 3.42554 1.91045 2.89131C1.91034 2.35705 2.34337 1.92388 2.87759 1.92377C3.41183 1.92367 3.84499 2.35671 3.84509 2.89095C3.84519 3.42521 3.41219 3.8584 2.87795 3.85848ZM3.71139 9.96077H2.04277V4.59229H3.71139V9.96077ZM10.7916 0.375774H1.20514C0.75208 0.370655 0.380535 0.733585 0.375 1.18666V10.8132C0.380353 11.2665 0.751846 11.6298 1.20514 11.6249H10.7916C11.2458 11.6306 11.6187 11.2674 11.625 10.8132V1.18599C11.6185 0.732 11.2455 0.369096 10.7916 0.375073V0.375774Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_38256_1310">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconSocialWhatsApp() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_38256_1312)">
        <path clipRule="evenodd" d="M10.2299 1.74389C9.10727 0.619898 7.61425 0.00065625 6.02355 0C2.74602 0 0.0784844 2.66735 0.0771953 5.94591C0.07675 6.99394 0.35057 8.01689 0.87093 8.91867L0.0273438 12L3.17959 11.1731C4.04812 11.6468 5.026 11.8965 6.0212 11.8969H6.02364C6.02383 11.8969 6.02348 11.8969 6.02366 11.8969C9.30086 11.8969 11.9686 9.22927 11.9699 5.95064C11.9706 4.36179 11.3526 2.86781 10.2299 1.74389Z" fill="currentColor" fillRule="evenodd" />
      </g>
      <defs>
        <clipPath id="clip0_38256_1312">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconSocialInstagram() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_38256_1314)">
        <path d="M5.99984 2.91916C4.29844 2.91916 2.91891 4.29895 2.91891 6.00032C2.91891 7.70205 4.29844 9.08125 5.99984 9.08125C7.70156 9.08125 9.08133 7.70205 9.08133 6.00032C9.08133 4.29895 7.70156 2.91916 5.99984 2.91916Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_38256_1314">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconSocialLinkedIn() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 6C12 8.99439 9.80295 11.4769 6.93502 11.9273V7.74568H8.32936L8.59467 6.0159H6.93502V4.89341C6.93502 4.42006 7.1669 3.95886 7.91024 3.95886H8.6648V2.48621C8.6648 2.48621 7.9799 2.36933 7.32515 2.36933C5.95839 2.36933 5.06498 3.19776 5.06498 4.69752V6.0159H3.54558V7.74568H5.06498V11.9273C2.19752 11.4764 0 8.99416 0 6C0 2.6863 2.6863 0 6 0C9.3137 0 12 2.6863 12 6Z" fill="currentColor" />
    </svg>
  );
}

const socialIcons = [IconSocialFacebook, IconSocialWhatsApp, IconSocialInstagram, IconSocialLinkedIn];

export function Footer() {
  const f = footerData;
  return (
    <section className="footer w-variant-d75bc9cd-3d1f-5fd1-c5da-f90d51813783">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-footer">
          <div className="content-footer">
            <div className="w-layout-grid footer-halves">
              <div className="footer-left">
                <div className="footer-top-tile">
                  <div className="label-small label-medium">{f.contact.label}</div>
                  <div className="footer-left-text">
                    <div style={{ whiteSpace: 'pre-line' }}>{f.contact.address}</div>
                    <div>
                      <span className="text-underline body-strong">{f.contact.phone.split('\n')[0]}</span>
                      <br />
                      {f.contact.phone.split('\n')[1]}
                    </div>
                    <div>
                      <a className="text-underline body-strong" href={`mailto:${f.contact.email}`}>
                        {f.contact.email}
                      </a>
                      <br />
                      {f.contact.emailNote}
                    </div>
                  </div>
                </div>
                <div className="footer-brand-wrap">
                  <a aria-current="page" className="brand-footer w-inline-block w--current" href={f.logo.href}>
                    <img alt={f.logo.alt} className="logo-footer" loading="lazy" src={f.logo.src} />
                  </a>
                  <div className="footer-legal-column">
                    {f.legalLinks.map((link, i) => (
                      <a key={i} className="footer-legal-link" href={link.href}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="footer-right">
                <div className="footer-columns">
                  <div className="footer-column">
                    <div className="label-small label-medium">{f.multilayout.label}</div>
                    <div className="footer-links-column">
                      {f.multilayout.links.map((link, i) => (
                        <a key={i} className={`footer-link ${link.current ? 'w--current' : ''}`} href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="footer-column no-borders">
                    <div className="label-small label-medium">{f.pages.label}</div>
                    <div className="footer-links-column">
                      {f.pages.links.map((link, i) => (
                        <a key={i} className="footer-link" href={link.href}>
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="footer-bottom-right">
                  <div className="footer-social-wrap">
                    {f.social.map((s, i) => {
                      const Icon = socialIcons[i];
                      return (
                        <a key={i} className="social-link w-inline-block" href={s.href} target="_blank" rel="noreferrer">
                          <div className="icon-social w-embed">
                            {Icon ? <Icon /> : null}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                  <div className="text-small body-subtle">{f.copyright}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
