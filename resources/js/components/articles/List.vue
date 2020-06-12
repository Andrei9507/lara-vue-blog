<template>
        <div>
                <div class="btn-wrapper">
                        <router-link to="/articles/new" class="btn btn-primary btn-sm">New Article</router-link>
                </div>
                <table class="table">
                        <thead>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Actions</th>
                        </thead>
                        <tbody>
                                <template v-if="!articles.length">
                                        <tr>
                                                <td colspan="3" class="text-center"> No articles</td>
                                        </tr>
                                </template>
                                <template v-else>
                                        <tr v-for="(article,i) in articles" :key="i">
                                                <td>
                                                        {{article.title}}
                                                </td>
                                                <td>
                                                        {{article.description}}
                                                </td>
                                                <td>
                                                        <router-link :to="`/articles/${article.id}`">View</router-link>
                                                        <router-link :to="`/articles/edit/${article.id}`">Edit</router-link>
                                                </td>
                                        </tr>
                                </template>
                        </tbody>
                </table>

        </div>
</template>
<script>
export default {
        name:'list',
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
        }
}
</script>
<style scoped>
        .btn-wrapper {
                text-align: right;
                margin-bottom: 20px;
        }


</style>