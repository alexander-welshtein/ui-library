import Component from "./Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class HorizontalLayout extends Component {

}

export const renderHorizontalLayout = (config: ComponentConfig): Config => {
    const style = {}

    style["flex"] = 1

    PropertyComposer.width(style, config)
    PropertyComposer.height(style, config)
    PropertyComposer.gravity(style, config)
    PropertyComposer.margin(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Left)
    PropertyComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "horizontal-layout",
        style
    }
}
