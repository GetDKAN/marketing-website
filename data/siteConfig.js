module.exports = {
  siteTitle: 'DKAN Open Data Platform',
  siteDescription:
    'DKAN is a community-driven, free and open source open data platform that gives organizations and individuals ultimate freedom to publish and consume structured information.',
  authorName: 'CivicAcations',
  twitterUsername: 'getdkan',
  authorAvatar: 'dkan-avatar-blue.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  We help agencies improve lives through modern software and thoughtful experiences.
  `,
  siteUrl: 'http://getkdkan.org/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/example', // Note: it must *not* have a trailing slash.
  siteCover: 'bg.png', // file in content/images
  googleAnalyticsId: 'UA-67868977-1',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/dkan-avatar-blue.png',
  postsPerPage: 6,
  disqusShortname: '',
  headerTitle: '',
  headerLinksIcon: 'dkan-white.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: 'https://medium.com/dkan-blog',
    },
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Community',
      url: '/community',
    },
    {
      label: 'Events',
      url: '/events',
    },
    {
      label: 'Resources',
      url: '/resources',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      links: [
        {
          label: 'Blog',
          url: 'https://medium.com/dkan-blog',
        },
        {
          label: 'Visit Demo',
          url: 'http://getdkan.com',
        },
        {
          label: 'Documentation',
          url: 'http://dkan.readthedocs.io/en/latest/',
        },
      ],
    },
    {
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/getdkan/dkan',
        },
        {
          label: 'Slack',
          url: 'https://dkan.slack.com/',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/getdkan',
        },
      ],
    },
  ],
}
