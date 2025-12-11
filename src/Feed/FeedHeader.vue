<script setup>
import { useProduct } from '../composables/useProduct'

const { product } = useProduct()
</script>
<template>
  <div class="text-sm">
    <div>Creator - {{ product?.user?.full_name }}</div>
    <div>MEdia count: {{ product?.collection_medias?.length }}</div>
  </div>
  <h2 class="text-lg font-extrabold">{{ product?.name }}</h2>
</template>
