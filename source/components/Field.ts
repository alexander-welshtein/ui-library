import Component from "../core/Component"
import ComponentConfig from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Field extends Component {

}

export const renderField = (config: ComponentConfig): Config => ({
    class: "field",
    style: {
        margin: PropertyComposer.margin(config),
        display: PropertyComposer.hidden(config, "block")
    },
    onRender: config.onRender ? element => {
        config.onRender(new Field(element, config))
    } : undefined,
    children: [
        {
            tag: "p",
            text: "Label"
        },
        {
            tag: "input",
            attrs: {
                type: "text"
            }
        }
    ]
})
