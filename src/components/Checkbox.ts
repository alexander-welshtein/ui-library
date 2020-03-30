import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Checkbox extends Component {

    private onChangeClickListener: () => void


    isChecked() {
        return this.config.checked
    }

    setChecked(checked: boolean) {
        this.config.checked = checked
        this.element.classList.toggle("checkbox-checked", checked)
    }

    setOnChange(listener: (checked: boolean) => void) {
        if (this.onChangeClickListener) {
            this.element.removeEventListener("click", this.onChangeClickListener)
        }

        this.onChangeClickListener = () => {
            listener(this.config.checked)
        }

        this.element.addEventListener("click", this.onChangeClickListener)
    }
}

export const renderCheckbox = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: `checkbox ${
            config.checked
                ? (config.disabled ? "checkbox-checked checkbox-checked-disabled" : "checkbox-checked")
                : (config.disabled ? "checkbox-disabled" : "")
        }`,
        style,
        children: [
            {
                class: "control",
                children: [
                    {
                        class: "shape",
                        children: [{}, {}]
                    }
                ]
            },
            ...(config.label ? [{
                tag: "p",
                text: config.label
            }] : [])
        ],
        onRender: element => {
            element.addEventListener("click", () => {
                element.classList.toggle("checkbox-checked", config.checked = !config.checked || false)
            })

            if (config.hook) {
                config.hook.setElement(element)
                config.hook.setConfig(config)
            }
        }
    }
}