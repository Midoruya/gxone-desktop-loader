<template>
  <div @click="chancke_value()" class="custom-checkbox">
    <div v-if="value" class="custom-checkbox-active">
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 5.70588L4.18182 9L11 1" stroke="white" stroke-width="1.2" />
      </svg>
    </div>
    <div v-else class="custom-checkbox-non-active"></div>
    <a>{{ name }}</a>
  </div>
</template>

<script>
export default {
  name: "custom-checkbox",
  data() {
    return {
      value: true,
    };
  },
  props: {
    name: String,
  },
  methods: {
    chancke_value() {
      this.value = !this.value;
      this.$emit("select", this.value);
    },
  },
};
</script>

<style lang="scss">
.custom-checkbox {
  //transition: 500ms;
  display: flex;
  align-items: center;
  &-non-active {
    border-radius: 6px;
    width: 20px;
    height: 20px;
    background: #181a20;
  }
  &-active {
    border-radius: 6px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #298af6;
  }
  a {
    margin: 0 0 0 12px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 13px;
    color: #d6d6d6;
  }
}

.custom-checkbox:hover {
  cursor: pointer;
}
</style>
