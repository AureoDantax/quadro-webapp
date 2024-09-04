import axios from 'axios';

// Usamos AXIOS pra poupar tempo e não ter que configurar o fetch manualmente (mas é uma opção)
// Então usamos axios com a URL base do nosso backend ai não precisamos lidar com JSON.stringify e repetir a URL toda hora
const api = axios.create({
  baseURL: 'http://localhost:5000',
  // Substitua pela URL (endpoint) do seu backend
});

export const enviarDadosCadastro = (formData: any) => {
  return api.post('/cadastro', formData);
  // o /cadastro é o endpoint que o backend espera receber os dados do formulário
  // do mesmo jeito que o /login é o endpoint que o backend espera receber os dados do formulário de login
  // ou seja, é a URL que o backend vai ouvir pra receber os dados
  // e o formData é o objeto que contém os dados do formulário

  // ah mas então o backend vai receber os dados do formulário e fazer o que?
  // vai salvar no banco de dados, fazer validações, enviar um email de confirmação, essas coisas ai

  // ah mas o que o backend vai devolver pra gente?
  // vai devolver uma mensagem de sucesso ou erro, um token de autenticação, um cookie, etc
  // então o endpoint é o que interliga o frontend com o backend
};

export const verificarDadosLogin = (formData: any) => {
  return api.post('/api/auth', formData);
  // o /login é o endpoint que o backend espera receber os dados do formulário de login
  // e o formData é o objeto que contém os dados do formulário de login
  // o backend vai verificar as credenciais e devolver uma resposta de sucesso ou erro
};