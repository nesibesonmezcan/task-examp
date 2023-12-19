import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    users: null,
    todos: null,
    posts: null,
    albums: null,
    comments: null,
    selectedUser: null,
    selectedPost: null,
    selectedAlbum: null,
  }),

  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        this.users = response.data;
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },

    async fetchPosts(params = {}) {
      try {
        console.log("store", params);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { params: params }
        );
        this.posts = response.data;
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    },

    async fetchTodos(params = {}) {
      try {
        console.log("todosstore", params);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos",
          { params: params }
        );
        this.todos = response.data;
      } catch (error) {
        console.error("Error fetching todos data:", error);
      }
    },
    async fetchAlbums(params = {}) {
      try {
        console.log("storeAlbums", params);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums",
          { params: params }
        );
        this.albums = response.data;
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    },
    async fetchPhotos(params = {}) {
      try {
        console.log("storePhotos", params);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          { params: params }
        );
        this.photos = response.data;
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    },
    async fetchComments(params) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
          { params: params }
        );
        this.comments = response.data;
      } catch (error) {
        console.error("Error fetching comments data:", error);
      }
    },
  },

  getters: {
    selectedAlbumById: (state) => (album_id) => {
      const album = state.albums
        ? state.albums.find((album) => album.id === album_id)
        : null;
      return album ? { ...album } : null;
    },

    selectedPostById: (state) => (post_id) => {
      const posts = state.posts || [];
      const comments = state.comments || [];
      const post = posts.find((post) => post.id === post_id);

      const filteredComments = comments.filter(
        (comment) => comment.postId === post_id
      );

      console.log("state1", state.posts);
      console.log("state2,", state.comments);
      console.log("state3,", filteredComments);
      console.log("state4,", post);

      return {
        post: post ? { ...post } : null,
        comments: [...filteredComments],
      };
    },
  },

  persist: true,
});
