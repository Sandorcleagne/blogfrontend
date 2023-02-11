export const removeHtmlTag = (htmlString) => {
  const regex = /(<([^>]+)>)/gi;
  const result = htmlString.replace(regex, "");
  return result;
};
