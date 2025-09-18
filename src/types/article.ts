export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  readTime: number;
  imageUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}