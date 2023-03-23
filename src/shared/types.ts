export interface IQuery {
  limit?: number;
  page?: number;
  dependencies?: boolean | string[];
  search?: string;
  filter?: string;
  sort?: string;
}

export interface IGetArray<T> {
  data: T[];
  count: number;
  last: boolean;
}
