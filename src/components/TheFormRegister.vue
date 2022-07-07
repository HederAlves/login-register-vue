<template>
  <form class="formLoginRegister" @submit.prevent="save">
    <ul class="inputList">
      <li class="inputContainer">
        <img class="iconEmail" src="/icons/user.png" alt="" />
        <input
          class="inputLoginRegister"
          type="email"
          placeholder="Nome completo"
          required="Digite seu Nome Completo"
        />
      </li>
      <li class="inputContainer">
        <img class="iconEmail" src="/icons/email.png" alt="" />
        <input
          class="inputLoginRegister"
          type="email"
          placeholder="Seu e-mail"
          required="Digite seu Email"
        />
      </li>
      <li class="inputContainer">
        <img class="" src="/icons/password.png" alt="" />
        <input
          class="inputLoginRegister"
          type="text"
          placeholder="Senha"
          required="Digite sua Senha"
        />
      </li>
      <li class="inputContainer">
        <img class="" src="/icons/password.png" alt="" />
        <input
          class="inputLoginRegister"
          type="text"
          placeholder="Confirme a senha"
          required="Confirme sua Senha"
        />
      </li>
    </ul>
  </form>
  <router-link class="buttonLoginRegister" to="/">Criar</router-link>
</template>

<script>
import FormStyle from "../assets/FormStyle.vue";
export default {
  name: "TheFormRegister",
  components: [FormStyle],
};
</script>
