import { ref, onMounted, onUnmounted } from 'vue';

// 定义一个节流函数
function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// 定义一个函数来创建滚动监听的响应式数据
export function useScrollY() {
    // 创建一个响应式 ref 来存储 scrollY 的值
    const scrollY = ref(0);

    // 定义一个函数来更新 scrollY 的值
    function updateScrollY() {
        scrollY.value = window.scrollY || window.pageYOffset;
    }

    // 使用节流函数来限制滚动事件的调用频率
    const throttledUpdateScrollY = throttle(updateScrollY, 50);

    // 在组件挂载时添加滚动事件监听
    onMounted(() => {
        window.addEventListener('scroll', throttledUpdateScrollY);
        // 初始化时调用一次以确保立即更新值
        updateScrollY();
    });

    // 在组件卸载时移除滚动事件监听
    onUnmounted(() => {
        window.removeEventListener('scroll', throttledUpdateScrollY);
    });

    // 返回响应式数据
    return {
        scrollY
    };
}
