import axios from "axios";

export const fetchPosts = async () => await axios.get("/posts/");
export const createPost = async (newPost) => await axios.post("/posts/", newPost);
export const updatePost = async (id, updatedPost) => await axios.patch(`/posts/${id}`, updatedPost)
export const deletePost = async (id) => await axios.delete(`/posts/${id}`, deletePost)
export const likePost = async (id) => await axios.patch(`/posts/${id}/likePost`, likePost)  