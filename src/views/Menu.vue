<template>
  <div class="body">
    <em>Login realizado com sucesso...</em>
    <main>
      <section>
        <article>
          <img
            src="/public/images/heder-dev.png"
            alt="Imagem do desenvolvedor Front-end"
          />
          <div class="cardInfo">
            <h1>Desenvolvedor Front-end</h1>
            <a class="nameDev" href="https://www.linkedin.com/in/hederalves/"
              >Heder Alves</a
            >
            <a class="githubLink" href="https://github.com/HederAlves/node-api"
              >https://github.com/HederAlves/login-register-vue</a
            >
          </div>
        </article>
        <article>
          <img
            src="/public/images/adriano-dev.png"
            alt="Imagem do desenvolvedor Back-end"
          />
          <div class="cardInfo">
            <h1>Desenvolvedor Back-end</h1>
            <a class="nameDev" href="https://www.linkedin.com/in/hederalves/"
              >Adriano Alvarenga</a
            >
            <a class="githubLink" href="https://www.linkedin.com/in/hederalves/"
              >https://github.com/Adriano/login-register-vue</a
            >
          </div>
        </article>
      </section>
    </main>
  </div>
</template>
<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
.body {
  @apply h-screen w-full flex flex-col justify-center;
  background: rgb(251, 217, 63);
  background: radial-gradient(
    circle,
    rgba(251, 217, 63, 0.958420868347339) 0%,
    rgba(176, 63, 251, 0.9948354341736695) 2%,
    rgba(176, 63, 251, 0.9948354341736695) 3%,
    rgba(251, 78, 63, 1) 15%,
    rgba(147, 147, 66, 1) 32%,
    rgba(139, 66, 150, 1) 41%,
    rgba(66, 57, 129, 1) 47%,
    rgba(41, 93, 78, 1) 57%,
    rgba(0, 0, 0, 1) 83%
  );
  background-position: -2vh;
}
em {
  @apply text-white text-center;
}
main {
  @apply flex;
}
section {
  @apply xl:flex;
}
article {
  @apply rounded-xl border-4 flex p-5 m-10;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    6deg,
    rgba(0, 0, 0, 1) 14%,
    rgba(122, 236, 223, 1) 64%
  );
}
h1 {
  @apply sm:text-2xl font-extrabold leading-4;
}
.nameDev {
  @apply sm:text-4xl font-semibold leading-4;
}

.nameDev:hover {
  @apply text-white;
}
img {
  @apply rounded-full w-1/3;
}
.cardInfo {
  @apply flex flex-col justify-between xl:pl-5 pl-2 gap-3;
}
h1 {
  @apply inline-block;
}
.githubLink {
  @apply text-white sm:text-sm text-[8px];
}
</style>
