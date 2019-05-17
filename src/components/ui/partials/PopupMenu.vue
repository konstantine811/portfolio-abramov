<template lang="pug">
  -
    var values = [
      {anchor: 'home', title: 'Home' },
      {anchor: 'work', title: 'Work'},
      {anchor: 'about', title: 'About'},
      {anchor: 'contact', title: 'Contact'}
    ]
  transition(name="fade-popup")
    .popup(@click.self="closeMenuPopup()")
      .close-button(@click.self="closeMenuPopup()")
      iframe(:src="urlVideoPortfolio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).popup-iframe.only-device
      .mobile-menu.only-tablet
        ul.mobile-menu-wrap
          each val in values
            li.mobile-menu-item
              a(href=`#${val.anchor}` @click.self="closeMenuPopup()" data-menuanchor=val.anchor).mobile-navigation-link= val.title
          li.mobile-menu-item
              a(@click.self="showPresantationWindow = true").mobile-navigation-link Presentation video
      .mobile-presentation-window(v-if="showPresantationWindow" @click.self="showPresantationWindow = false")
        iframe(:src="urlVideoPortfolio" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).mobile-presenation

</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";
export default {
  name: "PopupMenu",
  data() {
    return {
      showPresantationWindow: false,
      urlVideoPortfolio: "https://www.youtube.com/embed/dlUGP0bWHCU"
    };
  },
  computed: {
    ...mapState(["popup"])
  },
  methods: {
    closeMenuPopup() {
      store.dispatch("popup/closePopupMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/common/variables";
@import "../../../assets/styles/common/animation";

.mobile-menu {
  width: 100%;
  height: auto;
}

.mobile-menu-wrap {
  list-style: none;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.mobile-navigation-link {
  display: block;
  text-align: center;
  background-color: rgba($white, 0.7);
  border-bottom: 1px solid rgba($black, 0.3);
  padding: 1.3% 0;
  color: $black;
  text-decoration: none;
  font-family: "Amiri", sans-serif;
  font-size: 24px;
  text-transform: uppercase;
  opacity: 0;
}
@for $i from 1 through 5 {
  .mobile-menu-item:nth-child(#{$i}) {
    .mobile-navigation-link {
      animation: fade-in 1s 0.1s * $i ease-in 1 forwards;
    }
  }
}

.mobile-presentation-window {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-presenation {
  width: 100%;
  height: 60vh;
}
</style>
