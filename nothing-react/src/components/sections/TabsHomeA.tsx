import { useState } from 'react';
const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';

const tabsData = [
  {
    id: 'tab1',
    title: 'Clean base',
    text: 'Built with Webflow Variables and a clean architecture that mirrors the logic of modern construction. Every component fits — so you can scale and customize without breaking the system.',
    image: `${CDN}/68f4a24bb11023b0e64db9d2_Tab%20Image.webp`,
    imageSet: `${CDN}/68f4a24bb11023b0e64db9d2_Tab%20Image-p-500.webp 500w, ${CDN}/68f4a24bb11023b0e64db9d2_Tab%20Image-p-800.webp 800w, ${CDN}/68f4a24bb11023b0e64db9d2_Tab%20Image-p-1080.webp 1080w, ${CDN}/68f4a24bb11023b0e64db9d2_Tab%20Image.webp 1194w`,
  },
  {
    id: 'tab2',
    title: 'Meta guidance',
    text: 'Each section gives you a hint, not a story. You write the plot. We hold the structure.',
    image: `${CDN}/68f4a24b9babee06ff1bfc60_Tab%20Image-1.webp`,
    imageSet: `${CDN}/68f4a24b9babee06ff1bfc60_Tab%20Image-1-p-500.webp 500w, ${CDN}/68f4a24b9babee06ff1bfc60_Tab%20Image-1-p-800.webp 800w, ${CDN}/68f4a24b9babee06ff1bfc60_Tab%20Image-1-p-1080.webp 1080w, ${CDN}/68f4a24b9babee06ff1bfc60_Tab%20Image-1.webp 1194w`,
  },
  {
    id: 'tab3',
    title: 'Silent branding',
    text: "We don't scream. We whisper. Fonts, colors, and layout that don't try too hard.",
    image: `${CDN}/68f4a24b60cf131f9d642ad7_Tab%20Image-2.webp`,
    imageSet: `${CDN}/68f4a24b60cf131f9d642ad7_Tab%20Image-2-p-500.webp 500w, ${CDN}/68f4a24b60cf131f9d642ad7_Tab%20Image-2-p-800.webp 800w, ${CDN}/68f4a24b60cf131f9d642ad7_Tab%20Image-2-p-1080.webp 1080w, ${CDN}/68f4a24b60cf131f9d642ad7_Tab%20Image-2.webp 1194w`,
  },
  {
    id: 'tab4',
    title: 'Smart CMS',
    text: "Pre-connected content types with filters, categories, and logic you don't have to build.",
    image: `${CDN}/68f4a24bdb43ee15854d89dc_Tab%20Image-3.webp`,
    imageSet: `${CDN}/68f4a24bdb43ee15854d89dc_Tab%20Image-3-p-500.webp 500w, ${CDN}/68f4a24bdb43ee15854d89dc_Tab%20Image-3-p-800.webp 800w, ${CDN}/68f4a24bdb43ee15854d89dc_Tab%20Image-3-p-1080.webp 1080w, ${CDN}/68f4a24bdb43ee15854d89dc_Tab%20Image-3.webp 1194w`,
  },
  {
    id: 'tab5',
    title: 'Built-in elegance',
    text: 'Everything is aligned, spaced, and typed like someone cared. Because we did.',
    image: `${CDN}/68f4a24becb1bbf09a3f9759_Tab%20Image-4.webp`,
    imageSet: `${CDN}/68f4a24becb1bbf09a3f9759_Tab%20Image-4-p-500.webp 500w, ${CDN}/68f4a24becb1bbf09a3f9759_Tab%20Image-4-p-800.webp 800w, ${CDN}/68f4a24becb1bbf09a3f9759_Tab%20Image-4-p-1080.webp 1080w, ${CDN}/68f4a24becb1bbf09a3f9759_Tab%20Image-4.webp 1194w`,
  },
];

