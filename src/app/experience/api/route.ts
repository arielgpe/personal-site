import experiences from '../../../data/experiences.json';

export const GET = async () => {
  return Response.json(experiences);
};
