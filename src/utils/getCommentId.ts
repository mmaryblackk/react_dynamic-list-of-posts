export const getCommentId = (): number => {
  return Date.now() % 100000;
};
