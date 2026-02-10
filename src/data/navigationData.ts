const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';
const BASE = 'https://the-nothing-template.webflow.io';

export const navigationData = {
  logo: {
    src: `${CDN}/68efea951d6e876a60811203_LogoDark.svg`,
    alt: 'LogoDark',
    href: `${BASE}/`,
  },
  links: [
    { label: 'Overview', href: `${BASE}/overview` },
    {
      label: 'Multi-Layout',
      dropdown: [
        {
          label: 'Homepage',
          items: [
            { title: 'Homepage A', subtitle: 'Soft storytelling that feels premium and intentional', href: `${BASE}/`, current: true },
            { title: 'Homepage B', subtitle: 'No noise. Just structure, value, and proof', href: `${BASE}/homepage/home-b` },
            { title: 'Homepage C', subtitle: 'Immersive visuals with a rhythm that pulls you in', href: `${BASE}/homepage/home-c` },
          ],
        },
        {
          label: 'Contact',
          items: [
            { title: 'Contact A', subtitle: 'Team-focused contact page with a calm flow', href: `${BASE}/contact/contact-a` },
            { title: 'Contact B', subtitle: 'Playful, friendly, and made to spark connection', href: `${BASE}/contact/contact-b` },
            { title: 'Contact C', subtitle: 'Minimal, direct, and designed for inquiries', href: `${BASE}/contact/contact-c` },
          ],
        },
        {
          label: 'Projects',
          items: [
            { title: 'Projects A', subtitle: 'An expressive showcase for visual impact', href: `${BASE}/projects/project-a` },
            { title: 'Projects B', subtitle: 'Casual and perfect for visuals', href: `${BASE}/projects/project-b` },
            { title: 'Projects C', subtitle: 'A modular portfolio grid with confidence', href: `${BASE}/projects/project-c` },
          ],
        },
      ],
      cta: { label: 'Visit BYQ.supply', href: 'https://byq.supply', target: '_blank' },
    },
    {
      label: 'Pages',
      dropdown: [
        {
          label: 'Pages',
          items: [
            { title: 'About', href: `${BASE}/about` },
            { title: 'Blog Article', href: `${BASE}/blog/the-idea-behind-nothing-tm----and-how-it-changed-how-we-design` },
            { title: 'Case Study', href: `${BASE}/work/women-consulting` },
          ],
        },
        {
          label: 'More',
          items: [
            { title: 'Legal', href: `${BASE}/legal` },
            { title: '404', href: `${BASE}/404` },
            { title: 'Password', href: `${BASE}/401` },
            { title: 'Style Guide', href: `${BASE}/template/style-guide` },
            { title: 'Licenses', href: `${BASE}/template/licenses` },
            { title: 'Changelong', href: `${BASE}/template/changelog` },
            { title: 'More Templates', href: 'https://www.byq.studio/' },
          ],
        },
      ],
      navCta: {
        text: 'A Webflow template for boutique consultancies, agencies & expert-led businesses.',
        buttonLabel: 'Get Template',
        href: 'https://www.byq.studio/template/nothing?utm_source=webflow&utm_medium=referral&utm_campaign=nothing',
        target: '_blank',
      },
    },
    { label: 'More Templates', href: 'https://www.byq.supply', target: '_blank' },
  ],
  rightButtons: [
    { label: 'Contact', href: `${BASE}/contact/contact-a`, variant: 'secondary' as const },
    { label: 'Get Template', href: 'https://www.byq.studio/template/nothing?utm_source=webflow&utm_medium=referral&utm_campaign=nothing', target: '_blank', variant: 'primary' as const },
  ],
};
