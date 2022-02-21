import Button from './Button.vue'
import { mount } from '@vue/test-utils'

describe("Button Test", () => {
    it ('Button should show the text', () => {
        const content = "Custom Button Element";
        const wrapper = mount(Button, {
            slots: {
                default: content
            }
        })
        expect(wrapper.text()).toBe(content);
    })

    it ('Use size property to control button size', () => {
        const size = 'small';
        const wrapper = mount(Button, {
            props: { size}
        })
        expect(wrapper.classes()).toContain('el-button--small');
    })
})