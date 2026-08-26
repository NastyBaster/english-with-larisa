import astro from 'prettier-plugin-astro';

export default {
  plugins: [astro],
  singleQuote: true,
  trailingComma: 'all',
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
