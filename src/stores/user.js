import { loginAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore(
  "user",
  () => {
    //定义管理用户数据的state
    const userInfo = ref({});
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.data.result;
    };

    return {
      userInfo,
      getUserInfo,
    };
  },
  {
    persist: true,
  }
);
