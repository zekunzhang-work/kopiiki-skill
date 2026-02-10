const CDN = 'https://cdn.prod.website-files.com/68efa27b498bb47f7156194a';
const BASE = 'https://the-nothing-template.webflow.io';

export const footerData = {
  contact: {
    label: 'Contact',
    address: 'Nothing™ HQ\n404 Template Avenue\nNowhere, Internet 00000',
    phone: '+00 123 456 789\n(Press 0 to talk to yourself.)',
    email: 'hello@nothingtemplate.io',
    emailNote: 'This inbox doesn\'t exist — but yours will.',
  },
  logo: {
    src: `${CDN}/68efea951d6e876a60811203_LogoDark.svg`,
    alt: 'LogoDark',
    href: `${BASE}/`,
  },
  legalLinks: [
    { label: 'Changelog', href: `${BASE}/template/changelog` },
    { label: 'Legal', href: `${BASE}/legal` },
    { label: '404', href: `${BASE}/404` },
    { label: 'Password', href: `${BASE}/401` },
  ],
  multilayout: {
    label: 'Multilayout',
    links: [
      { label: 'Home A', href: `${BASE}/`, current: true },
      { label: 'Home B', href: `${BASE}/homepage/home-b` },
      { label: 'Home C', href: `${BASE}/homepage/home-c` },
      { label: 'Contact A', href: `${BASE}/contact/contact-a` },
      { label: 'Contact B', href: `${BASE}/contact/contact-b` },
      { label: 'Contact C', href: `${BASE}/contact/contact-c` },
      { label: 'Projects A', href: `${BASE}/projects/project-a` },
      { label: 'Projects B', href: `${BASE}/projects/project-b` },
      { label: 'Projects C', href: `${BASE}/projects/project-c` },
    ],
  },
  pages: {
    label: 'Pages',
    links: [
      { label: 'About', href: `${BASE}/about` },
      { label: 'Blog', href: `${BASE}/blog` },
      { label: 'Blog Article', href: `${BASE}/blog/the-idea-behind-nothing-tm----and-how-it-changed-how-we-design` },
      { label: 'Case Study', href: `${BASE}/work/women-consulting` },
    ],
  },
  social: [
    { href: 'https://facebook.com', label: 'Facebook' },
    { href: 'https://facebook.com', label: 'WhatsApp' },
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
  ],
  copyright: '© BYQ Studio powered by Webflow',
};
