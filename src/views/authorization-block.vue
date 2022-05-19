<template>
  <div class="authorization-block">
    <div class="authorization-block-container">
      <div class="authorization-block-container-block">
        <img
          src="https://media.discordapp.net/attachments/801514450535972865/973627930079010846/unknown.png"
          alt=""
        />
        <h1>PHANTOM</h1>
        <CustomInput
          v-model:input="username"
          style="margin: 38px 0 10px 0"
          height="32"
          width="300"
          placeholder="Login"
          inpyt_type="text"
        >
          <template v-slot:icon>
            <svg
              style="margin: 0 12px 0 14px"
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.10714 9.5H5.89286C2.63839 9.5 0 11.9625 0 15C0 15.5522 0.479799 16 1.07143 16H13.9286C14.5202 16 15 15.5522 15 15C15 11.9625 12.3616 9.5 9.10714 9.5ZM1.64029 14.5C1.9048 12.5281 3.70982 11 5.89286 11H9.10714C11.2888 11 13.0949 12.5297 13.3594 14.5H1.64029ZM7.5 8C9.86685 8 11.7857 6.20906 11.7857 4C11.7857 1.79094 9.86685 0 7.5 0C5.13315 0 3.21429 1.79094 3.21429 4C3.21429 6.20937 5.13281 8 7.5 8ZM7.5 1.5C8.9769 1.5 10.1786 2.62156 10.1786 4C10.1786 5.37844 8.9769 6.5 7.5 6.5C6.0231 6.5 4.82143 5.37812 4.82143 4C4.82143 2.62156 6.02344 1.5 7.5 1.5Z"
                fill="#D6D6D6"
              />
            </svg>
          </template>
        </CustomInput>
        <CustomInput
          v-model:input="password"
          height="32"
          width="300"
          placeholder="Password"
          inpyt_type="password"
        >
          <template v-slot:icon>
            <svg
              style="margin: 0 11px 0 13px"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.5"
                cy="6.5"
                r="5.1"
                stroke="#D6D6D6"
                stroke-width="1.2"
              />
              <rect
                x="0.6"
                y="6.6"
                width="15.8"
                height="9.8"
                rx="2.4"
                fill="#1B1E25"
                stroke="#D6D6D6"
                stroke-width="1.2"
              />
            </svg>
          </template>
        </CustomInput>
        <CustomCheckbox
          style="margin: 20px 0 32px 0; width: 290px"
          @select="save_credits"
          name="Save credits"
          :value="save_profile"
        />
        <CustomButtonFirst
          @click="sing_in_from_account()"
          height="32"
          name="Авторизация"
          width="240"
        />
        <h5>
          Doesn’t have
          <span @click="not_have_account()" style="color: #298af6">account</span
          >?
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
import CustomInput from "../components/custom-input.vue";
import CustomButtonFirst from "../components/custom-button-first.vue";
import CustomCheckbox from "../components/custom-checkbox.vue";
import axios from "axios";
export default {
  name: "authorization-block",
  components: { CustomInput, CustomButtonFirst, CustomCheckbox },
  data() {
    return {
      username: "",
      password: "",
      save_profile: true,
    };
  },
  mounted() {
    axios.defaults.withCredentials = true;
    axios({
      method: "POST",
      url: "http://gxone.ru:5000/Account",
    })
      .then((response) => {
        if (response.data["Role"] !== undefined) this.$router.push("/loader");
      })
      .catch((error) => {
        console.log("<========== Axios ==========>");
        console.error(error);
      });
  },
  methods: {
    sing_in_from_account() {
      axios.defaults.withCredentials = true;
      let bodyFormData = new FormData();
      bodyFormData.append("username", this.username);
      bodyFormData.append("password", this.password);
      axios({
        method: "POST",
        url: "http://gxone.ru:5000/Account/SingIn",
        data: bodyFormData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
        .then((request) => {
          console.log(request.data);
          if (request.data == "Success") this.$router.push("/loader");
        })
        .catch((error) => {
          console.log("<======> Axios Error <======>");
          console.log(error);
          return false;
        });
    },
    save_credits: (value) => {
      console.log(value);
      this.save_profile = value;
    },
    not_have_account: () =>
      window
        .require("electron")
        .ipcRenderer.send("open-external-browser", "gxone.ru"),
  },
};
</script>

<style lang="scss">
.authorization-block {
  border-radius: 6px;
  width: 950px;
  height: 650px;
  background-image: url("https://media.discordapp.net/attachments/801514450535972865/973625183401304124/unknown.png?width=1008&height=670");
  background-size: cover;
  &-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-block {
      width: 400px;
      height: 480px;
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
        font-size: 15px;
        line-height: 17px;
        text-align: center;
        color: #efefef;
        margin: 0 0 0 0;
      }
      h5 {
        font-family: Inter, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        text-align: center;
        color: #7e8289;
        span:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
