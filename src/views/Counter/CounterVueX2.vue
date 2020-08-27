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
      <v-btn
        x-large
        color="red"
        outlined
        @click="addCounter({decrement: true})"
        class="mr-5"
      >Decrement</v-btn>
      <v-btn x-large color="green" outlined @click="addCounter()">Increment</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { GET, SET, GET_INCREMENT, SET_INCREMENT } from '@/store/counter.store';
import { mapActions, mapGetters } from 'vuex';

const store = 'CounterStore';

export default {
  name: 'CounterX2',
  data: () => ({ sliderValue: 0 }),
  mounted() {
    this.sliderValue = this.incrementValue;
  },
  computed: {
    ...mapGetters({
      counter: `${store}/${GET}`,
      incrementValue: `${store}/${GET_INCREMENT}`
    })
  },
  methods: {
    ...mapActions({
      addCounter: `${store}/${SET}`,
      setIncrement: `${store}/${SET_INCREMENT}`
    })
  },
  watch: {
    sliderValue: function(val) {
      this.setIncrement(val);
    }
  }
};
</script>

<style lang="scss">
</style>
