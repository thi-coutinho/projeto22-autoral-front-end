import api from './api';

export async function signIn(email:string, password:string) {
  const response = await api.post('/auth/sign-in', { email, password });
  return response.data;
}
//
