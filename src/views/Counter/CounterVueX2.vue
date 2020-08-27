<template>
  <v-card tile>
    <v-card-text class="text-center">
      <div class="text-h3 mt-10">{{ counter }}</div>
      <v-slider
        class="my-10"
        v-model="sliderValue"
        :max="9"
        :min="1"
        :label="sliderValue.toString()"
        inverse-label
        width="50px"
        hint="Change increment step"
        persistent-hint
      ></v-slider>
      <v-btn x-large color="red" outlined @click="decrement()" class="mr-5"
        >Decrement</v-btn
      >
      <v-btn x-large color="green" outlined @click="increment()"
        >Increment</v-btn
      >
    </v-card-text>
  </v-card>
</template>

<script>
import {
  GET_COUNTER,
  SET_COUNTER_INC,
  SET_COUNTER_DEC,
  SET_INCREMENT_VALUE,
  GET_INCREMENT_VALUE
} from '@/store/counter.action';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CounterX2',
  data: () => ({ sliderValue: 0 }),
  mounted() {
    this.sliderValue = this.incrementValue;
  },
  computed: {
    ...mapGetters({
      counter: GET_COUNTER,
      incrementValue: GET_INCREMENT_VALUE
    })
  },
  methods: {
    ...mapActions({
      increment: SET_COUNTER_INC,
      decrement: SET_COUNTER_DEC,
      setIncrementValue: SET_INCREMENT_VALUE
    })
  },
  watch: {
    sliderValue: function(val) {
      this.setIncrementValue(val);
    }
  }
};
</script>

<style lang="scss"></style>
