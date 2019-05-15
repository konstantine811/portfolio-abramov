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
          url: "https://genetics.adxhealthcare.com",
          description:
            "This project was created to order your dna research. On this project, as a Front-end developer, I used the following technologies: HTML, SCSS, Bootstrap and Angular.js.",
          frameMovie: "https://www.youtube.com/embed/bhOnEU3tc2U",
          id: 1
        },
        {
          title: "IxLayer",
          image: require("@/assets/img/portfolio/ixlayer-project.png"),
          url: "https://ixlayer.com/",
          description:
            "This is a San Francisco startup project for a complete solution for launching your genetic product. For this project, I used Gulp, HTML(Jade), SCSS and Javascript.",
          id: 2
        },
        {
          title: "IxLayer Phone Project",
          image: require("@/assets/img/portfolio/ixlayer-phone-project.png"),
          url: "https://ixlayer-phone.herokuapp.com/",
          description:
            "This is my first isometric practice project, which I drew with the help of Adobe Illustrator and then importing the SVG, I animated it with the help of SCSS and assembled the project on Vue.js.",
          frameMovie: "https://www.youtube.com/embed/VBXBswzuHKA",
          id: 3
        },
        {
          title: "GOALZERO",
          image: require("@/assets/img/portfolio/goalzero.png"),
          url: "https://www.goalzero.com/",
          description:
            "The site for the sale of smart portable electrical equipment. Here I, as a Front-end developer, together with the team, took part in the markup and styling of the site with the help of HTML, SCSS and Bootstrap",
          id: 4
        },
        {
          title: "ixStore",
          image: require("@/assets/img/portfolio/ixStore.png"),
          description:
            "This is a template project for IxStore. Here, for the first time in practice, I began to use the Vue.js (Vuelidate, I18n, Vuex) as well as HTML and SCSS.",
          frameMovie: "https://www.youtube.com/embed/dfgSBUpxh5Y",
          id: 5
        },
        {
          title: "Portfolio",
          image: require("@/assets/img/portfolio/portfolio-abrams.png"),
          url: "https://abrams-portfolio.herokuapp.com",
          description:
            "This one is my early portfolio. Here I used Angular 4 for the sake of practice.",
          frameMovie: "https://www.youtube.com/embed/BKRKgigvtqQ",
          id: 6
        },
        {
          title: "ixLayer Admin",
          image: require("@/assets/img/portfolio/ixLayerAdmin.png"),
          description:
            "This is the admin panel for ixLayer. We developed this site in a team with another developer. My main task was markup and styling. The technologies I used here are HTML, SCSS, Vue.js and Material Component Framework Vuetify.",
          frameMovie: "https://www.youtube.com/embed/dUZtXm9OwoE",
          id: 7
        },
        {
          title: "Agropool",
          image: require("@/assets/img/portfolio/agropool.png"),
          url: "https://www.agropool.ch/de/",
          description:
            "Project Agropool on the sale of agricultural machinery (Switzerland). Here I, as a  Front-end developer, used HTML, SCSS, Semantic UI and Javascript. The site also uses two color themes, so when writing styles, an approach was used to change different themes.",
          frameMovie: "https://www.youtube.com/embed/q1JZYcp6xsc",
          id: 8
        }
      ]
    };
  }
};
