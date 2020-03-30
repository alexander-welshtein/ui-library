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

    return {
        class: `field${config.disabled ? " field-disabled" : ""}`,
        style,
        children: [
            ...(config.label ? [
                {
                    tag: "p",
                    text: config.label,
                    style: {
                        ...(config.labelWidth ? {
                            width: config.labelWidth
                        } : {})
                    }
                }
            ] : []),
            {
                tag: "input",
                attrs: {
                    ...(config.placeholder ? {
                        placeholder: config.placeholder
                    } : {})
                }
            }
        ],
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
