 <template lang="html">
   <div class="container mt-3 col-md-6">
     <div class="row">
       <div class="card w-75 mx-auto p-0">
         <div class="card-header text-white bg-success">
           <h4>Entrar</h4>
         </div>
         <div class="card-body">
           <form @submit.prevent="loginUser">
             <div class="form-group">
               <label for="usuario">Usuário:</label>
               <input
                id="usuario"
                type="text"
                placeholder="usuario"
                name="usuario"
                v-model="usuario"
                class="form-control"
                required
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
                class="form-control"
                required
                >
             </div>
             <div class="d-grid gap-2 col-6 mx-auto">
               <input type="submit" class="btn btn-success mt-2" value="Acessar">
               <router-link to="/register" class="card-link text-center">Sem cadastro?</router-link>
             </div>
             <div v-if="error"
               class="mt-2 alert alert-danger text-center">
               {{ error }}
             </div>
             <div v-if="this.data"
               class="mt-2 alert alert-success text-center">
               {{ this.data }}
             </div>
           </form>
         </div>
       </div>
     </div>
   </div>
 </template>

 <script>
 import { mapGetters } from "vuex";
 import { mapActions } from "vuex";
 export default {
   data() {
     return {
       usuario: "",
       senha: "",
       data: this.$route.params.data,
     }
   },
   methods: {
     ...mapActions(['login']),
     loginUser(){
       // console.log(this.usuario, this.senha)
       let usuario = {
         usuario: this.usuario,
         senha: this.senha
       };

       this.login(usuario)
       .then(res => {
         if(res.data.success){
           this.$router.push("/profile");
         }
         }).catch(err => {

         });
     }
   },
   created() {

   },
   beforeDestroy() {
     this.$store.dispatch('resetState');
   },
   computed : {
     ...mapGetters(["error"])
   },
 };

 </script>

 <style lang="css" scoped>

 </style>
