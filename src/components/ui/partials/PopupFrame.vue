<template lang="pug">
  transition(name="fade-popup")
    .popup(@click.self="closeFramePopup()")
      .close-button(@click.self="closeFramePopup()")
      iframe(:src="popup.linkFrame+'?autoplay=1'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).popup-iframe
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";

export default {
  name: "PopupFrame",
  data() {
    return {};
  },
  computed: {
    ...mapState(["popup"])
  },
  methods: {
    closeFramePopup() {
      store.dispatch("popup/closePopupFrame");
    }
  }
};
</script>

<style lang="scss" scoped></style>
