import Carousel from "@/components/Carousel/Carousel.vue";

export default {
  name: "WorkPortfolio",
  components: {
    Carousel
  },
  props: {
    slideUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      slides: [
        {
          title: "ADx Healthcare",
          image: require("@/assets/img/portfolio/adx-project.png"),
          indicator: "Slide A",
          url: "https://stage.adx.ixlayer.com/home",
          description:
            "This pfoject I use Angular.js HTML, CSS.it SDF LKSDF SDFSD",
          frameMovie:
            "https://dms.licdn.com/playback/C4D05AQGL82cA0CVDJg/67ac8e3cbcd74588afcad8bf3ad5b740/feedshare-mp4_3300-captions-thumbnails/1507940147251-drlcss?e=1555261200&v=beta&t=doSZz2LIIFchPN7vY7u-3R2M3-24q4e7rMiOl6Owoco",
          id: 1
        },
        {
          title: "IxLayer",
          image: require("@/assets/img/portfolio/ixlayer-project.png"),
          indicator: "Slide B",
          url: "https://ixlayer.com/",
          description:
            "This pfoject I use Angular.js HTML, CSS.it SDF LKSDF SDFSD",
          id: 2
        },
        {
          title: "IxLayer Phone Project",
          image: require("@/assets/img/portfolio/ixlayer-phone-project.png"),
          indicator: "Slide C",
          url: "https://ixlayer-phone.herokuapp.com/",
          description: "Thsdfsdfar.js HTML, CSS.it SDF LKSDF SDFSD",
          frameMovie: "https://www.youtube.com/embed/VBXBswzuHKA",
          id: 3
        },
        {
          title: "IxLayer Phone Project",
          image: require("@/assets/img/portfolio/ixlayer-phone-project.png"),
          indicator: "Slide C",
          url: "https://ixlayer-phone.herokuapp.com/",
          description:
            "This pfoject I use Angular.js HTML, CSS.it SDF LKSDF SDFSD",
          frameMovie: "https://www.youtube.com/embed/VBXBswzuHKA",
          id: 4
        },
        {
          title: "IxLayer",
          image: require("@/assets/img/portfolio/ixlayer-project.png"),
          indicator: "Slide B",
          url: "https://ixlayer.com/",
          description:
            "This pfoject I use Angular.js HTML, CSS.it SDF LKSDF SDFSD",
          id: 5
        }
      ]
    };
  }
};
