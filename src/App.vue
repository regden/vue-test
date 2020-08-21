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
      <v-switch dense v-model="$vuetify.theme.dark" hide-details inset label></v-switch>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped hide-overlay width="325">
      <v-text-field
        prepend-inner-icon="search"
        class="my-5 mx-5"
        dense
        outlined
        rounded
        filled
        clearable
        label="Search"
        hide-details
      ></v-text-field>
      <v-list>
        <!-- <v-list-item-group v-model="item" color="primary"> -->
        <template v-for="(item, i) in items" align="center">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text class="mr-2">edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <!-- </v-list-item-group> -->
        <v-divider></v-divider>
        <v-list-item link to="/" color="primary">
          <v-list-item-icon>
            <v-icon>home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about" color="primary">
          <v-list-item-icon>
            <v-icon>archive</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <!-- <v-footer fixed outlined>
        <span>&copy; 2020</span>
        <v-spacer></v-spacer>
      </v-footer>-->
    </v-navigation-drawer>
    <v-main class="mx-5 my-5">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { icon: "lightbulb_outline", text: "Notes" },
      { icon: "touch_app", text: "Reminders" },
      { divider: true },
      { heading: "Labels" },
      { icon: "add", text: "Create new label" },
      { divider: true },
      { icon: "archive", text: "Archive" },
      { icon: "delete", text: "Trash" },
      { divider: true },
      { icon: "settings", text: "Settings" },
      { icon: "chat_bubble", text: "Trash" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Keyboard shortcuts" }
    ]
  })
};
</script>

<style>
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
