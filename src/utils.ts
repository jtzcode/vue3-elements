import { getCurrentInstance, ComponentInternalInstance } from 'vue';

export function useGlobalConfig() {
    const instance: ComponentInternalInstance | null = getCurrentInstance();

    if (!instance) {
        console.log("Cannot get instance of component");
        return ;
    } 
    return instance.appContext.config.globalProperties.$CUSTOMELEMENT || {};
}