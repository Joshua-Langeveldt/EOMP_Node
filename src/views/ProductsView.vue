<template>
    <div class="container">
        <div class="row justify-content-between">
            <h2 class="heading display-2 align-items-start d-flex" style="color: white; margin-top: 5%; font-weight: bolder;">Products</h2>
            <div class="search-sort-wrapper d-flex gap-2 ">
                <input v-model="searchQuery" type="text" placeholder="Search Products" class="form-control"/>
                
                <div class="d-flex align-items-center">
  <label for="sort-dropdown" class="me-2">Sort by:</label>

  <select id="sort-dropdown" v-model="sortOption" class="form-select">
    <option value="name">Name</option>
    <option value="amountAsc">Price (Low to High)</option>
    <option value="amountDesc">Price (High to Low)</option>
  </select>
</div>
            </div>
        </div>
        <div class="cust-card row gap-2 justify-content-center my-2" v-if="filteredProducts.length">
            <Card v-for="product in filteredProducts" :key="product.prodID" class="bg-dark">
                <template #cardHeader>
                    <img :src="product.prodURL" loading="lazy" class="img-fluid" :alt="product.prodName">
                </template>
                <template #cardBody>
                    <h5 class="card-title fw-bold text-white">{{ product.prodName }}</h5>
                    <p class="lead text-white"><span class="text-white fw-bold">Amount</span>: R{{ product.amount }}</p>
                    <div class="button-wrapper d-md-flex d-block justify-content-between">
                        <router-link :to="{ name: 'product', params: { id: product.prodID } }">
                            <button class="btn btn-danger" style="background-color: #900A06;">View Details</button>
                        </router-link>
                        <button class="btn btn-danger" style="background-color: #900A0680;" >Purchase</button>
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
import { computed, ref, onMounted } from 'vue'
import Spinner from '@/components/Spinner.vue'
import Card from '@/components/CardComp.vue'
const store = useStore()
const products = computed(() => store.state.products)
const searchQuery = ref('')
const sortOption = ref('prodName')
const filteredProducts = computed(() => {
    if (!products.value) return [];  // Ensure products is not null/undefined
    let filtered = products.value;
    // Filter products based on search query
    if (searchQuery.value) {
        filtered = filtered.filter(product =>
            product.prodName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            product.Category.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    }
    // Sort products based on selected option
    switch (sortOption.value) {
        case 'name':
            filtered = filtered.sort((a, b) => a.prodName.localeCompare(b.prodName));
            break;
        case 'amountAsc':
            filtered = filtered.sort((a, b) => a.amount - b.amount);
            break;
        case 'amountDesc':
            filtered = filtered.sort((a, b) => b.amount - a.amount);
            break;
    }
    return filtered;
});
onMounted(() => {
    store.dispatch('fetchProducts')
})
</script>
<style scoped>
.form-control{
    color: white !important;
}
.search-sort-wrapper {
    margin-bottom: 2rem;
    margin-left: -3.9rem;
    justify-content: flex-end;
    align-items: center;
}
.search-sort-wrapper input,
.search-sort-wrapper select {
    width: 180px;
    background-color: #23252B;
    color:white;
}
.cust-card{
margin:2rem !important;
}
.heading {
    margin-left: 4rem;
    margin-bottom: 2rem;
}
@media (max-width: 300px) {
    

    .search-sort-wrapper {
      flex-direction: column; /* Stack elements vertically on small screens */
      gap: 1rem; /* Increase gap between elements */
    }

    .form-control{
        width: 100%;
        margin-left: 43%;

    }
    .form-select {
        margin-left: 23%;
      max-width: 100%; /* Ensure input and select take full width */
    }
  }

</style>