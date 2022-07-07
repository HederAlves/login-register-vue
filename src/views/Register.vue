<template>
  <div class="mainContainer">
    <img
      class="imageLogin"
      src="../../public/images/login-image.jpg"
      alt="imagem de lanches"
    />
    <section class="sectionForm">
      <h1 class="titleLogin">Vamos começar!</h1>
      <p>Crie uma nova conta</p>
      <TheFormRegister />
      <p>
        Não tem uma conta?<router-link class="stringRouter" to="/"
          >Entrar</router-link
        >
      </p>
    </section>
    <StyleLoginRegister />
  </div>
</template>

<script>
import TheFormRegister from "../components/TheFormRegister.vue";
import StyleLoginRegister from "../assets/StyleLoginRegister.vue";

export default {
  name: "Login",
  components: { TheFormRegister, StyleLoginRegister },
};
</script>
