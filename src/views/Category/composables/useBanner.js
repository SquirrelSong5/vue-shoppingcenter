import { ref, onMounted } from 'vue'
import { getBannerAPI } from '@/apis/home'
let isBannerLoaded = false // 标志变量，避免重复加载

export function useBanner() {
    const bannerList = ref([])

    const getBanner = async () => {
        if (isBannerLoaded) return // 如果已经加载过，则直接返回
        const res = await getBannerAPI(
            { distributionSite: '2' }
        )
        bannerList.value = res.data.result
        isBannerLoaded = true // 设置为已加载
    }

    onMounted(() => getBanner())
    return {
        bannerList
    }
}
