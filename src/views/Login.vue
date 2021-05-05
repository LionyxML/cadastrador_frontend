 <template lang="html">
   <div class="">
     <h2>Entrar</h2>
     <div class="row">
       <div class="card w-75 mx-auto p-0">
         <div class="card-header text-white bg-primary">
           <h4>Entrar</h4>
         </div>
         <div class="card-body">
           <form>
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
             <button class="btn btn-primary mt-2 ">Login</button>
             <br>
             <router-link to="/register" class="card-link">Ainda não se registrou?</router-link>
           </form>
         </div>
       </div>
     </div>
   </div>
 </template>

 <script>
 export default {
   data() {
     return {
       usuario: "",
       senha: ""
     }
   }
 }
 </script>

 <style lang="css" scoped>

 </style>
