<template>
  <Navigation>
    <CartAsideMenu></CartAsideMenu>
  </Navigation>
  <main>
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import CartAsideMenu from "~/components/cartAsideMenu.vue";
</script>