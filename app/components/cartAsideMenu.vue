<template>
  <USlideover title="Carrito de compras" :ui="{ footer: 'justify-end' }">
    <div class="nav-item-top cursor-pointer">
      <UIcon class="icon"  name="ph:shopping-cart-simple-light" />
      <div class="flex flex-col">
        <span class="bg-black rounded-4xl text-white text-center font-bold px-1">{{ quantity.toString().padStart(2, '0') }}</span>
        <span class="text"><b>Cesta</b></span>
      </div>
    </div>

    <template #body>
      <div class="p-4">
        <!-- Empty State -->
        <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-12">
          <UIcon name="ph:shopping-cart-simple-light" class="size-20 text-gray-300 mb-4" />
          <h3 class="text-lg font-semibold text-gray-700">Tu carrito está vacío</h3>
          <p class="text-sm text-gray-500 mt-1">Agrega productos para comenzar a comprar</p>
        </div>

        <!-- Cart Items -->
        <div v-else class="space-y-4">
          <UCard v-for="item in cart" :key="item.id" :ui="{ body: 'p-3' }">
            <div class="flex gap-3">
              <img
                :src="item.item.imageUrl || 'https://picsum.photos/80/80'"
                :alt="item.item.name"
                class="w-20 h-20 object-cover rounded-md"
              />
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-medium text-gray-900 truncate">{{ item.item.name }}</h4>
                <p class="text-xs text-gray-500 mt-1">Cantidad: {{ item.item.quantity }}</p>
                <p class="text-sm font-bold text-black mt-2">
                  DOP {{ formatNumber(item.item.price * item.item.quantity) }}
                </p>
              </div>
              <UButton
                icon="i-lucide-trash-2"
                color="error"
                variant="ghost"
                size="xs"
                @click="removeFromCart(item.item.id)"
              />
            </div>
          </UCard>

          <!-- Total -->
          <div class="border-t pt-4 mt-4">
            <div class="flex justify-between items-center">
              <span class="text-base font-semibold">Total:</span>
              <span class="text-lg font-bold">DOP {{ formatNumber(totalPrice) }}</span>
            </div>
            <UButton
              class="w-full mt-4"
              color="error"
              size="lg"
              label="Proceder al pago"
              :ui="{ base: 'bg-red-600 hover:bg-red-700' }"
            />
          </div>
        </div>
      </div>
    </template>

    <template v-if="cart.length != 0" #footer>
      <div class="border-t pt-4 mt-4 w-full">
        <div class="flex justify-between items-center">
          <span class="text-base font-semibold">Total:</span>
          <span class="text-lg font-bold">DOP {{ formatNumber(totalPrice) }}</span>
        </div>
        <UButton
          class="w-full mt-4"
          color="error"
          size="lg"
          label="Proceder al pago"
          :ui="{ base: 'bg-red-600 hover:bg-red-700' }"
        />
      </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
const { cart, quantity, totalPrice, removeFromCart } = useCart();
</script>

<style scoped>
@reference "~/assets/css/main.css";

.top-nav {
  @apply w-full py-4;
  ul {
    @apply flex items-center lg:flex-row flex-col;
    li {
      @apply px-2 lg:w-auto w-full;
    }
    .nav-item-top {
      @apply flex items-center text-xs text-[#191919] font-semibold;
      .text {
        @apply xl:inline-block hidden;
      }
      .icon {
        @apply xl:mr-1.5 size-7;
      }
    }
  }
}

</style>