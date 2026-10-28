export interface BlogAuthor {
  name: string;
  role?: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug?: string;
  excerpt: string;
  image: string;
  category?: string;
  author: BlogAuthor;
  date: string;
  readTime: string;
  url?: string;
}

export interface BlogSectionData {
  eyebrow?: string;
  heading?: string;
  description?: string;
  posts: BlogPost[];
}
