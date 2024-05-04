import AppString from "../config/AppString";
import AppRoutes from "../routes/AppRoutes";
import { Password, Token, UserName } from "../config/Constants";
import { toast } from "react-toastify";

export class AuthRepo {
  static onLogin = async (values) => {
    const { username, password } = values;
    if (username === UserName && password === Password) {
      localStorage.setItem(AppString.Token, Token);
      toast.success("Đăng nhập thành công");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.location.href = AppRoutes.BASE;
    } else {
      console.log("Login fail");
      toast.error("Đăng nhập thất bại");
    }
  };
}
