<template>
  <div class="application-frame">
    <button @click="minimize_windows()">
      <label for="">
        <svg
          width="12"
          height="1"
          viewBox="0 0 12 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="12" height="1" fill="#737477" />
        </svg>
      </label>
    </button>
    <button @click="close_windows()">
      <label for="">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.4" d="M11 1L1 11M1 1L11 11" stroke="white" />
        </svg>
      </label>
    </button>
  </div>
  <div class="application-body">
    <div class="application-body-container">
      <div class="application-body-container-block">
        <img
          src="https://media.discordapp.net/attachments/801514450535972865/973627930079010846/unknown.png"
          alt=""
        />
        <h1>PHANTOM</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    console.log(window.require("os").userInfo().username);
  },
  methods: {
    close_windows: () =>
      window.require("electron").ipcRenderer.send("close-programm"),
    minimize_windows: () =>
      window.require("electron").ipcRenderer.send("minimize-focus-windows"),
  },
};
</script>

<style lang="scss">
body {
  width: 820px;
  height: 545px;
  border-radius: 10px;
  -webkit-app-region: no-drag;
  background: #181a20;
  margin: 0;
}
.application-frame {
  z-index: 9999;
  position: absolute;
  -webkit-app-region: drag;
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    background: transparent;
    border: none;
    color: #737477;
    -webkit-app-region: no-drag;
    opacity: 0.4;
  }
  button:hover {
    opacity: 1;
  }
}
.application-body {
  width: 820px;
  height: 545px;
  background-image: url("https://media.discordapp.net/attachments/801514450535972865/973625183401304124/unknown.png?width=1008&height=670");
  background-size: cover;
  &-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-block {
      width: 350px;
      height: 400px;
      background: #1b1e25;
      border-radius: 6px;
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        margin: 32px 0 10px 0;
        width: 60px;
        height: 66px;
      }

      h1 {
        font-family: Montserrat, sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        color: #efefef;
        margin: 0 0 0 0;
      }
    }
  }
}
</style>
