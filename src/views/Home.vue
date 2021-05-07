<template>
  <div class="home">
    <div class="container shadow-lg p-3 mb-5 bg-white rounded-3 col-md-6">
      <div class="row">
        <div class="col">
          <h2 class="text-center p-2">Olá, bem vindo ao cadastrador!</h2>
          <h4 class="text-center p-2">Um jeito simples de cadastrar seus dados e enviar uma foto de avatar</h4>
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
