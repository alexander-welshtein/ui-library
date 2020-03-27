import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Field extends Component {

}

export const renderField = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    const children: Config[] = []

    if (config.value) {
        const labelStyle: any = {}

        if (config.labelWidth) {
            labelStyle.width = config.labelWidth
        }

        children.push({
            tag: "p",
            text: config.value,
            style: labelStyle
        })
    }

    children.push({
        tag: "input",
        attrs: {
            type: "text"
        }
    })

    return {
        class: "field",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Field(element, config))
        } : undefined,
        children
    }
}
