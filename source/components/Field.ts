import Component from "./Component"
import ComponentConfig from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Field extends Component {

}

export const renderField = (config: ComponentConfig): Config => {
    const style = {}

    PropertyComposer.main(style)

    PropertyComposer.width(style, config)
    PropertyComposer.height(style, config)
    PropertyComposer.fit(style, config)
    PropertyComposer.margin(style, config)
    PropertyComposer.hidden(style, config, "block")

    return {
        class: "field",
        style,
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
    }
}
