<template>
  <button :style="set_style_component()" class="custom-button-first">
    <label>{{ name }}</label>
  </button>
</template>

<script>
export default {
  name: "custom-button-first",
  props: {
    name: String,
    width: String,
    height: String,
  },
  methods: {
    set_style_component() {
      let style_width = "width :" + this.width + "px;";
      let style_heigth = "height :" + this.height + "px;";
      return style_width + style_heigth;
    },
  },
};
</script>

<style lang="scss">
.custom-button-first {
  border: none;
  transition: 500ms;
  background: rgba(223, 232, 246, 0.6);
  border-radius: 6px;
  label {
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
  }
}
.custom-button-first:hover {
  cursor: pointer;
  background: #298af6;
}
</style>
