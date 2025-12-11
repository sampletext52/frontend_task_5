<script setup>
import { provide, inject } from 'vue'
import FeedType from './FeedType.vue'

const props = defineProps({
  product: Object,
})

const purchaseProduct = inject('purchaseProduct', null)

// Provide product and purchase function to child components
provide('product', props.product)
provide('purchaseProduct', purchaseProduct)
</script>
<template>
  <div class="border p-3">
    <div class="border p-5 mb-2">
      <p v-if="props.product.price" class="text-gray-light text-sm">Цена: {{ props.product.price }}</p>
      <p v-if="props.product.purchase_date" class="text-gray-light text-sm">
        Дата покупки: {{ props.product.purchase_date }}
      </p>
    </div>

    <FeedType></FeedType>
  </div>
</template>
