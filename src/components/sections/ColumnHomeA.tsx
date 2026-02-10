const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';
const BASE = 'https://the-nothing-template.webflow.io';

function IconStar() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 16 16" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.69824 5.26074C9.84349 5.5561 10.1255 5.76082 10.4512 5.80859L14.2598 6.36719L11.502 9.06348C11.2674 9.293 11.1606 9.62275 11.2158 9.94629L11.8652 13.752L8.46387 11.957C8.17179 11.8029 7.82233 11.8029 7.53027 11.957L4.12891 13.752L4.7793 9.94629C4.8345 9.62285 4.72764 9.29298 4.49316 9.06348L1.73535 6.36719L5.54395 5.80859C5.86948 5.76081 6.15062 5.55594 6.2959 5.26074L7.99707 1.80078L9.69824 5.26074Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface ColumnHomeAProps {
  variant?: 'a' | 'b'; // a = first (with circle bg), b = second (with column-case-bg)
}

export function ColumnHomeA({ variant = 'a' }: ColumnHomeAProps) {
  const testimonialImage = `${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2.webp`;
  const testimonialSrcSet = `${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2-p-500.webp 500w, ${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2-p-800.webp 800w, ${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2.webp 1053w`;
  const projectImage = `${CDN}/68f3789b27330a66b9d82856_Project%20Image-1.webp`;
  const projectSrcSet = `${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-500.webp 500w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-800.webp 800w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-1080.webp 1080w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1-p-1600.webp 1600w, ${CDN}/68f3789b27330a66b9d82856_Project%20Image-1.webp 1824w`;

  return (
    <section className="section home-a-column-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid column-halves centered">
          <div className="content-column">
            <div className="headline-column">
              <h2 className="text-h1 no-margins">Make them stop scrolling</h2>
              <div className="text-wrap-column-subtitle">
                <div>Use this section to highlight a single standout project. Pair it with a quote, a strong visual, and make it the centerpiece of your story.</div>
              </div>
            </div>
            <div className="contact-testimonial">
              <div className="testimonial-top-tile">
                <div className="testimonial-rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="icon-star w-embed"><IconStar /></div>
                  ))}
                </div>
                <div>&quot;It wasn&apos;t just a website. It became the way we talk about who we are.&quot;</div>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img
                    alt="Testimonial Image Large-2"
                    className="image-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                    src={testimonialImage}
                    srcSet={testimonialSrcSet}
                  />
                </div>
                <div className="text-body-bold">Amelia Rynne</div>
              </div>
            </div>
          </div>
          <div className="placeholder-column-case">
            <div className="project project-home-column w-dyn-list">
              <div className="project-list-b w-dyn-items" role="list">
                <div className="w-dyn-item" role="listitem">
                  <a className="link-project-b w-inline-block" href={`${BASE}/work/yoga-website`}>
                    <div className="image-wrap-project-b">
                      <img
                        alt=""
                        className="image-cover"
                        loading="lazy"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.4140625px, 939.9375px"
                        src={projectImage}
                        srcSet={projectSrcSet}
                      />
                    </div>
                    <div className="text-wrap-project-b">
                      <div className="text-h4 heading-strong">Hollow</div>
                      <div className="text-h4 heading-strong">Yoga Website</div>
                    </div>
                    <div className="overlay-project-b" />
                  </a>
                </div>
              </div>
            </div>
            {variant === 'b' && (
              <img alt="Card BG" className="column-case-bg" loading="lazy" src={`${CDN}/68f4be64ebdab11d2f32cfe7_Home%20B.svg`} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
