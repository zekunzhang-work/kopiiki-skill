const BASE = 'https://the-nothing-template.webflow.io';

const features = [
  {
    title: 'Early-Stage Startups',
    body: "When you're moving fast but still figuring things out, this gives you just enough structure to look serious — without locking you into something that doesn't fit.",
    className: 'first',
  },
  {
    title: 'Service-Based Brands',
    body: 'You offer something valuable — coaching, consulting, creative work, even logistics. This template helps you explain what you do without shouting.',
    className: 'second',
  },
  {
    title: 'Local & Practical Businesses',
    body: "Shops, studios, clinics, or companies with real-world work. You don't need trends — you need something that looks clean, works fast, and holds up.",
    className: 'third',
  },
];

function IconStar() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 20 20" width="100%" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_38319_350)">
        <path d="M7.45809 18.0842C7.43203 18.2131 7.53178 18.3334 7.66477 18.3334H12.3378C12.4708 18.3334 12.5706 18.2131 12.5445 18.0842L11.5339 13.0855C11.494 12.8885 11.7316 12.7554 11.8822 12.8904L15.643 16.2635C15.7431 16.3534 15.9017 16.328 15.9682 16.2116L18.3073 12.1129C18.3722 11.9994 18.3167 11.8555 18.1918 11.8134L13.4002 10.1971C13.2099 10.133 13.2099 9.86697 13.4002 9.8028L18.1918 8.18663C18.3167 8.14452 18.3722 8.00068 18.3073 7.8871L15.9682 3.78843C15.9017 3.672 15.7431 3.64668 15.643 3.7365L11.8822 7.10948C11.7317 7.24451 11.4941 7.11141 11.5339 6.91437L12.5445 1.91585C12.5706 1.78694 12.4708 1.66669 12.3378 1.66669H7.66477C7.53178 1.66669 7.43203 1.78694 7.45809 1.91585L8.46868 6.91426C8.50852 7.11129 8.27092 7.24439 8.12037 7.10937L4.35964 3.7365C4.25949 3.64667 4.10088 3.672 4.03444 3.78842L1.69526 7.8871C1.63044 8.00068 1.68591 8.14452 1.81076 8.18663L6.6024 9.8028C6.79266 9.86697 6.79267 10.133 6.6024 10.1971L1.81076 11.8134C1.68591 11.8555 1.63044 11.9994 1.69526 12.1129L4.03443 16.2116C4.10088 16.328 4.25949 16.3534 4.35964 16.2635L8.12039 12.8905C8.27094 12.7555 8.50855 12.8886 8.46871 13.0857L7.45809 18.0842Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </g>
      <defs>
        <clipPath id="clip0_38319_350">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
}

function IconArrow() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function FeaturesHomeA() {
  return (
    <section className="section home-a-features-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-features-home-a">
          <h2 className="text-h1 no-margins heading-strong">Who this template works for</h2>
        </div>
        <div className="w-layout-grid features-thirds">
          {features.map((feat, i) => (
            <div key={i} className={`card-feature-home ${feat.className}`}>
              <div className="content-feature-card">
                <h3 className="text-h6 heading-strong no-margins">{feat.title}</h3>
                <div className="body-medium">{feat.body}</div>
              </div>
              <div className="overlay-feature-card" />
            </div>
          ))}
        </div>
        <div className="wrap-features-cta">
          <div className="cta-block">
            <div className="content-cta-block">
              <div className="icon-wrap-feature block-feature">
                <div className="icon-medium w-embed"><IconStar /></div>
              </div>
              <div className="text-wrap-cta-block">
                <div className="text-body-bold">Need a custom setup?</div>
                <div className="body-medium">We might say no. But nicely.</div>
              </div>
            </div>
            <a data-button="" className="cta-main w-inline-block" href={`${BASE}/contact/contact-a`}>
              <div className="button-text-mask">
                <div className="button-text">Contact us</div>
              </div>
              <div className="button-icon-wrap right">
                <div className="icon-button w-embed"><IconArrow /></div>
                <div className="icon-button w-embed"><IconArrow /></div>
              </div>
              <div data-button-bg="" className="button-bg" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
