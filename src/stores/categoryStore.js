import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '../apis/layout'

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([]) // 定义一个响应式变量 categoryList 用于存储分类列表

    const getCategory = async () => { // 定义一个异步函数 getCategory 用于获取分类数据
      try {
        const res = await getCategoryAPI(); // 调用 API 获取分类数据
        if (res && res.data.result) {
          categoryList.value = res.data.result; // 如果 API 返回的数据格式正确，则将结果赋值给 categoryList
          console.log('categoryList.value: ', categoryList.value);
        } else {
          console.error('API 返回的数据格式不正确', res); // 如果 API 返回的数据格式不正确，则输出错误信息
        }
      } catch (error) {
        console.error('获取分类数据失败', error); // 捕获并输出获取分类数据过程中发生的错误
      }
    };
  return { 
    categoryList,
    getCategory
   }
})
