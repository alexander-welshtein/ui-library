import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class HorizontalLayout extends Component {

}

export const renderHorizontalLayout = (config: ComponentConfig): Config => {
    const style = {}

    PropertyComposer.basic(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Left)
    PropertyComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "horizontal-layout",
        style
    }
}
