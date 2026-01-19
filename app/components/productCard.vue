<template>
  <UCard as="NuxtLink" :ui="{
    body: 'overflow-hidden',

  }">
    <template #header>
      <img src="https://picsum.photos/id/46/400" alt="Product Image" class="w-full h-48 object-cover" />
      <UButton
        icon="material-symbols:add-shopping-cart-sharp"
        size="xl"
        color="neutral"
        :ui=UButtonStyles
        @click.prevent="handleAddToCart"
      />
    </template>
    <template #default>
      <div class="flex items-center gap-1">
        <UBadge
          label="Choice"
          color="warning"
          size="xs" :ui="{
            base: 'text-black'
          }"
        />
        <UBadge label="Promo" color="error" size="xs" />
        <h6 class="whitespace-nowrap text-sm text-[#191919]">Funda protectora para auriculares AirPods de silicona suave y duradera, compatible con AirPods 1, 2 y Pro. Diseño elegante y ligero que ofrece protección contra golpes y arañazos.</h6>
      </div>
      <p class="font-bold my-1 flex flex-wrap items-center gap-1">
        <span class="text-sm">DOP</span>
        <span class="text-xl">{{ formatNumber(1234) }}</span>
        <span class="font-normal text-sm text-gray-400 line-through">DOP{{ formatNumber(1234) }}</span>
      </p>
      <p class="offer-text">
        <img src="https://ae01.alicdn.com/kf/S0f1bc1aeb2ab4de98568b86f99bcd0991/42x60.png" width="11" alt="Product Image">
        Ahorra DOP2.5
      </p>
    </template>
  </UCard>
</template>

<script lang="ts" setup>
import type { Product } from '~~/types/product';

const props = defineProps<{
  product?: Product
}>();

const { addToCart } = useCart();

const handleAddToCart = () => {
  if (!props.product) return;

  addToCart({
    id: Date.now(),
    item: {
      ...props.product,
      quantity: 1
    }
  });
};

const UButtonStyles = {
  base: 'absolute bottom-2 right-2 bg-white hover:bg-white rounded-full text-black shadow-md hover:bg-black hover:text-white transition-colors w-11',
};

</script>

<style scoped>
@reference "~/assets/css/main.css";

.offer-text {
  @apply text-error text-sm flex items-center;
}
</style>