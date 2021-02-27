<template>
  <div id="blog">
    <h2>Add a new Blog here</h2>
    <form>
        <label>Blog Title:</label>
        <input type="text" v-model="blog.title" required />
        <label>Blog Content</label>
        <textarea v-model="blog.content"></textarea>
        <div id="categories">
            <label>Tecnology</label> 
        <input type="checkbox" value="tecnology" v-model= "blog.categories"/>
            <label>Religion</label> 
        <input type="checkbox" value="religion" v-model= "blog.categories"/>
            <label>Health</label> 
        <input type="checkbox" value="health" v-model= "blog.categories"/>
            <label>Pets</label> 
        <input type="checkbox" value="pets" v-model= "blog.categories"/>
    </div>       
    </form>
    <div id="preview">         
        <h3>Preview Blog</h3>
        <p>Blog title:</p>
        <p id="title"></p>
        <p>Blog content:</p>
        <p id="content"></p>
        <p>Blog Categories:</p>
        <p id="categoriesShown"></p>
        <button @click="showPreview()">Preview</button>
    </div>
    <button @click="addBlog()">Add Blog</button>
    <div v-if="submited"> 
    <h3>Thanks for posting.</h3>
    </div>

  </div> 
</template>

<script>
export default {
    data(){
        return{
            blog: {
            title:"",
            content:"",
            categories:[]
            },
            submited: false
        }      
    },
    methods: {
        showPreview() {
         document.getElementById("title").innerHTML = this.blog.title;
         document.getElementById("content").innerHTML = this.blog.content;
         document.getElementById("categoriesShown").innerHTML = this.blog.categories;

        },
        async addBlog(){   
            try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            const objeto = await data.json()
            console.log(objeto)

            } catch (error) {
                console.log(error)
            }
            this.submited = true
        }
        
    }
}
</script>

<style>
#blog *{
    box-sizing: border-box;
}
#blog {
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
    overflow: auto;
    display: block;
}
h3{
    margin-top: 10px;
}
#categories input{
    display: inline-block;
    margin-right: 10px;
}
#categories label{
    display: inline-block;
    }


</style>