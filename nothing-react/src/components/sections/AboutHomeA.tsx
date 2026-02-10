const BASE = 'https://the-nothing-template.webflow.io';

function IconArrow() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function AboutHomeA() {
  return (
    <section className="section home-a-about-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="wrap-about-home-a">
          <h2 className="text-h4 no-margins">
            Nothing™ isn't here to tell your story. It's here to give you the space, structure, and silence to tell it your way. Whether you're building something new or cleaning up a mess — this template gives you a solid base and a flexible grid to build on.
          </h2>
          <a data-button="" className="cta-main w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" href={`${BASE}/about`}>
            <div className="button-text-mask">
              <div className="button-text w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">About us</div>
            </div>
            <div className="button-icon-wrap right">
              <div className="icon-button w-embed"><IconArrow /></div>
              <div className="icon-button w-embed"><IconArrow /></div>
            </div>
            <div data-button-bg="" className="button-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f" />
          </a>
        </div>
      </div>
    </section>
  );
}
