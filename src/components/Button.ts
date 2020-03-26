import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Button extends Component {
}

export const renderButton = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config, Align.Center)
    StyleComposer.verticalAlign(style, config, Align.Center)

    return {
        class: "button",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Button(element, config))
        } : undefined,
        children: config.value ? [
            {
                tag: "p",
                text: config.value
            }
        ] : undefined
    }
}
