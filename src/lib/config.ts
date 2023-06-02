export const siteMetadata = {
  title: 'Akash Rajpurohit',
  author: 'Akash Rajpurohit',
  headerTitle: 'Akash Rajpurohit',
  description: `Hi!, I'm Akash Rajpurohit, a self taught software developer based in India. I specialize in developing web applications and cross platform mobile applications using modern technologies.`,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://akashrajpurohit.com',
  siteRepo: 'https://github.com/AkashRajpurohit/akashrajpurohit.com',
  siteLogo: 'static/images/logo-v3.png',
  socialBanner: 'static/images/twitter-card-v3.png',
  image: '/static/images/avatar.png',
  image_small: '/static/images/avatar_small.jpg',
  image_large: '/static/images/avatar-v2.jpg',
  email: 'me@akashrajpurohit.com',
  github: 'https://github.com/AkashRajpurohit',
  twitter: 'https://twitter.com/AkashWhoCodes',
  linkedin: 'https://www.linkedin.com/in/AkashRajpurohit',
  instagram: 'https://www.instagram.com/akashwho.codes',
  youtube: 'https://www.youtube.com/TheITGuy',
  rss: '/rss.xml',
  resumeDownloadLink: '/static/pdfs/AkashRajpurohit_Resume.pdf',
  enableResumeDownload: false,
  locale: 'en-US',
  pages: {
    home: '/',
    blogs: '/blogs/',
    snippets: '/snippets/',
    about: '/about/',
    projects: '/projects/',
    uses: '/uses/',
    resume: '/resume/',
    newsletter: '/newsletter/',
    tweets: '/tweets/',
    tags: '/tag/',
    privacyPolicy: '/privacy-policy/',
  },
  ad: {
    carbonCode: 'CEAIC23N',
    carbonPlacement: 'akashrajpurohitcom',
  },
  analytics: {
    dev: {
      umamiWebsiteId: '3d716936-d4bb-49c6-b4bc-ecf147b09154',
      umamiHost: 'https://analytics.umami.is',
    },
    prod: {
      // TODO: swap these with correct ones once migrated
      umamiWebsiteId: '3d716936-d4bb-49c6-b4bc-ecf147b09154',
      umamiHost: 'https://analytics.umami.is',
      // Correct ones
      // umamiWebsiteId: 'c8b4d9e8-0135-4b58-bbac-cf0895d5a470',
      // umamiHost: 'https://tanjiro.akashrajpurohit.com',
    },
  },
};

export const headerNavLinks = [
  { href: siteMetadata.pages.about, title: 'About' },
  { href: siteMetadata.pages.projects, title: 'Projects' },
  { href: siteMetadata.pages.blogs, title: 'Blogs' },
  { href: siteMetadata.pages.snippets, title: 'Snippets' },
  { href: siteMetadata.pages.uses, title: 'Uses' },
];

export const pageWiseMeta = {
  home: {
    title: 'Home',
    description: siteMetadata.description,
  },
  about: {
    title: 'About',
    description: 'Details of my life and my journey as software engineer',
  },
  blogs: {
    title: 'Blogs',
    description: (totalPosts: number) =>
      `I have been writing since 2020, mostly around tech and my career. In total I have written ${totalPosts} posts. I hope you enjoy them.`,
  },
  projects: {
    title: 'Projects',
    description:
      'Things I build when I am learning something new or just for fun.',
  },
  snippets: {
    title: 'Snippets',
    description: 'Simple code snippets that I use in my projects.',
  },
  uses: {
    title: 'Uses',
    description: 'The products and types of equipment I use on daily basis.',
  },
  resume: {
    title: 'Resume',
    description: 'Check out how my journey have been like over the years',
  },
  newsletter: {
    title: 'Newsletter',
    description:
      'The place where you can subscribe to my newsletter to receive early updates.',
  },
  privacyPolicy: {
    title: 'Privacy Policy',
    description: 'Privacy policy of akashrajpurohit.com',
  },
  tag: {
    title: 'Tags',
    description: 'Filter blogs via specific tags',
  },
};
