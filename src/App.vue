<template>
<div>
  <router-view></router-view>
</div>
</template>
<script>
export default {
    name: "App",
}
</script>
<style>
.mainContainer {
  @apply h-screen sm:flex sm:justify-between md:mr-6;
}
.imageLogin {
  @apply invisible sm:visible sm:h-screen h-0;
}
.sectionForm {
  @apply flex flex-col justify-around items-center h-[84vh] mt-8 xl:mr-72;
}
.titleLogin {
  @apply font-bold text-2xl text-black;
}
.buttonGoogle {
  @apply h-14 border-2 rounded-md text-gray-500 w-[45vh] sm:w-[50vh];
}
.iconGoogle {
  @apply absolute ml-3;
}
.stringRouter {
  @apply text-sky-400 font-bold pl-5;
}
.formLoginRegister {
  @apply flex flex-col justify-center h-56;
}
.inputList {
  @apply flex flex-col justify-center gap-4 h-60;
}
.inputContainer {
  @apply h-12 flex p-2 rounded-md border-2 w-[45vh] sm:w-[50vh];
}
.inputLoginRegister {
  @apply w-[45vh] h-11 -mt-2 ml-4;
}
.inputLoginRegister:focus {
  @apply shadow-none bg-none outline-none;
}
.iconEmail {
  @apply py-1;
}
.buttonLoginRegister {
  @apply  bg-emerald-600 text-white h-14 rounded-md text-center font-bold flex justify-center items-center mb-1 w-[45vh] sm:w-[50vh];
}
</style>