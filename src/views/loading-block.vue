<template>
  <div class="loading-block">
    <div class="loading-block-content">
      <svg class="loading-block-content-spinner" viewBox="0 0 50 50">
        <circle
          class="loading-block-content-spinner-path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="2"
        ></circle>
      </svg>
      <h1>PHANTOM</h1>
      <a>{{ loading_status }}</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "loading-block",
  data() {
    return {
      loading_status: "123123",
    };
  },
  mounted() {
    window.require("electron").ipcRenderer.send("loading-block-loading");
    window
      .require("electron")
      .ipcRenderer.on("loading-block-sender", (event, arg) => {
        this.loading_status = arg;
      });
    window.require("electron").ipcRenderer.on("redirect-to-auth", () => {
      this.loading_status = "find you account";
      setTimeout(() => {
        this.UPDATE_ACCOUNT_INFO();
        if (this.IS_VALID_ACCOUNT === true) this.$router.push("/loader");
        else this.$router.push({ path: "/authorization" });
      }, 1500);
    });
  },
  methods: { ...mapActions(["UPDATE_ACCOUNT_INFO"]) },
  computed: { ...mapGetters(["IS_VALID_ACCOUNT"]) },
};
</script>

<style lang="scss">
.loading-block {
  border-radius: 6px;
  width: 950px;
  height: 650px;
  background-image: url("https://media.discordapp.net/attachments/801514450535972865/973625183401304124/unknown.png?width=1008&height=670");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &-content {
    width: 400px;
    height: 480px;
    background: #1b1e25;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      margin: 265px 0 0 0;
      font-family: Montserrat, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 15px;
      line-height: 17px;
      text-align: center;
      color: #efefef;
    }

    a {
      margin: 17px 0 0 0;
      font-family: Inter, sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 16px;
      text-align: center;
      color: #d6d6d6;
    }

    &-spinner {
      margin: 135px 0 0 0;
      animation: rotate 2s linear infinite;
      z-index: 2;
      position: absolute;
      width: 100px;
      height: 100px;

      &-path {
        stroke: #298af6;
        stroke-linecap: round;
        animation: dash 1.5s ease-in-out infinite;
      }
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  }
}
</style>
