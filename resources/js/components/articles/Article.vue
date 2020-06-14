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
                <button @click="addCommentOpen()" class="btn btn-info"  v-if="!addCommentArticle">Add Comment </button>
               
                <new-comment v-if="addCommentArticle"></new-comment>
                <hr>
                
                <h2>Comments section</h2>
                <div class="card mt-4" v-for="comment in article.comments" :key="comment.id">
                     
                       
                        <div class="card-body">
                                <button type="button"  v-if="comment.user.email == userEmail" @click="onDeleteComment(comment.id)" style="color:red" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                </button>
                                <blockquote class="blockquote mb-0">
                                <p>  {{comment.comment}}</p>
                                <footer class="blockquote-footer">added by 
                                        <template v-if="comment.user.email == userEmail">
                                                <cite title="Source Title"> you</cite>
                                        </template>
                                        <template v-else>
                                                <cite title="Source Title"> {{comment.user.name}}</cite>
                                        </template>
                                </footer>
                                </blockquote>
                        </div>
                        
                </div>
                <router-link to="/articles" class="btn btn-danger mt-4">Back</router-link>
        </div>
</template>
<script>
import NewComment from '../comments/New.vue';

export default {
        data() {
                return {
                        userEmail: this.$store.getters.currentUser.user.email
                };
        },
        created() {
                // if(this.articles.length) {
                //         this.article = this.articles.find((article) => articles.id == this.$route.params.id);
                // } else {
                        // repair this to dont make one more
                        this.$store.dispatch('getArticle', this.$route.params.id);
                      
                // console.log('this'+this.$store.getters.articles);
                // }
        },
         computed: {
                article() {
                        return this.$store.getters.article;
                },
                // articles() {
                //         return this.$store.getters.articles;
                // },
                // comments(){
                //         return this.$store.getters.article.comments;
                // },
                addCommentArticle()
                {
                        return this.$store.getters.addCommentArticle;
                }
              
        },

        methods: {
                addCommentOpen() {

                        this.$store.commit('openAddCommentArticle');
                },

                onDeleteComment(id){
                        this.$store.dispatch('deleteComment', id);
                }
        },
        components: {
                NewComment
        }
        
        
}
</script>
<style scoped>
        .padding-card {
                padding-top: 1rem;
        }
</style>