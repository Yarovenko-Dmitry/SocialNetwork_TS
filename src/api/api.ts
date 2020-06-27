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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
      {withCredentials: true}
    )
      .then(response => response.data);
  },
  follow(userId: number) {
    return  instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}` )

  },
  unFollow(userId: number) {
    return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  }
}