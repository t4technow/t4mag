export interface Category {
  id: number;
  title: string;
  slug: string;
  accent: string;
  post_count: number;
}

interface Tag {
  id: number;
  title: string;
  slug: string;
}

interface BaseAuthor {
  username: string
  email: string
  first_name: string
  last_name: string
  is_superuser: boolean
  bio: string
  profile_pic: string
}

interface Author extends BaseAuthor{
  following_authors: Array<BaseAuthor>
}

export interface Post {
	id: number;
	title: string;
	slug: string;
	author: Author;
  excerpt: string
	category: Category
	created_at: string;
	thumbnail_url: string;
  thumbnail_sm_url: string
};


export interface FullPost extends Post {
  body: string;
  excerpt: string;
  status: string;
  views: number
  content_type: string;
  allow_comments: string;
  featured_image_url: string
  tags: Tag[];
  previous_post?: Post
  next_post?: Post
}

export type size= "sm" | "md"