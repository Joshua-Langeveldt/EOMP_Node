<template>
    <div>
        <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Films</h1>
        <CardComp/>
        </div>
        <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Series</h1>
        <CardComp/>
        </div>
        <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Merch</h1>
        <CardComp/>
        </div>
    </div>
</template>
<script>
import CardComp from '@/components/CardComp.vue'


export default {
    components:{
        CardComp
    },
    methods:{
        getProducts(){
            return this.$store.state.data
        }
    },
    computed:{
        fetchData(){
            return this.$store.dispatch('fetchData')
        }
    },
    mounted() {
        this.fetchData()
    },
}
</script>
<style>
   
</style>


<!-- second attempt -->
<!-- <template>
    <div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Films</h1>
        <CardComp :products="animeFilms" />
      </div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Series</h1>
        <CardComp :products="animeSeries" />
      </div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Merch</h1>
        <CardComp :products="animeMerch" />
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from '@/components/CardComp.vue'
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    components: {
      CardComp
    },
    computed: {
      ...mapGetters(['getData']),
      animeFilms() {
        return this.getData.filter(item => item.category === 'Films')
      },
      animeSeries() {
        return this.getData.filter(item => item.category === 'Series')
      },
      animeMerch() {
        return this.getData.filter(item => item.category === 'Merch')
      }
    },
    methods: {
      ...mapActions(['fetchData'])
    },
    mounted() {
      this.fetchData()
    }
  }
  </script>
  
  <style>
  </style> -->

  <!-- <template>
    <div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Films</h1>
        <CardComp :products="animeFilms" />
      </div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Series</h1>
        <CardComp :products="animeSeries" />
      </div>
      <div class="container pt-5" style="margin-top: 1%; margin-bottom: 5%;">
        <h1 style="margin-top: 1%; color: white; font-weight: bolder; margin-bottom: 2%;">Anime Merch</h1>
        <CardComp :products="animeMerch" />
      </div>
    </div>
  </template>
  
  <script>
  import CardComp from '@/components/CardComp.vue'
  import { mapGetters, mapActions } from 'vuex'
  
  export default {
    components: {
      CardComp
    },
    computed: {
      ...mapGetters(['getData']),
      animeFilms() {
        return Array.isArray(this.getData) ? this.getData.filter(item => item.category === 'Films') : [];
      },
      animeSeries() {
        return Array.isArray(this.getData) ? this.getData.filter(item => item.category === 'Series') : [];
      },
      animeMerch() {
        return Array.isArray(this.getData) ? this.getData.filter(item => item.category === 'Merch') : [];
      }
    },
    methods: {
      ...mapActions(['fetchData'])
    },
    mounted() {
      this.fetchData();
    }
  }
  </script>
  
  <style>
  /* Your styles */
  </style>
   -->
  