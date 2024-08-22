<template>
    <div class="container">
        <div class="row">
            <h2 class=" heading display-2 ">Product Details</h2>
        </div>
        <div class="row justify-content-center" v-if="product">
            <Card class=" cust-card bg-dark ">
                <template #cardHeader>
                    <!-- {{ product.productURL }} -->
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold text-white">{{ product.prodName }}</h5>
                    <p class="lead text-white">
                        {{ product.Category }}
                    </p>
                    <p class="lead text-white"><span class="text-white fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <button class="btn btn-success">Purchase</button>
                </template>
            </Card>
        </div>
        <div v-else>
            <Spinner/>
        </div>
    </div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import Card from '@/components/CardComp.vue'
import Spinner from '@/components/Spinner.vue'
import { useRoute } from 'vue-router'
const store = useStore()
const route = useRoute()
const product = computed(
    () => store.state.product
)
onMounted(() => {
    store.dispatch('fetchProduct', route.params.id)
})
</script>
<style scoped>
.cust-card{
    margin:2rem;
}

.heading{


    margin-top:5rem;
    color: #ffffff;
}

</style>







