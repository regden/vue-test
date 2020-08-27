<template>
  <v-card tile>
    <v-card-text class="text-center">
      <div class="text-h3 mt-10">{{ counter }}</div>
      <v-slider
        class="my-10"
        v-model="incrementValue"
        :max="9"
        :min="1"
        :label="incrementValue.toString()"
        inverse-label
        width="50px"
        hint="Change increment step"
        persistent-hint
      ></v-slider>
      <v-btn
        x-large
        color="red"
        outlined
        @click="addCounter({ value: incrementValue, decrement: true })"
        class="mr-5"
        >Decrement</v-btn
      >
      <v-btn
        x-large
        color="green"
        outlined
        @click="addCounter({ value: incrementValue })"
        >Increment</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
import { GET, SET } from '@/store/counter.store';
import { mapActions, mapGetters } from 'vuex';

const COUNTER_STORE = 'CounterStore';

export default {
  name: 'CounterX',
  data: () => ({ incrementValue: 5 }),
  computed: { ...mapGetters({ counter: `${COUNTER_STORE}/${GET}` }) },
  methods: {
    ...mapActions({ addCounter: `${COUNTER_STORE}/${SET}` }),
  },
};
</script>

<style lang="scss"></style>
