import experiences from '../../../data/skills.json';

export const GET = async () => {
  return Response.json(experiences);
};
