import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '7670157b-55fb-46c4-91b5-ea5772613da8'
  }
});


export const usersAPI = {
  getUsers(currentPage: number = 1, pageSize:number = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`
    )
      .then(response => response.data);
  },

  follow(userId: string) {
    return instance.post(`follow/${userId}`)

  },
  unFollow(userId: string) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId: string) {
    console.warn('Obsolute method. Please use profileAPI object')
    return profileAPI.getProfile(userId);
  }
}

export const profileAPI = {
  getProfile(userId: string) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId: string) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile: string) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});
  },
  logout() {
    return instance.delete(`auth/login`);
  }
}