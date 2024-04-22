function mapArticles(data) {
  const details = data.map((item) => {
    const {
      id,
      section,
      source,
      title,
      abstract,
      byline,
    } = item;

    return {
      id,
      title,
      section,
      source,
      abstract,
      byline,
    };
  });

  return details;
}

/* eslint-disable import/prefer-default-export */
export {
  mapArticles,
};
