const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

export function SingleTestimonialHomeA() {
  const imageUrl = `${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2.webp`;
  const srcSet = `${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2-p-500.webp 500w, ${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2-p-800.webp 800w, ${CDN}/68f481ca3f65034b70a4ecd6_Testimonial%20Image%20Large-2.webp 1053w`;

  return (
    <section className="section home-a-single-testimonial-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="master-testimonial">
          <div className="testimonial-single-top-tile">
            <div className="label-master" data-wf-tag-variant="lift">
              <div className="label-small">Happy client&apos;s quote</div>
            </div>
            <h2 className="text-h3 no-margins">
              &quot;This template gave me the confidence of a tech bro, the clarity of a Buddhist monk, and the layout of someone who reads typography blogs for fun. I don&apos;t. But I look like I do.&quot;
            </h2>
          </div>
          <div className="testimonial-bottom-tile">
            <div className="image-wrap-testimonial">
              <img
                alt="Testimonial Image Large-2"
                className="image-cover"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                src={imageUrl}
                srcSet={srcSet}
              />
            </div>
            <div className="text-wrap-testimonial-author">
              <div className="text-small text-body-bold">Jessica Mercedes</div>
              <div className="text-small body-medium">Strategy Lead at Forerunner™</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
