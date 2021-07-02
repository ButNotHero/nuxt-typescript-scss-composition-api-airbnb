export default {
  hello: 'Hello world',
  documentation: 'Documentation',
  pages: {
    error: {
      404: {
        title: '404',
        subtitle: 'Something went wrong, no such address exists.',
        actionText: 'Home page',
        meta: {
          description: 'Something went wrong, no such address exists. Page not found. 404.',
        },
      },
      default: {
        title: 'Error',
        subtitle: 'Something went wrong, but we`ll try to figure out what`s wrong.',
        actionText: 'Home page',
        meta: {
          description: 'Something went wrong, but we`ll try to figure out what`s wrong.',
        },
      },
    },
    home: {
      title: 'Home',
      meta: {
        description: 'Website about movies.',
      },
    },
    about: {
      title: 'About',
      meta: {
        description: 'About website.',
      },
    },
  },
  themes: {
    light: 'Light',
    dark: 'Dark',
  },
};
