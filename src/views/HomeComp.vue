<template>
  <v-content>
    <hero-page/>
    <latest-post/>
    <gallery-page/>
  </v-content>
</template>
<script>

import HeroPage from '@/components/HeroPage.vue';
import LatestPost from '@/components/LatestPost.vue';
import GalleryPage from '@/components/GalleryPage.vue';
export default {
  name: "HomeComp",components: {
    HeroPage,
    LatestPost,
    GalleryPage,
  },
  data() {
    return {
      //
    };
  },
};
</script>
<style scoped>
</style>