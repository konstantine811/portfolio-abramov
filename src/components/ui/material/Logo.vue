<template lang="pug">
  .logo-wrap
    .txt-anim-up__wrap-logo
      .logo-txt.txt-anim-up.logo-litterale__space ab
    .txt-anim-up__wrap-logo
      .logo-txt.txt-anim-up.logo-litterale__space-min rm
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/common/variables";
@import "../../../assets/styles/mixins/responsive";
.logo-txt {
  display: block;
  width: 64px;
  height: 32px;
  font-family: "Amiri", sans-serif;
  font-size: 36px;
  line-height: 29px;
  text-transform: uppercase;
  text-shadow: 4px 7px 4px $black;
  transition: all 0.3s ease-in-out;
  color: rgba($black, 0.57);
  @include for-phone-only {
    font-size: 33px;
    height: 29px;
    text-align: center;
  }
}

.logo-litterale__space {
  letter-spacing: 2px;
}

.logo-litterale__space-min {
  letter-spacing: -5px;
}
.logo-wrap {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translate(1px, 3px);
    .logo-txt {
      text-shadow: 3px 4px 6px $black;
      color: rgba($black, 0.7);
    }
  }
}
</style>
