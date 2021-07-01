import { getMovieInfoByID, getNowPlayingByPage, getTrendingByPage } from '@/api/media';

describe('Получение полной информации о фильме по его ID', () => {
  it('успешное получение данных из API', async () => {
    const filmID = 508943;
    const expectedStatus = 200;
    const { status }: { status: number } = await getMovieInfoByID(filmID);
    expect(status).toBe(expectedStatus);
  });
});

describe('Получение данных о фильмах, которые сейчас идут в кинотеатрах', () => {
  it('успешное получение данных из API', async () => {
    const page = 1;
    const expectedStatus = 200;
    const { status }: { status: number } = await getNowPlayingByPage(page);
    expect(status).toBe(expectedStatus);
  });
});

describe('Получение данных об общих трендах за день', () => {
  it('успешное получение данных из API', async () => {
    const page = 1;
    const mediaType = 'all';
    const timeWindow = 'day';
    const expectedStatus = 200;
    const { status }: { status: number } = await getTrendingByPage(page, mediaType, timeWindow);
    expect(status).toBe(expectedStatus);
  });
});

describe('Получение данных об общих трендах за неделю', () => {
  it('успешное получение данных из API', async () => {
    const page = 1;
    const mediaType = 'all';
    const timeWindow = 'week';
    const expectedStatus = 200;
    const { status }: { status: number } = await getTrendingByPage(page, mediaType, timeWindow);
    expect(status).toBe(expectedStatus);
  });
});
