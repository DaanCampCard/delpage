<template>
<div id="blogs">
    <input class="form-control" type="text" v-model="searchQuery" placeholder="Search" />
    <div id="articles" v-for="item in resultQuery" :key="item.id">
        <h2>{{ item.title }}</h2>
        <article>{{ item.body }}</article>
    </div>   
</div>

</template>

<script>
export default {
    name: 'blogs',
    data() {
        return{
            content: {},
            searchQuery: ''
        }
    },
    methods: {
        async addContent(){   
            try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const objeto = await data.json()
            console.log(objeto)
            this.content = objeto
            } catch (error) {
            console.log(error)
            }
        }
    },
    created(){
        this.addContent()
    },
    computed: {
        resultQuery(){
        if(this.searchQuery){
            return this.content.filter((item)=>{
                return this.searchQuery.toLowerCase().split(' ').every(v => item.title.toLowerCase().includes(v))
        })
          }else{
            return this.content;
        }
    }
  }
 

}
</script>

<style>
#blogs{
    max-width: 1200px;
    margin: 0 auto;
}
#articles {
    color: #42b983;
    padding: 20px;
    padding-top: 5px;
    margin: 20px;
    box-sizing: border-box;
    background: #2c3e50;
}

</style>