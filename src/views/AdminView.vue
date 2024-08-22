
<template>
    <div class="admin-container">
        <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%;">ADMIN</h1>
        <button @click="openAddProductModal" class="add-btn bg-danger">Add new product</button>
      <table class="admin-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.prodID">
            <td><img :src="product.prodURL" alt="product image" class="product-image"/></td>
            <td>{{ product.Category }}</td>
            <td>
              <button @click="deleteProduct(product.prodID)" class="action-btn delete-btn bg-danger text-white">Delete</button>
              <button @click="openUpdateProductModal(product)" class="action-btn update-btn bg-danger text-white">Edit</button>
              <button @click="viewProduct(product)" class="action-btn view-btn bg-danger text-white">View</button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Modal for adding a product -->
      <div v-if="isAddModalOpen" class="modal">
        <div class="modal-content">
          <span class="close-btn" @click="closeAddModal">&times;</span>
          <h2>Add Product</h2>
          <form @submit.prevent="addProduct">
            <!-- Form fields for product details -->
            <input v-model="productForm.prodName" type="text" placeholder="Product Name" required />
            <input v-model="productForm.Category" type="text" placeholder="Description" required />
            <input v-model="productForm.prodURL" type="text" placeholder="Image URL" required />
            <input v-model="productForm.amount" type="text" placeholder="Product Price" required />
            <input v-model="productForm.quantity" type="text" placeholder="Product Quantity" required />
            <button type="submit" class="btn bg-danger text-white">Add</button>
          </form>
        </div>
      </div>
      <!-- Modal for updating a product -->
      <div v-if="isUpdateModalOpen" class="modal">
        <div class="modal-content">
          <span class="close-btn" @click="closeUpdateModal">&times;</span>
          <h2>Update Product</h2>
          <form @submit.prevent="updateProduct">
            <!-- Form fields for product details -->
            <input v-model="productForm.prodName" type="text" placeholder="Product Name" required />
            <input v-model="productForm.Category" type="text" placeholder="Description" required />
            <input v-model="productForm.prodURL" type="text" placeholder="Image URL" required />
            <input v-model="productForm.amount" type="text" placeholder="Product Price" required />
            <input v-model="productForm.quantity" type="text" placeholder="Product Quantity" required />
            <button type="submit" class="btn">Update</button>
          </form>
        </div>
      </div>
      <!-- Modal for viewing a product -->
      <div v-if="isViewModalOpen" class="modal">
        <div class="modal-content">
          <span class="close-btn" @click="closeViewModal">&times;</span>
          <h2>View Product</h2>
          <div class="view-product-details">
            <p><strong>Name:</strong> {{ selectedProduct.prodName }}</p>
            <p><strong>Description:</strong> {{ selectedProduct.Category }}</p>
            <p><strong>Price:</strong> {{ selectedProduct.amount }}</p>
            <p><strong>Quantity:</strong> {{ selectedProduct.quantity }}</p>
            <img :src="selectedProduct.prodURL" alt="product image" class="view-product-image"/>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, reactive, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';
  const store = useStore();
  const products = computed(() => store.state.products);
  const isAddModalOpen = ref(false);
  const isUpdateModalOpen = ref(false);
  const isViewModalOpen = ref(false);
  const productForm = reactive({ prodName: '', Category: '', prodURL: '', amount: '', quantity: '', prodID: null });
  const selectedProduct = reactive({ prodName: '', Category: '', prodURL: '', amount: '', quantity: '', prodID: null });
  function openAddProductModal() {
    isAddModalOpen.value = true;
  }
  function openUpdateProductModal(product) {
    Object.assign(productForm, product);
    isUpdateModalOpen.value = true;
  }
  function closeAddModal() {
    isAddModalOpen.value = false;
  }
  function closeUpdateModal() {
    isUpdateModalOpen.value = false;
  }
  function closeViewModal() {
    isViewModalOpen.value = false;
  }
  function addProduct() {
    store.dispatch('addAProduct', productForm).then(() => {
      closeAddModal();
    });
  }
  function updateProduct() {
    store.dispatch('updateProduct', productForm).then(() => {
      closeUpdateModal();
    });
  }
  function viewProduct(product) {
    Object.assign(selectedProduct, product);
    isViewModalOpen.value = true;
  }
  function deleteProduct(id) {
    store.dispatch('deleteProduct', id);
  }
  onMounted(() => store.dispatch('fetchProducts'));
  </script>
  <style scoped>
.view-product-details {
  padding: 10px;
}

.view-product-image {
  width: 210px;
  height: 210px;
  object-fit: cover;
  margin-top: 10px;
}

  .admin-container {
    padding: 20px;
    background-color: #222;
    color: #fff;
  }

  .add-btn {
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 8rem;
  }

  .admin-table {
    width: 100%;
    border-collapse: collapse;
  }

  .admin-table th, .admin-table td {
    border: 2px solid #ddd;
    padding: 8px;
  }

  .product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }

   .action-btn {
    background-color: black;
    color: red;
    border: 1px solid #fffff;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 10rem;
  } 

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: #333;
    padding: 20px;
    border-radius: 5px;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 20px;
    color: white;
  }
  </style>