import Component from "../core/Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Button extends Component {
}

export const renderButton = (config: ComponentConfig): Config => ({
    class: "button",
    style: {
        margin: PropertyComposer.margin(config),
        display: PropertyComposer.hidden(config, "flex"),
        flex: PropertyComposer.gravity(config),
        justifyContent: PropertyComposer.horizontalAlign(config, Align.Center),
        alignItems: PropertyComposer.verticalAlign(config, Align.Center)
    },
    onRender: config.onRender ? element => {
        config.onRender(new Button(element, config))
    } : undefined,
    children: [
        {
            tag: "p",
            class: "label",
            text: config.label
        }
    ]
})
