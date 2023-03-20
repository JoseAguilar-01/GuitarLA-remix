export interface CourseAttributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string;
  image: Record<string, any>;
}

export interface CourseProperties {
  id: number;
  attributes: CourseAttributes;
}

export interface CourseProps {
  course: CourseProperties;
}
