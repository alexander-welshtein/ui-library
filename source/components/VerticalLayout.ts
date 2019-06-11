import Component from "./Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => {
    const style = {}

    style["flex"] = 1

    PropertyComposer.width(style, config)
    PropertyComposer.height(style, config)
    PropertyComposer.gravity(style, config)
    PropertyComposer.padding(style, config)
    PropertyComposer.margin(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Left)
    PropertyComposer.verticalAlign(style, config, Align.Right)

    return {
        class: "vertical-layout",
        style
    }
}
