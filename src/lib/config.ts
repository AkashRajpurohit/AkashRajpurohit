export const siteMetadata = {
  title: 'Akash Rajpurohit',
  author: 'Akash Rajpurohit',
  headerTitle: 'Akash Rajpurohit',
  description: `Hi!, I'm Akash Rajpurohit, a self taught software developer based in India. I specialize in developing web applications and cross platform mobile applications using modern technologies.`,
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://akashrajpurohit.com',
  siteRepo: 'https://github.com/AkashRajpurohit/akashrajpurohit.com',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  image_large: '/static/images/avatar-v2.jpg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@akashrajpurohit.com',
  github: 'https://github.com/AkashRajpurohit',
  twitter: 'https://twitter.com/AkashWhoCodes',
  linkedin: 'https://www.linkedin.com/in/AkashRajpurohit',
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
