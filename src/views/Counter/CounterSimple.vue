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
export default {
  name: 'counter',
  data: () => ({ counter: 0, incrementValue: 1 }),
  methods: {
    decrement: function() {
      this.counter -= this.incrementValue;
    },
    increment: function() {
      this.counter += this.incrementValue;
    }
  }
};
</script>

<style lang="scss"></style>
