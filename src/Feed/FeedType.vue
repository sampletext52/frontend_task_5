<script setup>
import FeedFooter from './FeedFooter.vue'
import FeedHeader from './FeedHeader.vue'
import { useProduct } from '../composables/useProduct'

const { product, purchaseProduct } = useProduct()
</script>
<template>
  <div class="relative overflow-hidden">
    <FeedHeader />

    <FeedFooter />
  </div>
</template>
