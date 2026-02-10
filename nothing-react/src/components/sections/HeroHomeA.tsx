const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';
const BASE = 'https://the-nothing-template.webflow.io';

function IconArrow() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function IconCaseSmall() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6H9M6 2.5L9.5 6L6 9.5" stroke="currentColor" strokeLinecap="square" strokeWidth="1.5" />
    </svg>
  );
}

export function HeroHomeA() {
  return (
    <section className="section hero-home-a-section">
      <div className="w-layout-blockcontainer main-container static w-container">
        <div className="w-layout-grid home-a-hero-halves">
          <div className="content-home-a">
            <div className="headline-home-a">
              <div className="heading-home-a">
                <h1 className="heading-strong">A design system disguised as a Webflow template</h1>
                <div className="text-wrap-subtitle-home-a">
                  <div>No junk pages. Just well-composed layout patterns ready to become whatever you need them to be.</div>
                </div>
              </div>
              <div className="bottom-wrap-left-aligned">
                <a data-button="" className="cta-main w-inline-block" href="https://www.byq.studio/template/nothing?utm_source=webflow&utm_medium=referral&utm_campaign=nothing" target="_blank" rel="noreferrer">
                  <div className="button-text-mask">
                    <div className="button-text">Get template</div>
                  </div>
                  <div className="button-icon-wrap right">
                    <div className="icon-button w-embed"><IconArrow /></div>
                    <div className="icon-button w-embed"><IconArrow /></div>
                  </div>
                  <div data-button-bg="" className="button-bg" />
                </a>
                <a data-button="" className="cta-main w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" href={`${BASE}/overview`}>
                  <div className="button-text-mask">
                    <div className="button-text w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">Explore pages</div>
                  </div>
                  <div data-button-bg="" className="button-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f" />
                </a>
              </div>
            </div>
            <div className="case-small w-dyn-list">
              <div className="w-dyn-items" role="list">
                <div className="w-dyn-item" role="listitem">
                  <a className="card-case-small w-inline-block" href={`${BASE}/work/yoga-website`}>
                    <div className="image-wrap-case-small">
                      <img
                        alt=""
                        className="image-cover"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.4140625px, 939.9375px"
                        src={`${CDN}/68f3789b27330a66b9d82856_Project%20Image-1.webp`}
                        srcSet={`${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-500.webp 500w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-800.webp 800w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-1080.webp 1080w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-1600.webp 1600w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1.webp 1824w`}
                      />
                    </div>
                    <div className="content-case-small">
                      <div className="name-wrap-case-small">
                        <div className="text-body-bold">Hollow</div>
                        <div className="text-body-bold">Yoga Website</div>
                      </div>
                      <div className="case-small-bottom-tile">
                        <div className="label-master w-variant-09897b12-6f62-59f4-5fb5-667bc9af208a">
                          <div className="label-small">Project</div>
                        </div>
                        <div className="icon-case-small w-embed"><IconCaseSmall /></div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrap-home-a w-background-video w-background-video-atom">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{ backgroundImage: `url("${CDN}/68f4b30186b1e2a4d05d848c_Home%20A-poster-00001.jpg")` }}
            >
              <source src={`${CDN}/68f4b30186b1e2a4d05d848c_Home%20A-transcode.mp4`} />
              <source src={`${CDN}/68f4b30186b1e2a4d05d848c_Home%20A-transcode.webm`} />
            </video>
          </div>
        </div>
      </div>
      <img alt="Card BG" className="home-a-hero-circle" loading="lazy" src={`${CDN}/68f4be643f65034b70aa5c26_Home%20A.svg`} />
    </section>
  );
}
