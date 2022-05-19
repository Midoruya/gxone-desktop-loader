<template>
  <div :style="set_style_component()" class="custom-input">
    <slot name="icon"> </slot>
    <input @input="emmit_input" :placeholder="placeholder" :type="inpyt_type" />
  </div>
</template>

<script>
export default {
  name: "custom-input",
  methods: {
    set_style_component() {
      let style_width = "width :" + this.width + "px;";
      let style_heigth = "height :" + this.height + "px;";
      console.log(style_width + style_heigth);
      return style_width + style_heigth;
    },
    emmit_input(event) {
      this.$emit("update:input", event.target.value);
    },
  },
  props: {
    width: String,
    height: String,
    inpyt_type: String,
    placeholder: String,
  },
};
</script>

<style lang="scss">
.custom-input {
  background: #181a20;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input {
    width: 255px;
    height: 100%;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    color: #d6d6d6;
    background: transparent;
    border: none;
  }
  input:focus {
    border: none;
    outline: none;
  }
}
</style>
