import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import {Button} from "./Button"

export class Label extends Component {

}

export const renderLabel = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config, Align.Left)
    StyleComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "label",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Button(element, config))
        } : undefined,
        children: [
            {
                tag: "p",
                text: config.value
            }
        ]
    }
}
