<template>
        <div >
                <div class="btn-wrapper">
                        <router-link to="/articles/new" class="btn btn-primary btn-sm">New Article</router-link>
                </div>

                <div class="container-wrapper">

                       
                        <template v-if="!articles.length">
                                <p>No articles </p>
                        </template>
                        <template v-else>
                        <div class="card text-center item m-1 col-md-3" v-for="(article,i) in articles" :key="i" >
                                <div class="card-body">
                                        <h5 class="card-title"> {{article.title}}</h5>
                                        <p class="card-text">{{article.user.name}}</p>
                                        <p class="card-text">{{article.description}}</p>
                                        <router-link  tag="button" class="btn btn-warning btn-sm" :to="`/articles/${article.id}`">View</router-link>
                                        <router-link v-if="article.user.email == userEmail" tag="button" class="btn btn-info btn-sm" :to="`/articles/edit/${article.id}`">Edit</router-link>
                                </div>
                        </div>
                        </template>

                </div>
 
        </div>
</template>
<script>
export default {
        name:'list',
        data() {
                return {
                        userEmail: this.$store.getters.currentUser.user.email
                };
        },
        mounted() {
                if(this.articles.length){
                        console.log("im not appended request")
                        return;
                }
                this.$store.dispatch('getArticles');
                
        },
        computed: {
                articles() {
                        // console.log(this.$store.getters.articles)
                        return this.$store.getters.articles;
                }
        },
        
}
</script>
<style scoped>
        .btn-wrapper {
                text-align: right;
                margin-bottom: 20px;
        }

        .container-wrapper{
                flex-wrap: wrap;
                justify-content: space-around;
                align-content: stretch;
                display:inline-flex;
        }


</style>