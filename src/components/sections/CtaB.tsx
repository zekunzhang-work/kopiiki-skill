const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

export function CtaB() {
  return (
    <section className="section cta-b-section">
      <div className="video-cta w-background-video w-background-video-atom">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ backgroundImage: `url("${CDN}/68f48664df65e4092af3fe2c_CTA%20Video-poster-00001.jpg")` }}
        >
          <source src={`${CDN}/68f48664df65e4092af3fe2c_CTA%20Video-transcode.mp4`} />
          <source src={`${CDN}/68f48664df65e4092af3fe2c_CTA%20Video-transcode.webm`} />
        </video>
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="master-cta-b">
            <div className="headline-cta-b">
              <h2 className="no-margins heading-strong">Use this section to make your pitch. Keep it short, sweet, and slightly persuasive.</h2>
              <div>Or don&apos;t. We&apos;re just the template.</div>
            </div>
            <div className="button-wrap-centered">
              <a
                data-button=""
                className="cta-main w-inline-block"
                href="https://www.byq.studio/template/nothing?utm_source=webflow&utm_medium=referral&utm_campaign=nothing"
                target="_blank"
                rel="noreferrer"
              >
                <div className="button-text-mask">
                  <div className="button-text">Get template</div>
                </div>
                <div data-button-bg="" className="button-bg" />
              </a>
              <a data-button="" className="cta-main w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f w-inline-block" href="#">
                <div className="button-text-mask">
                  <div className="button-text w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f">Explore Byq.supply</div>
                </div>
                <div data-button-bg="" className="button-bg w-variant-1ff8d96e-78cc-eac8-de90-206ecdaded5f" />
              </a>
            </div>
          </div>
        </div>
        <div className="overlay-gradient-100" />
        <div className="overlay-lift-opacity" />
      </div>
    </section>
  );
}
