import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Field extends Component {

    private input: HTMLInputElement


    setElement(element: HTMLElement) {
        super.setElement(element)

        this.input = this.element.children[1] as HTMLInputElement
    }


    setValue(value: string) {
        this.input.value = value
    }

    getValue() {
        return this.input.value
    }

    clear() {
        this.input.value = ""
    }

    disable() {
        this.element.classList.add("field-disabled")
    }
}

export const renderField = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    const children: Config[] = []

    if (config.label) {
        const labelStyle: any = {}

        if (config.labelWidth) {
            labelStyle.width = config.labelWidth
        }

        children.push({
            tag: "p",
            text: config.label,
            style: labelStyle
        })
    }

    const attrs: any = {
        type: "text"
    }

    if (config.placeholder) {
        attrs.placeholder = config.placeholder
    }

    children.push({
        tag: "input",
        attrs
    })

    return {
        class: `field ${config.disabled ? "field-disabled" : ""}`,
        style,
        children,
        onRender: element => {
            if (config.value) {
                (element.children[1] as HTMLInputElement).value = config.value
            }

            if (config.hook) {
                config.hook.setElement(element)
                config.hook.setConfig(config)
            }
        }
    }
}
