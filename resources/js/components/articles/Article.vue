<template>
        <div v-if="article">
                <div class="form-group">
                <label for="title">Title</label>

                <div>{{article.title}}</div>
                </div>
                <p> 

                        <span>                        
                                <svg class="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                                Dorel
                        </span>
                        
                </p>
        
                <div class="form-group">
                        <label for="description">Description</label>
                        <div>{{article.description}}</div>
                </div>

              
                <router-link to="/articles" class="btn btn-danger">Back</router-link>
        </div>
</template>
<script>
export default {
        
        created() {
                
                this.$store.dispatch('getArticle', this.$route.params.id);
        },
         computed: {
                article() {
                        return this.$store.getters.article;
                }
        }
        
}
</script>