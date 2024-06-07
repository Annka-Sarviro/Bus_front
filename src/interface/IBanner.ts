export interface IBanner {
  _id?: string;
  id?: string;
  main_title?: string;
  name?: string;
  img?: string;
  isMain?: boolean;
  main_desc?: string;
  alt?: string;
  defaultImg?: string;
}

export interface IGetBanner {
  page: IBanner;
}
