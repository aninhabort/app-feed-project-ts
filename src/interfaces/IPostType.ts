import { Author } from "./IAuthor";
import { Content } from './IContent'

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}