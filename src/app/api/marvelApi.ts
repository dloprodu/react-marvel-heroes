/* eslint-disable no-underscore-dangle */
import axios, { Axios } from 'axios';

import Comic from './models/comic';
import Character from './models/character';

const PUBLIC_API_KEY = process.env.REACT_APP_MARVEL_API_KEY;
const ORIGIN = 'developer.marvel.com';

export default class MarvelApi {

  private static instance: MarvelApi;

  private readonly _axios: Axios;

  private constructor() {
    this._axios = axios.create({
      baseURL: process.env.REACT_APP_MARVEL_BASE_URL,
    });

    this._axios.defaults.headers.post['Content-Type'] = 'application/json';
    this._axios.defaults.headers.common.Referer = ORIGIN;
  }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): MarvelApi {
    if (!MarvelApi.instance) {
      MarvelApi.instance = new MarvelApi();
    }

    return MarvelApi.instance;
  }
  
  /**
   * Fetches individual print and digital comic issues, collections and graphic novels. For example: Amazing Fantasy #15.
   * 
   * @param query
   * @param offset
   * @param limit
   * @return {AxiosPromise<Comic[]>}
   */
  async fetchComics(query?: string, offset = 0, limit = 30): Promise<Comic[]> {
    const url = `/comics?apikey=${PUBLIC_API_KEY}&limit=${limit}&offset=${offset}&titleStartsWith=${query}&orderBy=title&noVariants=true`;
    const res = await this._axios.get<Comic[]>(url);
    return res.data;
  }

  /**
   * Fetches the women, men, organizations, alien species, deities, animals, non-corporeal entities, 
   * trans-dimensional manifestations, abstract personifications, and green amorphous blobs which occupy 
   * the Marvel Universe (and various alternate universes, timelines and altered realities therein). For example, Spider-Man.
   * 
   * @param comicId
   * @return {AxiosPromise<Character[]>}
   */
  async fetchComicCharacters(comicId: number): Promise<Character[]> {
    const url = `/comics/${comicId}/characters?apikey=${PUBLIC_API_KEY}`;
    const res = await this._axios.get<Character[]>(url);
    return res.data;
  }

  /**
   * Fetches individual print and digital comic issues, collections and graphic novels. For example: Amazing Fantasy #15.
   * 
   * @param query
   * @param offset
   * @param limit
   * @return {AxiosPromise<Comic[]>}
   */
  async fetchCharacters(query?: string, offset = 0, limit = 30): Promise<Character[]> {
    const url = `/characters?apikey=${PUBLIC_API_KEY}&limit=${limit}&offset=${offset}&nameStartsWith=${query}&orderBy=name`;
    const res = await this._axios.get<Character[]>(url);
    return res.data;
  }
}

