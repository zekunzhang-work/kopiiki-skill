const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

export function Preloader() {
  return (
    <div
      className="preloader"
      style={{
        display: 'none',
        transform: 'translate3d(0px, 0px, 0px)',
        opacity: 0,
      }}
    >
      <div className="content-preloader">
        <img
          alt="LogoLight"
          className="logo-preloader"
          loading="lazy"
          src={`${CDN}/68f12eff386d94fdebbcd2eb_LogoLight.svg`}
        />
        <div className="text-h3" data-text-loader>
          100%
        </div>
      </div>
      <div className="line-preloader">
        <div
          className="line-fill-preloader"
          style={{
            width: '100%',
            transform: 'translate3d(0px, 0px, 0px)',
          }}
        />
      </div>
    </div>
  );
}
