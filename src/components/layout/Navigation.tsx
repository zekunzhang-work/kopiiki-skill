import { useState } from 'react';
import { navigationData } from '../../data/navigationData';

const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

function IconMenu() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 6L10 6M2 9H10M2 3L10 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 3L3 9M3 3L9 9" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
    </svg>
  );
}

export function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = navigationData;

  return (
    <div className="master-navigation">
      <div className="navbar w-nav" role="banner">
        <div className="nav-container">
          <div className="nav-left">
            <button
              type="button"
              aria-label="menu"
              className="menu-button w-nav-button"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <div className="menu-button-inner open">
                <div className="icon-menu w-embed">
                  <IconMenu />
                </div>
              </div>
              <div className="menu-button-inner close">
                <div className="icon-menu w-embed">
                  <IconClose />
                </div>
              </div>
            </button>
            <a aria-current="page" aria-label="home" className="brand-nav w-nav-brand w--current" href={nav.logo.href}>
              <img alt={nav.logo.alt} className="logo-nav" loading="lazy" src={nav.logo.src} />
            </a>
          </div>

          <nav className="nav-menu w-nav-menu" role="navigation">
            <div className="wrap-nav-links">
              {nav.links.map((item, idx) => {
                if ('href' in item) {
                  return (
                    <a key={idx} className="nav-link w-inline-block" href={item.href} target={item.target}>
                      <div>{item.label}</div>
                    </a>
                  );
                }
                const dropdown = item.dropdown;
                const isMultiLayout = dropdown && dropdown.length > 0 && 'items' in dropdown[0];
                const isOpen = openDropdown === idx;
                return (
                  <div
                    key={idx}
                    className="dropdown w-dropdown"
                    onMouseEnter={() => setOpenDropdown(idx)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="dropdown-toggle w-dropdown-toggle" role="button">
                      <div className="nav-link">
                        <div>{item.label}</div>
                      </div>
                    </div>
                    <nav
                      className={`dropdown-list w-dropdown-list ${isOpen ? 'w--open' : ''}`}
                      style={{ opacity: isOpen ? 1 : 0 }}
                    >
                      <div className="nav-dropdown-list">
                        <div className="content-dropdown">
                          {isMultiLayout ? (
                            <div className="multi-layout-grid">
                              <div className="w-layout-grid nav-thirds">
                                {(dropdown as { label: string; items: { title: string; subtitle: string; href: string; current?: boolean }[] }[]).map((col, i) => (
                                  <div key={i} className="nav-column">
                                    <div className="label-master w-variant-09897b12-6f62-59f4-5fb5-667bc9af208a">
                                      <div className="label-small">{col.label}</div>
                                    </div>
                                    <div className="nav-column-inner">
                                      {col.items.map((link, j) => (
                                        <a
                                          key={j}
                                          className={`nav-column-item w-inline-block ${link.current ? 'w--current' : ''}`}
                                          href={link.href}
                                        >
                                          <div className="text-body-bold">{link.title}</div>
                                          <div className="text-small body-subtle">{link.subtitle}</div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                                {item.cta && (
                                  <div className="byq-cta">
                                    <div className="button-wrap-nav">
                                      <a
                                        data-button=""
                                        className="cta-main w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block"
                                        href={item.cta.href}
                                        target={item.cta.target}
                                      >
                                        <div className="button-text-mask">
                                          <div className="button-text w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">
                                            {item.cta.label}
                                          </div>
                                        </div>
                                        <div data-button-bg="" className="button-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f" />
                                      </a>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            <div className="pages-content">
                              <div className="w-layout-grid nav-halves">
                                {(dropdown as { label: string; items: { title: string; href: string }[] }[]).map((col, i) => (
                                  <div key={i} className="nav-column">
                                    <div className="label-master w-variant-09897b12-6f62-59f4-5fb5-667bc9af208a">
                                      <div className="label-small">{col.label}</div>
                                    </div>
                                    <div className="nav-column-inner small-gap">
                                      {col.items.map((link, j) => (
                                        <a key={j} className="nav-column-item w-inline-block" href={link.href}>
                                          <div>{link.title}</div>
                                        </a>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {item.navCta && (
                                <div className="nav-cta w-background-video w-background-video-atom">
                                  <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                      backgroundImage: `url("${CDN}%2F68fe4f66788b64fc5b500f0b_New-poster-00001.jpg")`,
                                    }}
                                  >
                                    <source src={`${CDN}/68fe4f66788b64fc5b500f0b_New-transcode.mp4`} />
                                    <source src={`${CDN}/68fe4f66788b64fc5b500f0b_New-transcode.webm`} />
                                  </video>
                                  <div>{item.navCta.text}</div>
                                  <div className="overlay-nav-cta" />
                                  <div className="button-wrap-nav">
                                    <a data-button="" className="cta-small w-inline-block" href={item.navCta.href} target={item.navCta.target}>
                                      <div className="button-text-mask button-2">
                                        <div className="button-text">{item.navCta.buttonLabel}</div>
                                      </div>
                                      <div data-button-bg="" className="button-bg" />
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </nav>
                  </div>
                );
              })}
            </div>

            <div className="mobile-menu">
              <div className="wrap-mobile-menu">
                <div className="mobile-nav-top-tile">
                  <div className="divider-dark-16" />
                  <div className="nav-column-item-mobile">
                    <div className="mobile-links-wrap">
                      <a className="link-mobile-menu w--current" href="https://the-nothing-template.webflow.io/">Home A</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/homepage/home-b">Home B</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/homepage/home-c">Home C</a>
                    </div>
                    <div className="text-small body-subtle">Eliminate clutter and focus on impactful content.</div>
                  </div>
                  <div className="divider-dark-16" />
                  <div className="nav-column-item-mobile">
                    <div className="mobile-links-wrap">
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/projects/project-a">Projects A</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/projects/project-b">Projects B</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/projects/project-c">Projects C</a>
                    </div>
                    <div className="text-small body-subtle">Showcase your projects just the way you like.</div>
                  </div>
                  <div className="divider-dark-16" />
                  <a className="nav-column-item-mobile w-inline-block" href="https://the-nothing-template.webflow.io/about">
                    <div className="mobile-links-wrap">
                      <div className="link-mobile-menu">About</div>
                    </div>
                    <div className="text-small body-subtle">How we think, work, and approach design.</div>
                  </a>
                  <div className="divider-dark-16" />
                  <a className="nav-column-item-mobile w-inline-block" href="https://the-nothing-template.webflow.io/work/women-consulting">
                    <div className="mobile-links-wrap">
                      <div className="link-mobile-menu">Project Single</div>
                    </div>
                    <div className="text-small body-subtle">A personalized display of your project.</div>
                  </a>
                  <div className="divider-dark-16" />
                  <a className="nav-column-item-mobile w-inline-block" href="https://the-nothing-template.webflow.io/blog">
                    <div className="mobile-links-wrap">
                      <div className="link-mobile-menu">Blog</div>
                    </div>
                    <div className="text-small body-subtle">Position yourself as a thought leader and boost SEO.</div>
                  </a>
                  <div className="divider-dark-16" />
                  <div className="nav-column-item-mobile">
                    <div className="mobile-links-wrap">
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/contact/contact-a">Contact A</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/contact/contact-b">Contact B</a>
                      <div className="text-large">·</div>
                      <a className="link-mobile-menu" href="https://the-nothing-template.webflow.io/contact/contact-c">Contact C</a>
                    </div>
                    <div className="text-small body-subtle">Just say hi. We're always curious to hear what you're building.</div>
                  </div>
                </div>
                <div className="mobile-nav-bottom-tile">
                  <div className="byq-cta">
                    <div className="button-wrap-nav">
                      <a data-button="" className="cta-main w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" href="https://byq.supply" target="_blank">
                        <div className="button-text-mask">
                          <div className="button-text w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">Visit BYQ.supply</div>
                        </div>
                        <div data-button-bg="" className="button-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-right">
            <div className="nav-left-button">
              <a
                data-button=""
                className="cta-small w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc w-inline-block"
                href={nav.rightButtons[0].href}
              >
                <div className="button-text-mask button-2">
                  <div className="button-text w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc">{nav.rightButtons[0].label}</div>
                </div>
                <div data-button-bg="" className="button-bg w-variant-34d8d794-2d3b-997e-fe81-9b40d68e85cc" />
              </a>
              <a
                data-button=""
                className="cta-small w-inline-block"
                href={nav.rightButtons[1].href}
                target={nav.rightButtons[1].target}
              >
                <div className="button-text-mask button-2">
                  <div className="button-text">{nav.rightButtons[1].label}</div>
                </div>
                <div data-button-bg="" className="button-bg" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-nav-overlay" />
      </div>
      <div className="wrap-mobile-bg">
        <div className="nav-mobile-bg" />
      </div>
      <div className="nav-bg" style={{ opacity: 0, display: 'none' }} />
      <div className="wrap-progressive-blur">
        <div className="progressive-blur" style={{ ['--blur' as string]: '3rem', ['--ratio' as string]: '1.9' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div key={i} className={`progressive-blur-panel is-${i}`} style={{ ['--i' as string]: i <= 6 ? 7 - i : 1 }} />
          ))}
        </div>
      </div>
    </div>
  );
}
