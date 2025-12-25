<script setup>
import { provide, computed, readonly } from 'vue'
import FeedType from './FeedType.vue'
import { useProductsStore } from '../stores/products'

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
})

const productsStore = useProductsStore()

const product = computed(() => {
  return productsStore.products.find((p) => p.id === props.productId)
})

const purchaseProduct = () => {
  productsStore.purchaseProduct(props.productId)
}

provide('product', readonly(product))
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
