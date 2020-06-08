<template>
                
        <form>
                <div class="form-group">
                <label for="title">Title</label>

                <input 
                        type="text" 
                        class="form-control" 
                        id="title"
                        placeholder="title"
                        @blur="$v.title.$touch()"
                        v-model="title"
                        >
                        <p v-if="!$v.title.minLen">Please insert minim 5 character</p>
                        <p v-if="!$v.title.required">This field must not be empty </p>
                </div>
        
        
                <div class="form-group">
                        <label for="description">Description</label>
                        <textarea 
                                class="form-control" 
                                rows="3"
                                id="description"
                                v-model="description"
                                placeholder="Description"
                                ></textarea>
                                <p v-if="!$v.description.required">This field must not be empty </p>
                                <p v-if="!$v.description.minLen">Please insert more text</p>
                </div>

                 <button
                            class="btn btn-primary"
                            :disabled="$v.$invalid"
                            @click.prevent="onSubmit()">Submit!
                </button>
                <router-link to="/articles" class="btn btn-danger">Cancel</router-link>
        </form>
       
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators';

export default {
        name: 'new',
        data() {
                return {
                        
                        description: '',
                        title: '',
                }
        },
        validations: {
                title: {
                        required,
                        minLen: minLength(5)
                },
                description: {
                        required,
                        minLen: minLength(50)
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
                      this.$router.push('/articles');
              }
        }
}
</script>