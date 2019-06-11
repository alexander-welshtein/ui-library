import Component from "./Component"
import ComponentConfig from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Spacer extends Component {

}

export const renderSpacer = (config: ComponentConfig): Config => {
    const style = {}

    style["flex"] = 1

    PropertyComposer.width(style, config)
    PropertyComposer.height(style, config)
    PropertyComposer.gravity(style, config)

    return {
        class: "spacer",
        style
    }
}
