import { Children, ContentType, CreatedBy, UpdatedBy } from '@/interfaces/Strapi';
import { Tags } from '@/interfaces/Tags';

export interface Post {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean;
  description: string;
  body: Body[];
  slug: string;
  tags: Tags;
  createdBy: CreatedBy;
  updatedBy: UpdatedBy;
}

export interface Body {
  type: string;
  children: Children[];
  level?: number;
}
