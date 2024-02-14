import { Post } from '@/interfaces/Posts';

export interface Children {
  type: string;
  text: string;
}


export interface CreatedBy {
  data: ContentType<User>;
}

export interface ContentType<T> {
  id: number;
  attributes: T;
}

export interface UpdatedBy {
  data: ContentType<User>;
}


export interface User {
  firstname: string;
  lastname: string;
  username: any;
  preferedLanguage: any;
  createdAt: string;
  updatedAt: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