const tabIcons = [
  () => <path d="M14 3.5C22.4 3.5 24.5 5.6 24.5 14C24.5 22.4 22.4 24.5 14 24.5C5.6 24.5 3.5 22.4 3.5 14C3.5 5.6 5.6 3.5 14 3.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  () => <path d="M19.8333 5.83333C19.8333 7.122 20.878 8.16667 22.1667 8.16667C23.4553 8.16667 24.5 7.122 24.5 5.83333C24.5 4.54467 23.4553 3.5 22.1667 3.5C20.878 3.5 19.8333 4.54467 19.8333 5.83333ZM19.8333 5.83333C16.1203 5.83333 12.5593 7.30833 9.93384 9.93384C7.30833 12.5593 5.83333 16.1203 5.83333 19.8333M5.83333 19.8333C4.54467 19.8333 3.5 20.878 3.5 22.1667C3.5 23.4553 4.54467 24.5 5.83333 24.5C7.122 24.5 8.16667 23.4553 8.16667 22.1667C8.16667 20.878 7.122 19.8333 5.83333 19.8333Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  () => <path d="M9.33203 16.3333C9.33203 16.3333 11.082 18.6666 13.9987 18.6666C16.9154 18.6666 18.6654 16.3333 18.6654 16.3333M10.4987 10.4999H10.5104M17.4987 10.4999H17.5104M25.6654 13.9999C25.6654 20.4432 20.442 25.6666 13.9987 25.6666C7.55538 25.6666 2.33203 20.4432 2.33203 13.9999C2.33203 7.5566 7.55538 2.33325 13.9987 2.33325C20.442 2.33325 25.6654 7.5566 25.6654 13.9999Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  () => <path d="M11.6654 25.6666V19.8333M16.332 22.1666V19.8333M16.332 2.33325V6.99992C16.332 7.61876 16.5779 8.21225 17.0154 8.64983C17.453 9.08742 18.0465 9.33325 18.6654 9.33325H23.332M20.9987 23.3333V19.8333M2.33203 15.1666H25.6654M23.332 15.1666V8.16659L17.4987 2.33325H6.9987C6.37986 2.33325 5.78637 2.57908 5.34878 3.01667C4.9112 3.45425 4.66536 4.04775 4.66536 4.66659V15.1666M6.9987 23.3333V19.8333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
  () => <path d="M13.9988 9.33321V18.6665M9.33212 13.9999H18.6655M3.14876 12.0165C2.88736 12.2776 2.68 12.5877 2.53852 12.929C2.39704 13.2703 2.32422 13.6361 2.32422 14.0056C2.32422 14.3751 2.39704 14.7409 2.53852 15.0823C2.68 15.4236 2.88736 15.7337 3.14876 15.9948L12.0038 24.8498C12.2649 25.1112 12.575 25.3185 12.9163 25.46C13.2576 25.6015 13.6234 25.6743 13.9929 25.6743C14.3624 25.6743 14.7283 25.6015 15.0696 25.46C15.4109 25.3185 15.721 25.1112 15.9821 24.8498L24.8371 15.9948C25.0985 15.7337 25.3058 15.4236 25.4473 15.0823C25.5888 14.7409 25.6616 14.3751 25.6616 14.0056C25.6616 13.6361 25.5888 13.2703 25.4473 12.929C25.3058 12.5877 25.0985 12.2776 24.8371 12.0165L15.9821 3.16145C15.721 2.90006 15.4109 2.69269 15.0696 2.55122C14.7283 2.40974 14.3624 2.33691 13.9929 2.33691C13.6234 2.33691 13.2576 2.40974 12.9163 2.55122C12.575 2.69269 12.2649 2.90006 12.0038 3.16145L3.14876 12.0165Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />,
];

function IconArrow() {
  return (
    <svg fill="none" height="100%" viewBox="0 0 12 12" width="100%" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function TabsHomeA() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="section home-a-tabs-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="headline-home-a-tabs">
          <div className="heading-tabs-home-a">
            <h2 className="no-margins heading-strong">What this template does (or could do)</h2>
          </div>
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
        </div>
        <div className="tabs-features w-tabs">
          <div className="tabs-menu-features w-tab-menu" role="tablist">
            {tabsData.map((tab, i) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === i}
                className={`tab-accordion w-inline-block w-tab-link ${activeTab === i ? 'w--current' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                <div className="wrap-tab-accordion">
                  <div className="icon-accordion w-embed">
                    <svg fill="none" height="100%" viewBox="0 0 28 28" width="100%" xmlns="http://www.w3.org/2000/svg">
                      {tabIcons[i]?.()}
                    </svg>
                  </div>
                  <div className="accordion-top-tile">
                    <div className="accordion-title">
                      <h3 className="text-large text-body-bold">{tab.title}</h3>
                    </div>
                    <div className="accordion-bottom-tile" style={{ height: activeTab === i ? 'auto' : 0 }}>
                      <div className="acordion-text">{tab.text}</div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="tabs-content-features w-tab-content">
            {tabsData.map((tab, i) => (
              <div
                key={tab.id}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                className={`tab-pane-features w-tab-pane ${activeTab === i ? 'w--tab-active' : ''}`}
                hidden={activeTab !== i}
              >
                <div className="features-image-wrap">
                  <img
                    alt={`Tab Image ${i + 1}`}
                    className="image-cover"
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px"
                    src={tab.image}
                    srcSet={tab.imageSet}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
