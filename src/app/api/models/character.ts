import Image from './image';
import Url from './url';
import ResourceList from './resource-list';

/** 
 *  @class Character
 *  @type {Object}
 */
export default interface Character {
  /**
   * The unique ID of the character resource.
   *
   * @type {number}
   */
  id: number;

  /**
   * The name of the character.
   *
   * @type {string}
   */
  name: string;

  /**
   * A short bio or description of the character.
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
   * The representative image for this character.
   * 
   * @type {Image}
   */
  thumbnail: Image;

  /**
   * A resource list containing comics which feature this character.
   * 
   * @type {ResourceList}
   */
  comics: ResourceList;

  /**
   * A resource list of stories in which this character appears.
   * 
   * @type {ResourceList}
   */
  stories: ResourceList;

  /**
   * A resource list of events in which this character appears.
   * 
   * @type {ResourceList}
   */
  events: ResourceList;

  /**
   * A resource list of series in which this character appears.
   * 
   * @type {ResourceList}
   */
  series: ResourceList;
}
