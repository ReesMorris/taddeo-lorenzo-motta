const getImagePath = (extension: string) => {
  const path =
    extension[0] === '/' ? extension.substring(1, extension.length) : extension;
  return `/images/${path}`;
};

export default getImagePath;
