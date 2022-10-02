<template>
  <input
    :type="type"
    :name="name"
    :class="className"
    :placeholder="placeholder"
    @input="inputHandler"
    :value="value"
  />
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
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    value: [String, Array],
    placeholder: {
      type: String,
      default: "",
    },
  },
  methods: {
    inputHandler(event) {
      this.$emit("input", event);
    },
  },
};
</script>