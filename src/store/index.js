import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    data:[]
  },
  getters: {
    getData: state => state.data
  },
  mutations: {
    setData(state, payload) {
      state.data = payload
    }
  },
  actions: {
    async fetchData({ commit }) {
      try {
        const response = await axios.get('https://eomp-node.onrender.com/'); 
                commit('setData', response.data); 
              } catch (error) {
                console.error('Error fetching data:', error);
      }
    }
  },
  modules: {
  }
})


// 2nd attemp

// import { createStore } from 'vuex'
// import axios from 'axios'

// export default createStore({
//   state: {
//     data: [] 
//   },
//   getters: {
//     getData: (state) => {
//       return state.data; 
//     }
//   },
//   mutations: {
//     setData(state, payload) {
//       state.data = payload; 
//     }
//   },
//   actions: {
//     async fetchData({ commit }) {
//       try {
//         const response = await axios.get('https://eomp-node.onrender.com/');
//         commit('setData', response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//   },
//   modules: {}
// });

// third attempt

// import { createStore } from 'vuex'
// import axios from 'axios'

// export default createStore({
//   state: {
//     data: [] 
//   },
//   getters: {
//     getData: (state) => state.data // This will return an array
//   },
//   mutations: {
//     setData(state, payload) {
//       state.data = Array.isArray(payload) ? payload : []; // Ensure the payload is an array
//     }
//   },
//   actions: {
//     async fetchData({ commit }) {
//       try {
//         const response = await axios.get('https://eomp-node.onrender.com/');
//         commit('setData', response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         commit('setData', []); // Set to an empty array if there's an error
//       }
//     }
//   },
//   modules: {}
// });








