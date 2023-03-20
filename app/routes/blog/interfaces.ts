export interface PostAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  url: string;
  image: Record<string, any>;
}

export interface PostProperties {
  id: number;
  attributes: PostAttributes;
}
