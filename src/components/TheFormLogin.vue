<template>
  <form class="formLoginRegister" @submit.prevent="login">
    <ul class="inputList">
      <li class="inputContainer">
        <img class="iconEmail" src="/icons/email.png" alt="" />
        <input
          class="inputLoginRegister"
          type="email"
          placeholder="Seu e-mail"
          v-model="formData.email"
        />
      </li>
      <li class="inputContainer">
        <img class="" src="/icons/password.png" alt="" />
        <input
          class="inputLoginRegister"
          type="password"
          placeholder="Senha"
          v-model="formData.password"
        />
      </li>
    </ul>
    <button class="buttonLoginRegister" @click="login">clique</button>
  </form>
</template>

<script>
export default {
  name: "TheFormLogin",
  data() {
    return {
      formData: {
        id: 0,
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      const response = await fetch(
        "https://c9bc-2804-431-cfce-a5af-9fdb-e966-d738-a0c.sa.ngrok.io/login",
        {
          method: "POST",
          body: JSON.stringify(this.formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if (response.ok) {
        this.$router.push("/menu");
      } else {
        alert("Senha ou usuário incorretos");
      }
    },
  },
};
</script>
