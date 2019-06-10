import Component from "../core/Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Button extends Component {
}

export const renderButton = (config: ComponentConfig): Config => ({
    class: "button",
    style: {
        margin: PropertyComposer.applyMargin(config),
        display: PropertyComposer.applyHidden(config, "flex"),
        flex: PropertyComposer.applyGravity(config),
        justifyContent: PropertyComposer.applyHorizontalAlign(config, Align.Center),
        alignItems: PropertyComposer.applyVerticalAlign(config, Align.Center)
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
