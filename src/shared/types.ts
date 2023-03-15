export interface IQuery {
  limit?: number;
  page?: number;
  dependencies?: boolean | string[];
  search?: string;
  filter?: string;
}
