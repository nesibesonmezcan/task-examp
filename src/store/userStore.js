import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    users: null,
    todos: null,
    posts: null,
    albums: null,
    selectedUser: null
    
  }),

  actions: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.users = response.data;

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
   
    async fetchPosts(params = {}) {
      try {
        console.log("store", params)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {params: params});
        this.posts = response.data;
        
      } catch (error) {
        console.error("Error fetching post data:", error);
      }
    },
    async fetchAlbums(params = {}) {
      try {
        console.log("storeAlbums", params)
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums", {params: params});
        this.albums = response.data;
        
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    }
    ,
    async fetchPhotos() {
      try {
        console.log("storePhotos")
        const response = await axios.get("https://jsonplaceholder.typicode.com/photos");
        this.photos = response.data;
        
      } catch (error) {
        console.error("Error fetching album data:", error);
      }
    },
    selectUserById(id) {
      if (this.users) {
        this.selectedUser = this.users.find(user => user.id === id);
      } else {
        console.error("Users data is not available."); 
      }
    },
    
    
    selectedAlbumById(id){
      if(this.albums){
        this.selectedAlbum= this.albums.find(album=> album.id===id)
      }else {
        console.error("Users data is not available."); 
      }
    }
  },
  persist: true,
  
});


