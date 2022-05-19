<template>
  <application-frame />
  <router-view />
</template>

<script>
import ApplicationFrame from "./components/application-frame.vue";
export default {
  components: { ApplicationFrame },
};
</script>

<style lang="scss">
body {
  border: none;
  width: 820px;
  height: 545px;
  border-radius: 6px;
  -webkit-app-region: no-drag;
  background: transparent;
  margin: 0;
}
</style>
