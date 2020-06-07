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
                                        <tr v-for="article in articles" :key="article.id">
                                                <td>
                                                        {{article.title}}
                                                </td>
                                                <td>
                                                        {{article.description}}
                                                </td>
                                                <td>
                                                        <router-link :to="`/articles/${article.id}`">View</router-link>
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
                this.$store.dispatch('getArticles');
        },
        computed: {
                articles() {
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