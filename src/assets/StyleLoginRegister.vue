<template>
</template>
<script>
export default{
  name: "StyleLoginRegister"
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
</style>