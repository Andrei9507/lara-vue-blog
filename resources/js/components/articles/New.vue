<template>
                
        <form>
                <div class="form-group">
                <label for="title">Title</label>

                <input 
                        type="text" 
                        class="form-control" 
                        placeholder="title"
                        v-model="title"
                        >
                </div>
        
        
                <div class="form-group">
                        <label for="description">Description</label>
                        <textarea 
                                class="form-control" 
                                rows="3"
                                v-model="description"
                                ></textarea>
                </div>

                 <button
                            class="btn btn-primary"
                            @click.prevent="onSubmit()">Submit!
                </button>
                <router-link to="/articles" class="btn btn-danger">Cancel</router-link>
        </form>
       
</template>

<script>
export default {
        name: 'new',
        data() {
                return {
                        
                        description: '',
                        title: ''
                       
                }
        },
        methods: {
              onSubmit() {
                      const article = {
                              title: this.title,
                              description: this.description
                      }
                      console.log(article);
                      this.$store.dispatch('storeArticle', article)
              }
        }
}
</script>