<template>
  <v-card tile>
    <v-card-text class=" text-center">
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
      <v-btn x-large color="red" outlined @click="decrement(incrementValue)" class="mr-5">Decrement</v-btn>
      <v-btn x-large color="green" outlined @click="increment(incrementValue)">Increment</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { COUNTER_INC, COUNTER_DEC } from '@/store/counter.action';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'counterx',
  data: () => ({ incrementValue: 5 }),
  computed: { ...mapState({ counter: state => state.counter }) },
  methods: { ...mapActions([COUNTER_INC, COUNTER_DEC]) }
};
</script>

<style lang="scss">
.counter {
  max-width: 500px;
}
</style>
