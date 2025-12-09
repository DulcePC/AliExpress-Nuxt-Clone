<template>
  <header>
    <nav class="top-nav ">
      <ul>
        <li>
          <NuxtLink to="/"><img src="/image/logo.png" alt="Logo" class="w-[156px]" /></NuxtLink>
        </li>
        <li>
          <SearchBar  />
        </li>
        <!-- Download App-->
        <li>
          <div>
            <UIcon class="icon" name="teenyicons:qr-code-outline" />
            <span>Descarga la app de AliExpress</span>
          </div>
        </li>
        <!--   Country-->
        <li>
          <div>
            <span>ES/DOP</span>
          </div>
        </li>
        <!--  Log In / Register-->
        <li>
          <div>
            <UIcon class="icon" name="ic:outline-person" />
            <span>¡Bienvenido <b>Identifícate / Regístrate</b></span>
          </div>
        </li>
        <li>
          <div>
            <UIcon class="icon" name="teenyicons:cart-outline" />
            <span>01</span>
            <span>Cesta</span>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "~/assets/css/main.css";

.top-nav {
  @apply w-full bg-amber-400;
  ul {
    @apply flex items-center;
  }
}

</style>