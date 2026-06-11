import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "OAS Telemetry",
  tagline:
    "Express middleware for collecting telemetry in OpenAPI-based applications",
  favicon: "favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://oas-telemetry.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docusaurus/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oas-telemetry", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api",
        path: "api",
        routeBasePath: "api",
        sidebarPath: "./sidebarsApi.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "dashboard",
        path: "dashboard",
        routeBasePath: "dashboard",
        sidebarPath: "./sidebarsDashboard.ts",
      },
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "OAS Telemetry",
      logo: {
        alt: "OAS Telemetry Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "docSidebar",
          docsPluginId: "dashboard",
          sidebarId: "dashboardSidebar",
          position: "left",
          label: "Dashboard",
        },
        {
          type: "docSidebar",
          docsPluginId: "api",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API Reference",
        },
        {
          href: "https://github.com/oas-telemetry",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "The Basics",
          items: [
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
            {
              label: "Configuration",
              to: "/docs/configuration",
            },
            {
              label: "Authentication",
              to: "/docs/authentication",
            },
            {
              label: "GitHub Organization",
              href: "https://github.com/oas-telemetry",
            },
          ],
        },
        {
          title: "API Reference",
          items: [
            {
              label: "Authentication",
              to: "/api/auth",
            },
            {
              label: "Traces",
              to: "/api/traces",
            },
            {
              label: "Metrics",
              to: "/api/metrics",
            },
            {
              label: "Logs",
              to: "/api/logs",
            },
          ],
        },
        {
          title: "Dashboard",
          items: [
            {
              label: "Home",
              to: "/dashboard/home",
            },
            {
              label: "Traces",
              to: "/dashboard/traces",
            },
            {
              label: "Metrics",
              to: "/dashboard/metrics",
            },
            {
              label: "Logs",
              to: "/dashboard/logs",
            },
          ],
        },
        {
          title: "Plugins",
          items: [
            {
              label: "Getting Started",
              to: "/docs/plugins/getting-started",
            },
            {
              label: "The Plugin Object",
              to: "/docs/plugins/plugin-object",
            },
            {
              label: "Configuration",
              to: "/docs/plugins/plugin-configuration",
            },
            {
              label: "Dependencies",
              to: "/docs/plugins/external-dependencies",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} OAS Telemetry. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
