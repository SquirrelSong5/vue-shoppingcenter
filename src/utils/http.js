import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user";
import router from "@/router";

// 创建axios实例
const httpInstance = axios.create({
  baseURL: "https://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// 添加请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 1. 从pinia获取token数据
    const userStore = useUserStore();
    // 2. 按照后端的要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
httpInstance.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    //对响应错误做点什么;
    if (error.response.status === 401) {
      const userStore = useUserStore();
      userStore.clearUserInfo();
      router.push("/login");
    }
    ElMessage({
      type: "warning",
      message: error.response.data.message,
    });
    return Promise.reject(error);
  }
);

export default httpInstance;
