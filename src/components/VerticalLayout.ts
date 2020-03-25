import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config, Align.Left)
    StyleComposer.verticalAlign(style, config, Align.Right)

    return {
        class: "vertical-layout",
        style
    }
}
