<template>
  <v-app>
    <v-app-bar app flat max-height="65">
      <header-page />
    </v-app-bar>
    <router-view></router-view>
    <v-footer>
      <footer-component/>
    </v-footer>
  </v-app>
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterComponent from './components/FooterComponent.vue';
export default {
  name: "App",

  components: {
    HeaderPage,
    FooterComponent,
  },

  data: () => ({
    //
  }),
};
</script>
