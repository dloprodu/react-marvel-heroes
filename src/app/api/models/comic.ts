import Image from './image';
import Url from './url';
import ResourceList from './resource-list';
import TextObject from './text-object';
import ComicSummary from './comic-summary';

/** 
 *  @class Comic
 *  @type {Object}
 */
export default interface Comic {
  /**
   * The unique ID of the comic resource.
   * 
   * @type {number}
   */
  id: number;

  /**
   * The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.
   * 
   * @type {number}
   */
  digitalId: number;

  /**
   * The canonical title of the comic.
   *
   * @type {string}
   */
  title: string;

  /**
   * The number of the issue in the series (will generally be 0 for collection formats).
   * 
   * @type {number}
   */
  issueNumber: number;

  /**
   * If the issue is a variant (e.g. an alternate cover, second printing, or director's cut), a text description of the variant.
   * 
   * @type {string}
   */
  variantDescription: string;

  /**
   * The preferred description of the comic.
   * 
   * @type {string}
   */
  description: string;

  /**
   * The date the resource was most recently modified.
   * 
   * @type {Date}
   */
  modified: Date;

  /**
   * The ISBN for the comic (generally only populated for collection formats).
   * 
   * @type {string}
   */
  isbn: string;

  /**
   * The UPC barcode number for the comic (generally only populated for periodical formats).
   * 
   * @type {string}
   */
  upc: string;

  /**
   * The Diamond code for the comic.
   * 
   * @type {string}
   */
  diamondCode: string;

  /**
   * The EAN barcode for the comic.
   * 
   * @type {string}
   */
  ean: string;

  /**
   * The ISSN barcode for the comic.
   * 
   * @type {string}
   */
  issn: string;

  /**
   * The publication format of the comic e.g. comic, hardcover, trade paperback.
   * 
   * @type {string}
   */
  format: string;

  /**
   * The number of story pages in the comic.
   * 
   * @type {number}
   */
  pageCount: number;

  /**
   * A set of descriptive text blurbs for the comic.
   * 
   * @type {TextObject[]}
   */
  textObjects: TextObject[];

  /**
   * The canonical URL identifier for this resource.
   * 
   * @type {string}
   */
  resourceURI: string;

  /**
   * A set of public web site URLs for the resource.
   * 
   * @type {Url[]}
   */
  urls: Url[];

  /**
   * A summary representation of the series to which this comic belongs.
   * 
   * @type {SeriesSummary}
   */
  series: {
    resourceURI: string,
    name: string
  };

  /**
   * A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).
   * 
   * @type {ComicSummary[]}
   */
  variants: ComicSummary[];

  /**
   * A list of collections which include this comic (will generally be empty if the comic's format is a collection).
   * 
   * @type {ComicSummary[]}
   */
  collections: ComicSummary[];

  /**
   * A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").
   * 
   * @type {ComicSummary[]}
   */
  collectedIssues: ComicSummary[];

  /**
   * A list of key dates for this comic.
   * 
   * @type {ComicDate[]}
   */
  dates:  {
    type: string,
    date: Date
  }[];

  /**
   * A list of prices for this comic.
   * 
   * @type {ComicPrice[]}
   */
  prices: {
    type: string,
    price: number
  }[];

  /**
   * The representative image for this comic.
   * 
   * @type {Image}
   */
  thumbnail: Image;

  /**
   * A list of promotional images associated with this comic.
   * 
   * @type {Image[]}
   */
  images: Image[];

  /**
   * A resource list containing the creators associated with this comic.
   * 
   * @type {ResourceList}
   */
  creators: ResourceList;	

  /**
   * A resource list containing the characters which appear in this comic.
   * 
   * @type {ResourceList}
   */
  characters: ResourceList;

  /**
   * A resource list containing the stories which appear in this comic.
   * 
   * @type {ResourceList}
   */
  stories: ResourceList;

  /**
   * A resource list containing the events in which this comic appears.
   * 
   * @type {ResourceList}
   */
  events: ResourceList;
}
