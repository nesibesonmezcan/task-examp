<template>
  <div>
    <div class="fill-height">
      
      <div class="user-iconn">
        <div>
          <router-link  :to="{name: 'todos'}" :class="{ 'active-link': $route.path === '/todos' }"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9 14H9.01M9 17H9.01M12 16L13 17L16 14M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7H11C10.4696 7 9.96086 6.78929 9.58579 6.41421C9.21071 6.03914 9 5.53043 9 5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div> Todos</router-link>
        </div>
     
        <div>
         <router-link  :to="{name: 'posts'}" :class="{ 'active-link': $route.path === '/posts' }"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 4V22M13 8H15M13 12H15M6 4H17C17.5304 4 18.0391 4.21071 18.4142 4.58579C18.7893 4.96086 19 5.46957 19 6V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V5C5 4.73478 5.10536 4.48043 5.29289 4.29289C5.48043 4.10536 5.73478 4 6 4Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>  Posts</router-link>
        </div>
        
        <div>
         <router-link :to="{name: 'albums'}" :class="{ 'active-link': $route.path.includes('/albums') }"><div> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15 8H15.01M11.5 21H6C5.20435 21 4.44129 20.6839 3.87868 20.1213C3.31607 19.5587 3 18.7956 3 18V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3 16L8 11C8.928 10.107 10.072 10.107 11 11L12.5 12.5M18 22L21.35 18.716C21.5554 18.5167 21.7188 18.2782 21.8306 18.0146C21.9423 17.7511 22.0001 17.4678 22.0006 17.1816C22.0011 16.8953 21.9442 16.6119 21.8333 16.348C21.7224 16.084 21.5598 15.845 21.355 15.645C20.9371 15.2364 20.3762 15.007 19.7917 15.0059C19.2072 15.0048 18.6454 15.232 18.226 15.639L18.002 15.859L17.779 15.639C17.3612 15.2306 16.8005 15.0015 16.2162 15.0004C15.632 14.9993 15.0704 15.2263 14.651 15.633C14.4455 15.8323 14.282 16.0707 14.1702 16.3342C14.0583 16.5977 14.0004 16.881 13.9999 17.1672C13.9993 17.4535 14.0561 17.737 14.1669 18.0009C14.2777 18.2649 14.4403 18.5039 14.645 18.704L18 22Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div> <div> Albums</div></router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script >

</script>

<style scoped>
/* .product-image sınıfı şu anda kullanılmıyor gibi görünüyor. Eğer kullanılmayacaksa bu tanımı kaldırabilirsiniz. */
.product-image {
  border-radius: 50% !important;
  top: 15px;
  left: 15px;
}
.user-iconn > div{

  margin: 15px;

}
.user-iconn > div >a{
  text-decoration: none;
  margin: 10px;
  display: flex;
}
.active-link {
  background-color: rgb(255, 255, 255); /* Aktif olan linkin arka plan rengi */
  color: #221414; /* Aktif olan linkin metin rengi */
  /* Diğer stil özellikleri */
  width: 256px;
}
</style>
