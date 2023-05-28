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
  instagram: 'https://www.linkedin.com/akashwho.codes',
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
    umamiWebsiteId: 'c8b4d9e8-0135-4b58-bbac-cf0895d5a470',
  },
  comment: {
    // Select a provider and use the environment variables associated to it
    provider: 'giscus', // supported providers: giscus, utterances
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '1',
      // Comment box input position
      inputPosition: 'top', // top, bottom
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
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

export const db = {
  baseUrl: (import.meta.env.MONGO_API_BASE_URL || '') as string,
  apiKey: (import.meta.env.MONGO_API_KEY || '') as string,
  database: 'blog-db',
  dataSource: 'Cluster0',
  collections: {
    newsletter: 'newsletterSubscribers',
    likes: 'likes',
    views: 'views',
  },
};
