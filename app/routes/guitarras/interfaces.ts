export interface GuitarAttributes {
  name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  description: string;
  price: number;
  url: string;
  image: Record<string, any>;
}

export interface GuitarProperties {
  id: number;
  attributes: GuitarAttributes;
}
