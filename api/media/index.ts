import request from '@/utils/request';
import { IMovieItemFullDetailsData, INowPlayingData, ITrendingData } from '@/types/media.d';
import { AxiosPromise } from 'axios';

/**
 * Получить информацию о фильме по его id
 * @param id Идентификатор фильма
 */
export const getMovieInfoByID = (id: number | string): AxiosPromise<IMovieItemFullDetailsData> =>
  request({
    url: `/movie/${id}?language=ru`,
    method: 'get',
  });

/**
 * Получение данных о фильмах, которые сейчас идут в кинотеатрах
 * @param page Целевая страница показа
 */
export const getNowPlayingByPage = (page: number | string = 1): AxiosPromise<INowPlayingData> =>
  request({
    url: `/movie/now_playing?page=${page}&language=ru&region=RU`,
    method: 'get',
  });

/**
 * Получение данных об общих трендах за определенный временной отрезок
 * @param page Целевая страница показа
 * @param mediaType all, movie, tv, person
 * @param timeWindow day, week
 */
export const getTrendingByPage = (
  page: number | string = 1,
  mediaType = 'all',
  timeWindow = 'day',
): AxiosPromise<ITrendingData> =>
  request({
    url: `/trending/${mediaType}/${timeWindow}?page=${page}&language=ru`,
    method: 'get',
  });
