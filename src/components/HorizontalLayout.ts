import Component from "./Component"
import {Align, ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class HorizontalLayout extends Component {

}

export const renderHorizontalLayout = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config, Align.Left)
    StyleComposer.verticalAlign(style, config, Align.Left)

    return {
        class: "horizontal-layout",
        style
    }
}
