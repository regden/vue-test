import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      // light: {
      // primary: "#263238",
      //       secondary: "#424242",
      //       accent: "#82B1FF",
      //       error: "#FF5252",
      //       info: "#2196F3",
      //       success: "#4CAF50",
      //       warning: "#FFC107",
      // },
      light: {
        primary: colors.blue,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.indigo.lighten5
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.indigo.base
        // primary: colors.blueGrey.lighten3,
      }
    }
  },
  icons: {
    iconfont: 'md'
  }
});
