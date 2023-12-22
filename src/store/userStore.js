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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          { params: params }
        );
        this.posts = response.data;
        console.log("gel", params.post);
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    },

    async fetchTodos(params = {}) {
      try {
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
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums",
          { params: params }
        );
        this.albums = response.data;
        return this.albums;
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    },
    async fetchPhotos(params = {}) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos",
          { params: params }
        );

        this.photos = response.data;
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    },
    async fetchComments(params = {}) {
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

  persist: true,
});
