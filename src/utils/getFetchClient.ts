
const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

export const getStrapiData = async ( query: any) => {
  const url = new URL(`${STRAPI_URL}/graphql`);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${STRAPI_TOKEN}`
    },
    body: JSON.stringify({query})
  });

  const data = await response.json() as any;
  return data.data;
}
