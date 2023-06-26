import api from './api';

export type IbodyCreateProject = {
    name: string, objective?: string, imageURL?: string
}

async function createProject(body: IbodyCreateProject, token: string | undefined) {
  if (!token) throw Error("No token")
  const response = await api.put('/project', body,{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function getAll(token: string | undefined) {
  if (!token) throw Error("No token")
  const response = await api.get('/project', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

async function deleteById(id: number,token: string | undefined) {
  if (!token) throw Error("No token")
  const response = await api.delete(`/project/${id}}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

//
const projectApi = {
  createProject,
  getAll,
  deleteById,
}

export default projectApi