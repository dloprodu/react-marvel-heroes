export default interface ResourceList {
  available: number,
  returned: number,
  collectionURI: string,
  items: 
    {
      resourceURI: string,
      name: string,
      type: string
    }[];
}