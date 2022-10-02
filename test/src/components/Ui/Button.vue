<template>
  <button :class="className" :type="type" @click="buttonClickHandler">
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    className: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
  },
  methods: {
    buttonClickHandler() {
      this.$emit("clickOnButton");
    },
  },
};
</script>
