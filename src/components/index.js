// 把components中的所组件都进行全局化注册
// 通过插件的方式


import ImagePreview from '@/views/Detail/components/ImagePreview.vue'
import Sku from '@/components/XtxSku/index.vue'
export const componentPlugin = {
    install (app) {
        // app.component('组件名字'，组件配置对象)
        app.component('ImagePreview', ImagePreview)
        app.component('Sku', Sku)
    }
}