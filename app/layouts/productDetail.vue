<template>
  <Navigation>
      <CartAsideMenu></CartAsideMenu>
  </Navigation>
  <main class="content px-12 pt-4">
    <slot></slot>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import CartAsideMenu from "~/components/cartAsideMenu.vue";
</script>