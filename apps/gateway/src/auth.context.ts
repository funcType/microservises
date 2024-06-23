export const authContext = ({ req }) => {
  console.log('Authorization Header:', req.headers?.authorization);

  // Bypass authorization for development purposes
  return { user: { id: '123' } };
};
