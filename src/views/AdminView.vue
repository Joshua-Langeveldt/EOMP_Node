
<template>
    <div class="admin-container">
        <h1 style="font-family: Playfair Display; font-size: 35px; color: white; font-weight: bold; margin-top: 5%;">ADMIN</h1>
        <button @click="openAddProductModal" class="add-btn btn btn-danger">Add new product</button>
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
              <button @click="deleteProduct(product.prodID)" class="action-btn delete-btn" style="background-color: none !important;"> <img src="https://caitlin-dalwai.github.io/imgs/Vector.png" alt=""></button>
              <button @click="openUpdateProductModal(product)" class="action-btn update-btn"><img src="https://caitlin-dalwai.github.io/imgs/Vector%20(1).png" alt=""> </button>
              <button @click="viewProduct(product)" class="action-btn view-btn text-white">View</button>
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
    background-color: black;
    color: #fff;
  }

  .add-btn {
    color: white;
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border-radius: 8rem;
    background-color: #900A0680;

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
    background-color: #900A06;
    padding: 2%;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 10rem;
    width: 20%;
    border: white solid 2px;
    transition: border-color 0.2s ease;
  } 

  .action-btn:hover {
  border-color: #900A0680; 
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
  .delete-btn {
  position: relative; 
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
}


.delete-btn::after {
  content: 'Delete'; 
  position: absolute; 
  left: 50%; 
  top: 100%; 
  transform: translateX(-50%); 
  padding: 5px 10px; 
  background-color: #900A06; 
  color: white; 
  font-size: 12px; 
  border-radius: 5px;
  opacity: 0; 
  white-space: nowrap; 
  transition: opacity 0.3s ease; 
  pointer-events: none; 
  z-index: 1; 
}

.delete-btn:hover::after {
  opacity: 1; 
}
/* Style the button */
.update-btn {
  position: relative; /* Position relative to control pseudo-element positioning */
  background-color: transparent; /* Ensure background is transparent */
  border: none; /* Remove border */
  cursor: pointer; /* Change cursor to pointer on hover */
}

/* Hide text by default */
.update-btn::after {
  content: 'Edit'; /* Text to display on hover */
  position: absolute; /* Positioning relative to the button */
  left: 50%; /* Center the text horizontally */
  top: 100%; /* Position below the button */
  transform: translateX(-50%); /* Adjust to perfectly center */
  padding: 5px 10px; /* Add padding around the text */
  background-color: #900A06; /* Background color for the hover text */
  color: white; /* Text color */
  font-size: 12px; /* Text size */
  border-radius: 5px; /* Rounded corners */
  opacity: 0; /* Start invisible */
  white-space: nowrap; /* Prevent text wrapping */
  transition: opacity 0.3s ease; /* Smooth transition for opacity */
  pointer-events: none; /* Prevent text from being interactive */
  z-index: 1; /* Ensure text is on top of other elements */
}

/* Show text on hover */
.update-btn:hover::after {
  opacity: 1; /* Make text visible */
}

@media (max-width: 300px) {
    .admin-container {
      padding: 10px;
    }

    .add-btn {
      padding: 5px;
      font-size: 12px;
    }

    .admin-table {
      font-size: 12px;
    }

    .admin-table th, .admin-table td {
      padding: 5px;
    }

    .product-image {
      width: 80px;
      height: 80px;
    }

    .action-btn {
      padding: 1%;
      margin: 0 2px;
      font-size: 10px;
    }

    .modal-content {
      padding: 10px;
      font-size: 12px;
    }

    .close-btn {
      font-size: 16px;
    }

    .view-product-details {
      padding: 5px;
    }

    .view-product-image {
      width: 150px;
      height: 150px;
    }
  }

  </style>