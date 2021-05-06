 <template lang="html">
   <div class="container mt-3">
     <div class="row">
       <div class="card w-75 mx-auto p-0">
         <div class="card-header text-white bg-primary">
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
                >
             </div>
             <input type="submit" class="btn btn-primary mt-2" value="Acessar">
             <br>
             <router-link to="/register" class="card-link">Ainda não se cadastrou?</router-link>
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
       usuario: "",
       senha: ""
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
           console.log(err)
         });
     }
   }
 };

 </script>

 <style lang="css" scoped>

 </style>
