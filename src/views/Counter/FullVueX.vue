<template>
  <v-card tile>
    <v-card-text class=" text-center">
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
      <v-btn x-large color="red" outlined @click="decrement()" class="mr-5">Decrement</v-btn>
      <v-btn x-large color="green" outlined @click="increment()">Increment</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { COUNTER_INC, COUNTER_DEC, COUNTER_SET_INC } from '@/store/counter.action';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'counterx',
  data: () => ({ sliderValue: 0 }),
  computed: {
    ...mapState({
      counter: state => state.counter,
      incrementValue: state => state.incrementValue
    })
  },
  methods: {
    ...mapActions([COUNTER_INC, COUNTER_DEC, COUNTER_SET_INC])
  },
  mounted() {
    this.sliderValue = this.incrementValue;
  },
  watch: {
    sliderValue: function(val) {
      this.$store.dispatch(COUNTER_SET_INC, val);
    }
  }
};
</script>

<style lang="scss">
.counter {
  max-width: 500px;
}
</style>
