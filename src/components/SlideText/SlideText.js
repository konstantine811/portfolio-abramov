export default {
  name: "SlideText",
  data() {
    return {
      sliderContent: [
        {
          id: 1,
          current: true,
          text:
            "Hi, I'm Konstantin Abramov. I am a Frontend developer and at the moment my experience is 2+ years. With great desire, ambition, dedication, sense of style and creativity, I approach every project."
        },
        {
          id: 2,
          current: false,
          text:
            "Therefore, if you want your site to look elegant,  with well written and maintained code,  and each part of it is created with a soul,  you need to contact me."
        },
        {
          id: 3,
          current: false,
          text:
            "I am a Frontend developer and at the moment my experience is 2+ years. With great desire, ambition, dedication, sense of style and creativity, I approach every project."
        },
        {
          id: 4,
          current: false,
          text:
            "2+ years. With great desire, ambition, dedication, sense of style and creativity, I approach every project."
        }
      ],
      currentSlideIndex: 0
    };
  },
  computed: {
    prevShow() {
      return this.currentSlideIndex === 0 ? false : true;
    },
    nextShow() {
      return this.currentSlideIndex === this.sliderContent.length - 1
        ? false
        : true;
    }
  },
  methods: {
    prev() {
      if (this.currentSlideIndex > 0) {
        var self = this;
        this.sliderContent.forEach(function(val, index) {
          if (val.current) {
            val.current = false;
            self.currentSlideIndex = index - 1;
          }
        });
        this.sliderContent[this.currentSlideIndex].current = true;
      }
    },
    next() {
      if (this.currentSlideIndex != this.sliderContent.length - 1) {
        var self = this;
        this.sliderContent.forEach(function(val, index) {
          if (val.current) {
            val.current = false;
            self.currentSlideIndex = index + 1;
          }
        });
        this.sliderContent[this.currentSlideIndex].current = true;
      }
    }
  }
};
