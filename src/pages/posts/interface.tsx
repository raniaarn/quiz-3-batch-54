export interface Post {
  userId: string;
  id: string;
  title: string;
  body: string;
}

export interface PostsApiResponse {
  posts: Post[]
}