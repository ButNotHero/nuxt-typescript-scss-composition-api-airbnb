export default {
  hello: 'Привет мир',
  documentation: 'Документация',
  pages: {
    error: {
      404: {
        title: '404',
        subtitle: 'Что-то пошло не так, такого адреса не существует.',
        actionText: 'Главная',
        meta: {
          description:
            'Что-то пошло не так, такого адреса не существует. Страница не найдена. 404.',
        },
      },
      default: {
        title: 'Ошибка',
        subtitle: 'Что-то пошло не так, но мы попытаемся выяснить, в чем дело.',
        actionText: 'Главная',
        meta: {
          description: 'Что-то пошло не так, но мы попытаемся выяснить, в чем дело.',
        },
      },
    },
    home: {
      title: 'Главная',
      meta: {
        description: 'Сайт о фильмах.',
      },
    },
    about: {
      title: 'О сайте',
      meta: {
        description: 'О сайте.',
      },
    },
  },
  themes: {
    light: 'Светлая',
    dark: 'Темная',
  },
};
