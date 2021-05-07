<template>
  <div class="home">
    <div class="container p-3 mb-5 rounded-3 col-md-6">
      <div class="row">
        <div class="col">
          <div class="jumbotron">
            <h1 class="text-center p-2">O cadastrador chegou!</h1>
            <h4 class="text-center p-2">Aqui você se cadastra!</h4>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto" v-if="!isLoggedIn">
            <router-link to="/login" class="btn btn-success">Entrar</router-link>
            <router-link to="/register" class="btn btn-success">Cadastrar</router-link>
          </div>
          <div class="d-grid gap-2 col-6 mx-auto" v-if="isLoggedIn">
            <router-link to="/profile" class="btn btn-success">Perfil</router-link>
            <a href="/logout" @click.prevent="logoutUser" class="btn btn-success">Sair</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
body {
  background: url(../assets/images/back.jpg) no-repeat center center fixed;
  background-color: #464646;
  background-size: cover;
}

.container {
  margin: 20px auto;
  padding: 20px;
  color: black;
}

.jumbotron {
   padding: 4rem 2rem;
   margin-bottom: 2rem;
   color: white;
   background-color: rgba(0, 0, 0, 0.5);
   border-radius: .3rem;
 }

</style>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Home',
  components: {
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  },
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      this.logout();
    }
  }
};
</script>
