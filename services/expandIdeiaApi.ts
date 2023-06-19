import api from './api';

type Iposition = {
    top: number,
    left: number,
}
type Ibody = {
    ideia: string, objective: string, position: Iposition
}

export async function expandIdeia(body: Ibody, token: string | undefined) {
  if (!token) throw Error("No token")
  const response = await api.post('/ideas', body,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}
//
