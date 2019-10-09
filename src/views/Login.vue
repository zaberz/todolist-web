<template>
  <div class="login">
    <input type="text" placeholder="account" v-model="formData.account" />
    <input type="password" placeholder="password" v-model="formData.password" />
    <button @click="login" class="js-login">登陆</button>
    <button @click="registry" class="js-registry">注册</button>
  </div>
</template>

<script>
import { login, registry } from "@/api/user";
import { setToken } from "@/libs/auth";

export default {
  name: "login",
  data: () => {
    return {
      formData: {
        account: "",
        password: ""
      }
    };
  },
  async mounted() {},
  methods: {
    async login() {
      let res = await login(this.formData).catch(e => {
        console.log(e);
      });

      this._setTokenAndRedirect(res);
    },
    async registry() {
      let res = await registry(this.formData);
      this._setTokenAndRedirect(res);
    },
    async _setTokenAndRedirect(tokenObj) {
      if (!tokenObj) {
        return;
      }
      let { token, expiresIn } = tokenObj;
      setToken(token, expiresIn);
      const redirect = this.$route.query.redirect;
      if (redirect) {
        this.$router.push(redirect);
      }
    }
  }
};
</script>
