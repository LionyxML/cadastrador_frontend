import axios from 'axios';
import router from '../router/';

const state = {
  token: localStorage.getItem('token') || '',
  usuario: {},
  status: '',
  error: ''
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
  usuario: state => state.usuario,
  error: state => state.error

};

const actions = {
  // Login
  async login({
    commit
  }, usuario) {
    commit('auth_request');
      try {
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
  } catch (err) {
    commit('auth_error', err);
  }
},

  // Registro (Cadastro) do usuário
  async register({
    commit
  }, userData){
    try{
      commit('register_request');
      let res = await axios.post('http://localhost:5000/api/users/register', userData);
      if(res.data.success !==  undefined) {
        commit('register_success');
      }
      return res;
    } catch(err) {
        commit('register_error', err)
    }
  },

  // Pega o perfil do usuário
  async getProfile({ commit }){
    commit('profile_request');
    let res = await axios.get('http://localhost:5000/api/users/profile');
    commit('user_profile', res.data.user);
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
  },
    resetState({commit}) {
    commit('RESET_STATE');
  },
};

const mutations = {
  RESET_STATE(state) {
    state.error = null;
  },
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state, token, usuario){
      state.token = token
      state.usuario = usuario
      state.status = 'success'
      state.error = null
    },
  register_request(state){
    state.status = 'loading'
  },
  register_success(state){
    state.status = 'success'
    state.error = null

  },
  logout(state){
    state.status = ''
    state.token = ''
    state.usuario = ''
  },
  profile_request(state){
    state.status = 'loading'
  },
  user_profile(state, usuario){
    state.usuario = usuario
  },
  register_error(state, err){
    state.error = err.response.data.msg
  },
  auth_error(state, err){
    state.error = err.response.data.msg
  },
};


export default {
  state,
  actions,
  mutations,
  getters
};
