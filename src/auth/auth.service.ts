import axios from "axios";
import { User } from "../../types";
const API_URL = "http://localhost:3000/";

class AuthService {
  login(user: User) {
    return axios
      .post(API_URL + "signin", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user: User) {
    return axios.post(API_URL + "register", {
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      password: user.password,
    });
  }

  edit(user: User) {
    return axios
      .post(API_URL + "user/edit", {
        userId: user.userId,
        username: user.username,
        email: user.email,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;
      });
  }
}

export default new AuthService();
