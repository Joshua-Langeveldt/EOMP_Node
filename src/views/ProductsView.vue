<template>
    <div class="container">
        <div class="row">
            <h2 class="heading display-2 align-items-start d-flex">Products</h2>
        </div>
        <div class="cust-card row gap-2 justify-content-center my-2 " v-if="products">
            <Card v-for="product in products" :key="product.prodID" class="bg-dark">
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                    <!-- {{ product.prodURL }} -->
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold text-white">{{ product.prodName }}</h5>
                    <p class="lead text-white"><span class="text-white fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                            <button class="btn btn-danger">View Details</button>
                        </router-link>
                        <button class="btn btn-success">Purchase</button>
                    </div>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner />
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/CardComp.vue'
const store = useStore()
const products = computed(
    () => store.state.products
)
onMounted(() => {
    store.dispatch('fetchProducts')
})
</script>
<style scoped>
.cust-card{
margin:2rem !important;
}
.heading {
    margin-left: 4rem;
    margin-bottom: 2rem;
    margin-top:5rem;
    color: #ffffff;
}
</style>