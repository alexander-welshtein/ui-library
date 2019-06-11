import Component from "./Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"
import {Button} from "./Button"

export class Label extends Component {

}

export const renderLabel = (config: ComponentConfig): Config => {
    const style = {}

    PropertyComposer.basic(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Left)
    PropertyComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "label",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Button(element, config))
        } : undefined,
        children: [
            {
                tag: "p",
                class: "value",
                text: config.value
            }
        ]
    }
}
