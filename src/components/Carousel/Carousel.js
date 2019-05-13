import store from "@/store/store";

export default {
  name: "Carousel",
  created() {
    if (this.slides) {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    }
  },
  mounted() {
    this.matchWidth();
    window.addEventListener("resize", this.matchWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.matchWidth);
  },
  props: {
    slideArr: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      slides: this.slideArr,
      infoBoxWidth: null,
      showPopupFrame: false,
      frameLink: null
    };
  },
  methods: {
    next() {
      const first = this.slides.shift();
      this.slides = this.slides.concat(first);
    },
    previous() {
      const last = this.slides.pop();
      this.slides = [last].concat(this.slides);
    },
    slideTransition(index) {
      if (index === 0) {
        this.previous();
      } else if (index === 2) {
        this.next();
      }
    },
    touchHandler(direction) {
      if (direction === "right") {
        this.previous();
      } else if (direction === "left") {
        this.next();
      }
    },
    matchWidth() {
      this.$nextTick(function() {
        this.infoBoxWidth = this.$refs.infoBox[1].clientWidth;
      });
    },
    showFramePopup(link) {
      store.dispatch("popup/showPopupFrame", link);
    }
  }
};
