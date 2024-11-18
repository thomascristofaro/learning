// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Microsoft Learning',
    tagline: 'A comprehensive hub for educational resources, tutorials, and documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://thomascristofaro.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/learning/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'thomascristofaro', // Usually your GitHub org/user name.
    projectName: 'learning', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'it',
        locales: ['it'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus.png',
            docs: {
                sidebar: {
                    hideable: true,
                },
            },
            navbar: {
                title: 'Learning',
                logo: {
                    alt: 'Learning Logo',
                    src: 'img/avatar-sign.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'businessCentralSidebar',
                        position: 'left',
                        label: 'Business Central',
                    },
                    {
                        href: 'https://github.com/thomascristofaro/learning',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial Docusaurus',
                                to: '/docs/tutorial/intro',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'LinkedIn',
                                href: 'https://www.linkedin.com/in/thomascristofaro/',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/thomascristofaro/',
                            }
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Thomas Cristofaro',
                                href: 'https://cristofaro.dev/it/',
                            },
                            {
                                label: 'Microsoft Learn',
                                href: 'https://learn.microsoft.com/it-it/training/browse/',
                            }
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Thomas Cristofaro, Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
                additionalLanguages: ['al'],
            },
        }),
};

export default config;
