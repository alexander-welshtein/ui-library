import Component from "./Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Button extends Component {
}

export const renderButton = (config: ComponentConfig): Config => {
    const style = {}

    PropertyComposer.basic(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Center)
    PropertyComposer.verticalAlign(style, config, Align.Center)

    return {
        class: "button",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Button(element, config))
        } : undefined
    }
}
