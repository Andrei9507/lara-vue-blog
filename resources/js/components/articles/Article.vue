<template>
        <div v-if="article">
                <div class="form-group">
                <label for="title">Title</label>

                <div>{{article.title}}</div>
                </div>
        
        
                <div class="form-group">
                        <label for="description">Description</label>
                        <div>{{article.description}}</div>
                </div>

              
                <router-link to="/articles" class="btn btn-danger">Back</router-link>
        </div>
</template>
<script>
export default {
        
        mounted() {
                
                this.$store.dispatch('getArticle', this.$route.params.id);
        },
         computed: {
                article() {
                        return this.$store.getters.article;
                }
        }
        
}
</script>