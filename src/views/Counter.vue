<template>
  <v-card outlined>
    <v-card-title>Counter</v-card-title>
    <v-card-text>
      <v-tabs class="mb-5">
        <v-tab to="/counter/simple">Simple</v-tab>
        <v-tab to="/counter/vuex">VueX</v-tab>
        <v-tab to="/counter/vuex2">VueX-2</v-tab>
      </v-tabs>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter {
  transform: translateX(-50%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
