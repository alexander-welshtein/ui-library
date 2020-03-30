import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class IconButton extends Component {

}

export const renderIconButton = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "icon-button",
        style,
        children: [
            {
                class: "icon",
                html: config.value,
                style: {
                    width: config.iconWidth,
                    height: config.iconHeight
                }
            },
            ...(config.label ? [{
                tag: "p",
                text: config.label
            }] : [])
        ]
    }
}