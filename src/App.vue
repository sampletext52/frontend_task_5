<script setup>
import FeedNode from './Feed/FeedNode.vue'
import HeaderApp from './HeaderApp.vue'
import { useProductsStore } from './stores/products'

const productsStore = useProductsStore()
</script>

<template>
  <div class="p-6 container mx-auto">
    <HeaderApp />

    <div class="grid grid-cols-2 gap-6">
      <FeedNode v-for="product in productsStore.products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
