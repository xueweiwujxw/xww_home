module.exports = {
  title: 'aduiduidui',
  tagline: 'Kaibai Run',
  url: 'https://wlanxww.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favipng.png',
  organizationName: 'xueweiwujxw',
  projectName: 'xww-home',
  themeConfig: {
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Home Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://gitee.com/wlanxww',
          label: 'Gitee',
          position: 'right',
        },
        {
          href: 'https://github.com/xueweiwujxw',
          label: 'Github',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '硬件入门',
              to: 'docs/',
            },
            {
              label: '深度学习',
              to: 'docs/7-Run/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/xueweiwujxw',
            },
            {
              label: 'Gitee',
              href: 'https://gitee.com/wlanxww',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Xww Site. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: undefined
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: undefined
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
