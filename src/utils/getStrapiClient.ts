import Strapi, { StrapiOptions } from 'strapi-sdk-js';


const STRAPI_TOKEN = process.env.STRAPI_TOKEN || '';

export const getStrapiClient = (options?: StrapiOptions) => {
  const strapi = new Strapi(options);
  strapi.setToken(STRAPI_TOKEN);

  return strapi;
};
