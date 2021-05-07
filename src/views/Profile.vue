<template lang="html">
  <div class="contariner col-md-6 mx-auto">
    <div class="card mx-auto p-0 mt-3" v-if="usuario">
      <div class="card-header text-white bg-success">
        <h4>Perfil</h4>
      </div>
      <ul class="list-group">
        <li class="list-group-item"><div class="esquerda"><strong>Email:</strong></div><div class="direita">{{ usuario.email }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Usuário:</strong></div><div class="direita"> {{ usuario.usuario }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Nome:</strong></div><div class="direita"> {{ usuario.nome }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Sobrenome:</strong></div><div class="direita"> {{ usuario.sobrenome }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Nascimento:</strong></div><div class="direita"> {{ usuario.nascimento }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Endereço:</strong></div><div class="direita"> {{ usuario.endereco }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Telefone:</strong></div><div class="direita"> {{ usuario.telefone }}</div></li>
        <li class="list-group-item"><div class="esquerda"><strong>Avatar:</strong></div><div class="direita"><img class="img-thumbnail" :key="keyImg" :src="'http://localhost:5000/uploads/' + usuario.avatar + '?=' + keyImg" width="150" height="150"></div></li>
        <li class="list-group-item">
          <div class="p-3">
            <p> Suas informações estão "seguras", mas ainda <strong>não</strong> é possível alterá-las.</p>
            <p> Enquanto o dev implementa essa função, que tal carregar/atualizar seu avatar?</p>
          </div>
          <div>
            <form @submit.prevent="sendFile" enctype="multipart/form-data">
              <div v-if="message"
                :class="`alert ${ error ? 'alert-danger' : 'alert-primary'}`">
                {{ message }}
              </div>
              <div class="input-group">
                  <input ref="file" type="file" class="form-control" @change="selectFile"/>
                  <button type="submit" class="btn btn-success">Enviar</button>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";
export default {
  computed: mapGetters(["usuario"]),

  methods: {
    ...mapActions(["getProfile"]),

    forceRerender() {
     this.keyImg += 1;
   },

    selectFile(){
      const file = this.$refs.file.files[0];
      const tipos = ['image/jpeg', 'image/png', 'image/gif'];
      const TAMANHO_MAX = 2000000;
      const grande = file.size > TAMANHO_MAX;

      if (tipos.includes(file.type) && !grande){
        this.file = file;
        this.error = false;
        this.message = '';
      } else {
        this.error = true;
        this.message = grande ? `O arquivo é muito grande. Tamanho máximo é de ${TAMANHO_MAX/1000000}Mb` : "Somente imagens jpg/png/gif são permitidas";
      }
    },

    async sendFile(){
      try {
        const formData = new FormData();
        let nome = this.$store.getters.usuario.usuario;
        const ext = this.file.type.split("/").pop();
        nome = nome + '.' + ext;
        const sendFile = new File([this.file], nome, {type: this.file.type});
        formData.append('file', sendFile);

        await axios.post('http://localhost:5000/api/users/upload', formData);
        this.message = 'Arquivo enviado com sucesso!';
        this.file = '';
        this.error = false;
        this.keyImg = this.keyImg + 1;
        this.forceRerender();
      } catch(err) {
        this.message = "Algo ocorreu de errado :(";
        this.error = true;
      }
    }
  },

  created() {
    this.getProfile();
  },

  data () {
    return {
      file: "",
      message: "",
      keyImg: 0
    }
  }
};
</script>

<style lang="css" scoped>
.esquerda {
  float: left;
}
.direita {
  float: right;
}
</style>
