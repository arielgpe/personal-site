import { ContentType } from '@/interfaces/Strapi';

export interface Tags {
  data: ContentType<Tag>[];
}


export interface Tag {
  name: string;
  createdAt: string;
  updatedAt: string;
}
