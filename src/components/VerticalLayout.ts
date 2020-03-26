import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config)
    StyleComposer.verticalAlign(style, config)

    return {
        class: "vertical-layout",
        style
    }
}
