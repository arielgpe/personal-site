import Strapi, { StrapiOptions } from 'strapi-sdk-js';


const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';
const STRAPI_URL = process.env.STRAPI_URL || '';

export const getStrapiClient = (options?: StrapiOptions) => {
  const strapi = new Strapi({url: STRAPI_URL ,...options});
  strapi.setToken(STRAPI_TOKEN);

  return strapi;
};
