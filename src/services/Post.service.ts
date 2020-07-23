import httpRequest from "../adapters/HttpRequest";
import Post from "entities/Post.entity";

export function listPost(userId?: number) {
  return httpRequest.get<Post[]>("/posts", { params: { userId } });
}

export function getPost(postId: number) {
  return httpRequest.get<Post>("/posts/" + postId);
}

export function deletePost(postId: number) {
  return httpRequest.delete("/posts/" + postId);
}
