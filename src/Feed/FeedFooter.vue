<script setup>
import CommentCount from './view/CommentCount.vue'
import LikeCount from './view/LikeCount.vue'
import ViewCount from './view/ViewCount.vue'
import { useProduct } from '../composables/useProduct'

const { product, purchaseProduct } = useProduct()

const onKupit = () => {
  if (purchaseProduct && product) {
    purchaseProduct(product.id)
  }
}
</script>
<template>
  <div class="mt-10 flex gap-4 bg-amber-100 p-1 justify-center items-center">
    <CommentCount />
    <LikeCount />
    <ViewCount />

    <button class="bg-black text-white p-2" @click="onKupit()">Купить</button>
  </div>
</template>
