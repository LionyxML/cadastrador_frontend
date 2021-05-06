<template lang="html">
  <div class="contariner mt-3">
    <div class="row">
      <div class="card w-75 mx-auto p-0">
        <div class="card-header text-white bg-primary">
          <h4>Cadastro</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerUser">
            <div class="form-group">
              <label for="usuario">Usuário:</label>
              <input
               id="usuario"
               type="text"
               placeholder="usuario"
               name="usuario"
               v-model="usuario"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="senha">Senha:</label>
              <input
               id="senha"
               type="password"
               placeholder="senha"
               name="senha"
               v-model="senha"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="senhaRepetida">Repita a senha:</label>
              <input
               id="senhaRepetida"
               type="password"
               placeholder="senha"
               name="senhaRepetida"
               v-model="senhaRepetida"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input
               id="email"
               type="email"
               placeholder="senha"
               name="email"
               v-model="email"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="nome">Nome:</label>
              <input
               id="nome"
               type="text"
               placeholder="nome"
               name="nome"
               v-model="nome"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="sobrenome">Sobrenome:</label>
              <input
               id="sobrenome"
               type="text"
               placeholder="sobrenome"
               name="sobrenome"
               v-model="sobrenome"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="telefone">Telefone:</label>
              <input
               id="telefone"
               type="tel"
               placeholder="(xx) xxxxx-xxxx"
               name="telefone"
               v-model="telefone"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="nascimento">Nascimento:</label>
              <input
               id="nascimento"
               type="date"
               placeholder="DD/MM/AAAA"
               name="nascimento"
               v-model="nascimento"
               class="form-control mb-2"
               >
            </div>
            <div class="form-group">
              <label for="nome">Endereço:</label>
              <input
               id="endereco"
               type="text"
               placeholder="Rua XXXX, Bairro, Cidade/Estado"
               name="nome"
               v-model="endereco"
               class="form-control mb-2"
               >
            </div>
            <input type="submit" class="btn btn-primary mt-2" value="Enviar">
            <br>
            <router-link to="/login" class="card-link mt-2">Já é cadastrado?</router-link>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      nome: "",
      sobrenome: "",
      nascimento: "",
      telefone: "",
      endereco: "",
      email: "",
      usuario: "",
      senha: "",
      senhaRepetida: ""
    };
  },
  methods: {
    ...mapActions(['register']),
    registerUser() {
        let usuario = {
          nome: this.nome,
          sobrenome: this.sobrenome,
          nascimento: this.nascimento,
          telefone: this.telefone,
          endereco: this.endereco,
          email: this.email,
          usuario: this.usuario,
          senha: this.senha,
          senhaRepetida: this.senhaRepetida
        };
        this.register(usuario).then(res => {
          if(res.data.success){
            this.$router.push('/login');
          }
        });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
