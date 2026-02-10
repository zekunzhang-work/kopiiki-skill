import { useState } from 'react';
const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

const layoutTabs = [
  { id: 'l1', title: "Structure you don't fight", image: `${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1.webp`, imageSet: `${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1-p-500.webp 500w, ${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1-p-800.webp 800w, ${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1-p-1080.webp 1080w, ${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1-p-1600.webp 1600w, ${CDN}/68f4a8cbb29d49b335efdbe4_Blog%20Thumbnail-1.webp 2000w` },
  { id: 'l2', title: 'Design that steps aside', image: `${CDN}/68f52a70b135e74be75e6936_Image%20Scroll2.webp`, imageSet: `${CDN}/68f52a70b135e74be75e6936_Image%20Scroll2-p-500.webp 500w, ${CDN}/68f52a70b135e74be75e6936_Image%20Scroll2.webp 672w` },
  { id: 'l3', title: "CMS that's actually usable", image: `${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3.webp`, imageSet: `${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3-p-500.webp 500w, ${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3-p-800.webp 800w, ${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3-p-1080.webp 1080w, ${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3-p-1600.webp 1600w, ${CDN}/68f4a9b9b2585150b8091a96_Blog%20Thumbnail-3.webp 2000w` },
  { id: 'l4', title: "Figma that isn't a mess", image: `${CDN}/68f52a704dc1d7620c18cbad_Image%20Scroll.webp`, imageSet: `${CDN}/68f52a704dc1d7620c18cbad_Image%20Scroll-p-500.webp 500w, ${CDN}/68f52a704dc1d7620c18cbad_Image%20Scroll.webp 672w` },
];

const paneContent = {
  title: 'Layouts built with logic',
  body: "Good templates don't just look nice — they feel natural when you use them. Sections stack the way real content wants to live. Spacing feels right without fixing. You're not pushing against the system. You're flowing with it.",
};

export function LayoutsHomeA() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section home-a-layouts-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="left-tabs">
          <div className="headline-home-tabs">
            <h2 className="text-h3 heading-strong no-margins">Four things that define good template</h2>
          </div>
        </div>
        <div className="tabs-scroll w-tabs" id="FeaturesTabs">
          <div className="tabs-menu-scroll w-tab-menu" role="tablist">
            {layoutTabs.map((t, i) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                className={`tab-item w-inline-block w-tab-link ${activeTab === i ? 'w--current' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <div className="text-body-bold">{t.title}</div>
              </button>
            ))}
          </div>
          <div className="tabs-content-scroll w-tab-content">
            {layoutTabs.map((t, i) => (
              <div
                key={t.id}
                role="tabpanel"
                className={`tab-pane-scroll w-tab-pane ${activeTab === i ? 'w--tab-active' : ''}`}
                hidden={activeTab !== i}
              >
                <div className="tab-content-item">
                  <div className="image-wrap-tab">
                    <div className="image-tab-scroll">
                      <img
                        alt={i === 0 ? 'Blog Thumbnail-1' : 'Project Image'}
                        className="image-cover fixed"
                        loading="lazy"
                        sizes={i === 0 ? '(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px' : '100vw'}
                        src={t.image}
                        srcSet={t.imageSet}
                      />
                    </div>
                  </div>
                  <div className="text-wrap-tab">
                    <div className="text-wrap-home-tab">
                      <div className="text-h6 heading-strong">{paneContent.title}</div>
                      <div className="body-medium">{paneContent.body}</div>
                    </div>
                    <a data-button="" className="cta-main w-inline-block" href={i === 0 ? 'https://www.byq.studio/template/nothing?utm_source=webflow&utm_medium=referral&utm_campaign=nothing' : '#'} target={i === 0 ? '_blank' : undefined} rel={i === 0 ? 'noreferrer' : undefined}>
                      <div className="button-text-mask">
                        <div className="button-text">Get template</div>
                      </div>
                      <div data-button-bg="" className="button-bg" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
