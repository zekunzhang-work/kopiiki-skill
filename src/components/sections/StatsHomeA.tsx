const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

const stats = [
  { value: '3k+', label: 'Templates sold' },
  { value: '8x faster', label: 'Build time compared to custom' },
  { value: '<2h', label: 'From checkout to live site' },
  { value: '98%', label: 'Customer satisfaction' },
];

export function StatsHomeA() {
  return (
    <section className="section stats-home-a-section">
      <div className="video-stats w-background-video w-background-video-atom">
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ backgroundImage: `url("${CDN}/68fe4f66788b64fc5b500f0b_New-poster-00001.jpg")` }}
        >
          <source src={`${CDN}/68fe4f66788b64fc5b500f0b_New-transcode.mp4`} />
          <source src={`${CDN}/68fe4f66788b64fc5b500f0b_New-transcode.webm`} />
        </video>
        <div className="w-layout-blockcontainer main-container w-container">
          <div className="master-stats">
            <div className="headline-stats-video">
              <h2 className="no-margins heading-strong text-h3">
                Let the visuals breathe, drop your proudest stat, or just remind them <span className="heading-medium">you&apos;re not another boring site.</span>
              </h2>
            </div>
            <div className="w-layout-grid home-a-stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="home-a-stat-item">
                  <h3 className="text-h2 heading-strong no-margins">{stat.value}</h3>
                  <div>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="overlay-stats-top" />
        <div className="overlay-stats-bottom" />
      </div>
    </section>
  );
}
