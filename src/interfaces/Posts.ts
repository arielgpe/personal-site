import { CreatedBy, UpdatedBy } from '@/interfaces/Strapi';
import { Tags } from '@/interfaces/Tags';

export interface Post {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featured: boolean;
  description: string;
  comments: boolean;
  body: string;
  slug: string;
  tags: Tags;
  createdBy: CreatedBy;
  updatedBy: UpdatedBy;
}
