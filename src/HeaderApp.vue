<script setup>
import { useProductsStore } from './stores/products'

const productsStore = useProductsStore()
</script>
<template>
  <div class="p-3 text-2xl mb-10">Общая сумма покупок: {{ productsStore.totalSum }}</div>
</template>
