const baseConfig = require('geonetwork-ui/tailwind.base.config.js')

/** @type {import('tailwindcss').Config} */
export default {
  ...baseConfig,
  content: [
    "./node_modules/geonetwork-ui/**/*.mjs",
    "./src/**/*.{html,ts}",
  ],
}

