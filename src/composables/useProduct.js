import { inject } from 'vue'

export const useProduct = () => {
  const product = inject('product', null)
  const purchaseProduct = inject('purchaseProduct', null)

  return {
    product,
    purchaseProduct,
  }
}

