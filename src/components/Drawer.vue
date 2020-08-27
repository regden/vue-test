<template>
  <div>
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
      <v-list-item
        link
        v-for="(page, i) in nav"
        :key="'nav' + i"
        :to="page.route"
        color="primary"
      >
        <v-list-item-icon>
          <v-icon>{{ page.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ page.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item link v-for="(item, i) in items" :key="'link' + i">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
export default {
  name: 'DrawerLeft',
  props: {
    items: {
      type: Array,
      required: true,
    },
    nav: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
