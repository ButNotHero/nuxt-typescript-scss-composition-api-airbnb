export interface IMovieItemData {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
}

export interface ITVItemData {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_count: number;
  vote_average: number;
}

export interface IPersonItemData {
  adult: false;
  gender: number;
  id: number;
  known_for: (IMovieItemData & ITVItemData)[];
  known_for_department: string;
  media_type: string;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IBelongsToCollectionData {
  backdrop_path: string | null;
  id: number;
  name: string;
  poster_path: string | null;
}

export interface IMediaItemGenresData {
  id: number;
  name: string;
}

export interface IProductionCompanyData {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface IProductionCountriesData {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguageData {
  iso_639_1: string;
  name: string;
}

export interface IMovieItemFullDetailsData extends IMovieItemData {
  belongs_to_collection: IBelongsToCollectionData | null;
  budget: number;
  genres: IMediaItemGenresData[];
  homepage: string | null;
  imdb_id: string | null;
  production_companies: IProductionCompanyData[];
  production_countries: IProductionCountriesData[];
  revenue: number;
  runtime: number | null;
  spoken_languages: ISpokenLanguageData[];
  status: string;
  tagline: string | null;
}

export interface ICreatedByData {
  id: number;
  credit_id: string;
  name: string;
  gender: number;
  profile_path: string | null;
}

export interface ILastEpisodeToAirData {
  air_date: string;
  episode_number: number;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}

export interface INetworksTVItemData {
  name: string;
  id: number;
  logo_path: string | null;
  origin_counrty: string;
}

export interface ISeasonsTVItemData {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface ITVItemFullDetailsData extends ITVItemData {
  created_by: ICreatedByData[];
  episode_run_time: number[];
  genres: IMediaItemGenresData[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: ILastEpisodeToAirData;
  next_episode_to_air: null;
  networks: INetworksTVItemData[];
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: IProductionCompanyData[];
  production_countries: IProductionCountriesData[];
  seasons: ISeasonsTVItemData[];
  spoken_languages: ISpokenLanguageData[];
  status: string;
  tagline: string;
  type: string;
}

export interface INowPlayingItemData {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface INowPlayingDatesData {
  maximum: string;
  minimum: string;
}

export interface INowPlayingData {
  page: number;
  results: INowPlayingItemData[];
  dates: INowPlayingDatesData;
  total_pages: number;
  total_results: number;
}

export interface ITrendingData {
  page: number;
  results: (IMovieItemData & ITVItemData & IPersonItemData)[];
  total_pages: number;
  total_results: number;
}
