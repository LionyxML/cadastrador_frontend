<template lang="html">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img id="img_logo" src="../assets/images/logo.svg" class="img-thumbnail bg-dark mx-3" alt="logo" width="40" height="40">Cadastrador</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">Entrar
            </router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/register" class="nav-link">Cadastrar
            </router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <router-link to="/profile" class="nav-link">Perfil
            </router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <a href="/logout" class="nav-link" @click.prevent="logoutUser">Sair
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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

<style>
</style>
