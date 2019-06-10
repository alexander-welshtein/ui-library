import Component from "../core/Component"
import ComponentConfig from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Field extends Component {

}

export const renderField = (config: ComponentConfig): Config => ({
    class: "field",
    style: {
        margin: PropertyComposer.applyMargin(config),
        display: PropertyComposer.applyHidden(config, "block")
    },
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
