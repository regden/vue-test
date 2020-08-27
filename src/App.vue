<template>
  <v-app id="keeper">
    <!-- clipped-left  -->
    <v-app-bar app dense clipped-left dark color="blue-grey darken-4">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-15">
        KEEPER
        <span class="font-weight-light">Offline</span>
      </span>
      <v-text-field
        prepend-inner-icon="search"
        dense
        solo-inverted
        flat
        label="Search"
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-switch
        dense
        v-model="$vuetify.theme.dark"
        hide-details
        inset
        label
      ></v-switch>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      permanent
      hide-overlay
      width="300"
    >
      <drawer :nav="nav" :items="items"></drawer>
    </v-navigation-drawer>

    <v-main class="mx-5 my-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
import drawer from '@/components/Drawer';

export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: 'lightbulb', text: 'Notes' },
      { icon: 'settings', text: 'Parameters' },
    ],
    nav: [
      { icon: 'home', text: 'Home', route: '/' },
      { icon: 'person', text: 'About', route: '/about' },
      { icon: 'exposure_plus_1', text: 'Counter', route: '/counter' },
    ],
  }),
  components: { drawer },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
