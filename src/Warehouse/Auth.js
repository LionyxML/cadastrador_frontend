import axios from 'axios';
import router from '../router/';

const state = {
  token: localStorage.getItem('token') || '',
  usuario: {},
  status: ''
};

const getters = {
  // isLoggedIn: function(state) {   Isso substituído pelo debaixo
  //   if(state.token != '') {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  isLoggedIn: state => !!state.token,
  authState: state => state.status,
  usuario: state => state.usuario
};

const actions = {
  // Login
  async login({
    commit
  }, usuario) {
    commit('auth_request');
    let res = await axios.post('http://localhost:5000/api/users/login', usuario)
    if(res.data.success){
      const token = res.data.token;
      const usuario = res.data.usuario;

      // Salva o token no storage local
      localStorage.setItem('token', token);

      // Seta os padrões do axios
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth_success', token, usuario);

    }
    return res;
  },

  // Registro (Cadastro) do usuário
  async register({
    commit
  }, userData){
    commit('register_request');
    let res = await axios.post('http://localhost:5000/api/users/register', userData);
    if(res.data.success !==  undefined) {
      commit('register_success');
    }
    return res;
  },

  // Logout do usuário
  async logout({
    commit
  }) {
    await localStorage.removeItem('token');
    commit('logout');
    delete axios.defaults.headers.common['Authorization'];
    router.push('/login')
    return
  }

};

const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, usuario){
      state.token = token
      state.usuario = usuario
      state.status = 'success'
    },
  register_request(state){
    state.status = 'loading'
  },
  register_success(state){
    state.status = 'success'
  },
  logout(state){
    state.status = ''
    state.token = ''
    state.usuario = ''
  }
};


export default {
  state,
  actions,
  mutations,
  getters
};
