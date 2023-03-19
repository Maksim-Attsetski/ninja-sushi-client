export interface ICreateNews {
  title: string;
  description: string;
  tag: string[];
  preview: string;
}

export interface INews extends ICreateNews {
  _id: string;
  createdAt: string;
}
