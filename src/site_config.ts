// This file contains the site configuration for the theme.

// Metadata, SEO, and Social
export const SITE_TITLE = "Manual Theme"
export const SITE_DESCRIPTION = "Oleh Shynkarenko Contract Technical Writer"
export const SITE_URL = "https://manual.otterlord.dev"
export const SITE_DEFAULT_OG_IMAGE = "/assets/og-image.png"

// Docs Sidebar
// Define the left sidebar items here.
// The path should match the folder name in src/content/docs/
export const SIDEBAR_ITEMS = {
  "Get Started": [
    "/docs/get-started/introduction",
    "/docs/get-started/installation",
  ],
  "Tutorials": [
    "/docs/tutorials/build-x",
  ],
  "Guides": [
    "/docs/guides/migrate-from-z",
    "/docs/guides/ai-animation",
    "/docs/guides/rest_and_spread",
    "/docs/guides/destructuring",
    "/docs/guides/directory-indicator",
    "/docs/guides/props",
    "/docs/guides/terraform",
    "/docs/guides/umlclassdiagram"
  ],
  "Code Documentation": [
    "/docs/guides/code-doc-tail",
    "/docs/guides/index-ex",
    "/docs/guides/compile"
  ]
}
