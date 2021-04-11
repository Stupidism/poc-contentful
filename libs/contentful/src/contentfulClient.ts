import { ContentfulClient } from 'react-contentful';

export const contentfulClient = ContentfulClient({
  space: process.env.NX_CONTENTFUL_PROD_SPACE_ID || '7n7vfqlomamo',
  accessToken: 'xq0a55Hkr0sROQXnRB3mvBUf3WF4WUHTGyPnn_rZIjM',
});

export const previewContentfulClient = ContentfulClient({
  space: process.env.NX_CONTENTFUL_PROD_SPACE_ID || '7n7vfqlomamo',
  accessToken: 'gkSqsmz9QB53o7YyImtBZaUtgYpka3teKhnK36OK0nI',
  host: 'preview.contentful.com',
});
