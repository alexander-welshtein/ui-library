import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Label extends Component {
    setValue(value: string) {
        this.config.value = value
        this.element.innerText = value
    }

    getValue() {
        return this.config.value
    }
}

export const renderLabel = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config, Align.Left)
    StyleComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "label",
        style,
        text: config.value,
        onRender: config.onRender ? element => {
            config.onRender(new Label(element, config))
        } : undefined
    }
}
