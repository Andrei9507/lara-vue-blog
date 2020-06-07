<template>
        <nav class="navbar navbar-expand-sm navbar-dark bg-info mb-2">
                <div class="container">
                        <a href="/" class="navbar-brand">
                                Larticles
                        </a>
                </div>

                <ul class="navbar-nav ml-auto">

                      <template v-if="!auth">
                                <li >
                                        <router-link to="/login" class="nav-link">Login</router-link>
                                </li >
                                <li >
                                        <router-link to="/register" class="nav-link">Register</router-link>
                                </li>
                      </template>
                      <template v-else>
                        
                                <li >
                                        <router-link to="/articles" class="nav-link">Articles   </router-link>
                                </li>
                               
                                <li >
                                        <a  @click.prevent="onLogout" class="nav-link ">Logout</a>
                                </li>
                        </template>
                       
                </ul>
                <!-- <div  v-if="!auth" class="justify-content-right">
                         <a href="/login" class="navbar-brand">Login</a>
                </div>

                 <div  v-if="auth" class="justify-content-right">
                         <a @click="onLogout" class="btn navbar-brand">Logout</a>
                </div> -->

        </nav>
</template>
<script>
export default {
        computed: {
                auth() {
                        return this.$store.getters.isLoggedIn;
                }
              
        },
        methods: {
                onLogout() {
                        this.$store.dispatch('logout');
                        this.$router.push('/login');
                }
        }
}
</script>