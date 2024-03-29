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
        class: `button ${config.disabled ? "disabled-button" : (config.primary ? "primary-button" : "default-button")}`,
        style,
        onRender: config.hook ? element => {
            config.hook.setElement(element)
            config.hook.setConfig(config)
        } : undefined,
        children: [
            {
                tag: "p",
                text: config.label
            }
        ]
    }
}
