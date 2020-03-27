import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class LinearLayout extends Component {

}

export const renderLinearLayout = (config: ComponentConfig, horizontal: boolean): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config)
    StyleComposer.verticalAlign(style, config)

    return {
        class: horizontal ? "horizontal-layout" : "vertical-layout",
        style
    }
}
