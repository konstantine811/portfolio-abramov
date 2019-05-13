export default {
  name: "About",
  data() {
    return {
      slide: 1
    };
  },
  methods: {
    prev() {
      if (this.slide >= 2) {
        this.slide--;
      }
    },
    next() {
      if (this.slide <= 4) {
        this.slide++;
      }
    }
  }
};
