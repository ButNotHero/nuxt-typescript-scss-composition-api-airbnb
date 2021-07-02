export default (metaInfo: any): any => {
  const { title, desc } = metaInfo;

  return {
    title: `${title} - ButNotMovies`,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: `${desc}`,
      },
    ],
  };
};
