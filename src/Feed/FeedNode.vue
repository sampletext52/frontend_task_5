<script setup>
import { provide, computed, readonly } from 'vue'
import FeedType from './FeedType.vue'
import { useProductsStore } from '../stores/products'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const productsStore = useProductsStore()

const purchaseProduct = () => {
  productsStore.purchaseProduct(props.product)
}

provide('product', readonly(computed(() => props.product)))
provide('purchaseProduct', purchaseProduct)
</script>
<template>
  <div class="border p-3">
    <div class="border p-5 mb-2">
      <p v-if="product?.price" class="text-gray-light text-sm">Цена: {{ product.price }}</p>
      <p v-if="product?.purchase_date" class="text-gray-light text-sm">
        Дата покупки: {{ product.purchase_date }}
      </p>
    </div>

    <FeedType></FeedType>
  </div>
</template>
