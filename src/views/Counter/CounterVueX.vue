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
        @click="decrement(incrementValue)"
        class="mr-5"
        >Decrement</v-btn
      >
      <v-btn x-large color="green" outlined @click="increment(incrementValue)"
        >Increment</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
import {
  SET_COUNTER_INC,
  SET_COUNTER_DEC,
  GET_COUNTER
} from '@/store/counter.action';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CounterX',
  data: () => ({ incrementValue: 5 }),
  computed: { ...mapGetters({ counter: GET_COUNTER }) },
  methods: {
    ...mapActions({ increment: SET_COUNTER_INC, decrement: SET_COUNTER_DEC })
  }
};
</script>

<style lang="scss"></style>
