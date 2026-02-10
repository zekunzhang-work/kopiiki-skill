const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

function IconFeatured1() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 44 44" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.66797 10.9998C4.76797 11.9165 5.86797 12.8332 8.2513 12.8332C12.8346 12.8332 12.8346 9.1665 17.418 9.1665C22.1846 9.1665 21.818 12.8332 26.5846 12.8332C31.168 12.8332 31.168 9.1665 35.7513 9.1665C38.1346 9.1665 39.2346 10.0832 40.3346 10.9998M3.66797 21.9998C4.76797 22.9165 5.86797 23.8332 8.2513 23.8332C12.8346 23.8332 12.8346 20.1665 17.418 20.1665C22.1846 20.1665 21.818 23.8332 26.5846 23.8332C31.168 23.8332 31.168 20.1665 35.7513 20.1665C38.1346 20.1665 39.2346 21.0832 40.3346 21.9998M3.66797 32.9998C4.76797 33.9165 5.86797 34.8332 8.2513 34.8332C12.8346 34.8332 12.8346 31.1665 17.418 31.1665C22.1846 31.1665 21.818 34.8332 26.5846 34.8332C31.168 34.8332 31.168 31.1665 35.7513 31.1665C38.1346 31.1665 39.2346 32.0832 40.3346 32.9998" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function IconFeatured2() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 44 44" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5 7.33317V3.6665M27.5 29.3332V25.6665M14.6667 16.4998H18.3333M36.6667 16.4998H40.3333M32.6334 21.6328L34.8334 23.8328M27.5 16.4998H27.5183M32.6334 11.3665L34.8334 9.1665M5.5 38.4998L22 21.9998M22.3667 11.3665L20.1667 9.1665" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function HalvesHomeA() {
  return (
    <section className="section home-a-halves-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="images-halves">
          <div className="image-wrap-halves w-background-video w-background-video-atom">
            <video autoPlay loop muted playsInline style={{ backgroundImage: `url("${CDN}/68f4c0a28464f4b683ffaa19_Home%20A%20Halves-poster-00001.jpg")` }}>
              <source src={`${CDN}/68f4c0a28464f4b683ffaa19_Home%20A%20Halves-transcode.mp4`} />
              <source src={`${CDN}/68f4c0a28464f4b683ffaa19_Home%20A%20Halves-transcode.webm`} />
            </video>
            <div className="overlay-feature-image" />
            <div className="content-feature-image">
              <div className="icon-featured-image w-embed"><IconFeatured1 /></div>
              <h3 className="text-large text-body-bold">Calm, neutral, modular.</h3>
            </div>
          </div>
          <div className="image-wrap-halves second">
            <div className="overlay-feature-image" />
            <div className="content-feature-image">
              <div className="icon-featured-image w-embed"><IconFeatured2 /></div>
              <h3 className="text-large text-body-bold">Bold, styled, story-ready.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
