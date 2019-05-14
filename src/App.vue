<template lang="pug">
  #app(:class="statusSectionClass")
    .app-bgc
      include ./assets/img/svg/background.svg
    partials-popup-frame(v-if="popup.showPopup")
    partials-popup-menu(v-if="popup.showPopupMenu")
    .app-logo-wrap(@click="showPopupMenu")
      material-logo.app__logo
    .side-bar
      the-navigation.app__nav
    full-page(ref="fullpage" :options="options" id="full page" :class="direction").section-wrap
      .section
        home
      .section.work-section
        work-portfolio(:class="{slideUp: classes.workSlideUp, slideFromDown: classes.workSlideFromDown}" :slideUp="classes.workSlideUp")
      .section
        about(:class="{slideUp: classes.commonSlideUp}")
      .section
        contact(:class="{slideUp: classes.commonSlideUp}")
</template>

<script>
//styles
import "@/assets/styles/main.scss";
//views
import Home from "@/views/Home/Home.vue";
import WorkPortfolio from "@/views/WorkPortfolio/WorkPortfolio.vue";
import About from "@/views/About/About.vue";
import Contact from "@/views/Contact/Contact.vue";
//partials
import TheNavigation from "@/components/TheNavigation/TheNavigation.vue";
//vuex
import { mapState } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "app",
  components: {
    Home,
    WorkPortfolio,
    About,
    Contact,
    TheNavigation
  },
  data() {
    return {
      options: {
        menu: "#menu",
        licenseKey: "DE8EDF08-4DDE4C51-84C0F20B-2400CF09",
        anchors: ["home", "work", "about", "contact"],
        scrollingSpeed: 1500,
        easingcss3: "cubic-bezier(0.65, 0, 0.076, 1)",
        scrollOverflow: true,
        offsetSections: true,
        onLeave: this.onLeave,
        afterLoad: this.afterLoad,
        normalScrollElements: ".scroll-area"
      },
      statusSectionClass: null,
      direction: null,
      classes: {
        workSlideUp: false,
        workSlideFromDown: false,
        commonSlideUp: false
      }
    };
  },

  computed: {
    ...mapState(["popup"])
  },
  methods: {
    onLeave(origin, destination, direction) {
      /*    console.log("origin");
      console.log(origin);
      console.log("destination");
      console.log(destination);
      console.log("direction");
      console.log(direction); */
      this.statusSectionClass = origin.anchor + "-" + direction;
      this.direction = direction;
      if (this.statusSectionClass === "home-down") {
        this.classes.workSlideUp = true;
        setTimeout(() => {
          this.classes.workSlideUp = false;
        }, 3500);
      }
      if (
        this.statusSectionClass === "about-up" ||
        this.statusSectionClass === "contact-up"
      ) {
        this.classes.workSlideFromDown = true;
        setTimeout(() => {
          this.classes.workSlideFromDown = false;
        }, 3500);
      }

      if (direction === "down") {
        this.classes.commonSlideUp = true;
        setTimeout(() => {
          this.classes.commonSlideUp = false;
        }, 4500);
      }
    },
    showPopupMenu() {
      this.$store.dispatch("popup/showPopupMenu");
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/common/variables";
@import "./assets/styles/mixins/responsive";
#app {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  position: relative;
  display: flex;
  @include for-tablet-landscape-down {
    background-color: $silver-light;
  }
}

.app-bgc {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  @include for-tablet-landscape-down {
    display: none;
  }
}

.rect-bgc {
  width: 100%;
  height: 100%;
  animation: scale-bgc 1s ease-in infinite forwards;
}

.app-logo-wrap {
  position: absolute;
  right: 0;
  z-index: 100;
  cursor: pointer;
}

.app__logo {
  margin-top: 24px;
  margin-right: 46px;
  z-index: 1000;
  height: 100%;
  @include for-phone-only {
    margin-top: 17px;
    margin-right: 17px;
  }
}

.app__nav {
  height: 100%;
  align-self: center;
  margin-bottom: 104px;
  width: auto;
  margin-left: 42px;
  top: 38%;
  z-index: 100;
}

.side-bar {
  max-width: 260px;
  height: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
}

.section-wrap {
  margin: 0 auto;
  width: 100%;
  padding-right: 130px;
}

@media (max-width: $md-device) {
  .side-bar {
    display: none;
  }
  .section-wrap {
    padding: 0 25px;
  }
}

.section-wrap {
  @include for-tablet-landscape-down {
    padding: 10px;
  }
}
</style>
