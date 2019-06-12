import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => {
    const style = {}

    PropertyComposer.basic(style, config)
    PropertyComposer.horizontalAlign(style, config, Align.Left)
    PropertyComposer.verticalAlign(style, config, Align.Right)

    return {
        class: "vertical-layout",
        style
    }
}
