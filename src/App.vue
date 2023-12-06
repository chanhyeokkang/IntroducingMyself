<template>
  <v-app>
    <NavbarVue></NavbarVue>
   <v-content>
    <router-view></router-view>
   </v-content>
  </v-app>
</template>

<script>
import NavbarVue from './components/Navbar.vue';

export default {
  name: 'App',
  components: {
    NavbarVue
  },
  data: () => ({
    //
  }),
};
</script>
