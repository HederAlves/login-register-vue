<template>
  <div class="mainContainer">
    <img
      class="imageLogin"
      src="../../public/images/login-image.jpg"
      alt="imagem de lanches"
    />
    <section class="sectionForm">
      <h1 class="titleLogin">Bem vindo!</h1>
      <p>Faça seu login para continuar</p>
      <TheFormLogin />
      <span class="spanLine">
        <p class="lineDivision">ou</p>
      </span>
      <button class="buttonGoogle">
        <img class="iconGoogle" src="../../public/icons/google.png" alt="" />
        Entrar com o Google
      </button>
      <p>
        Não tem uma conta?<router-link class="stringRouter" to="/register"
          >Cadastre</router-link
        >
      </p>
    </section>
    <StyleLoginRegister />
  </div>
</template>

<script>
import TheFormLogin from "../components/TheFormLogin.vue";
import StyleLoginRegister from "../assets/StyleLoginRegister.vue";

export default {
  name: "Login",
  components: { TheFormLogin, StyleLoginRegister },
};
</script>

<style>
.spanLine{
  @apply text-center border-t-2 px-5 sm:w-[50vh] w-[45vh];
}
.lineDivision {
  @apply bg-white -m-4 text-center px-5 absolute xl:ml-28 ml-32 md:ml-24;
}
</style>
