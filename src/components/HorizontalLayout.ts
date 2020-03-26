import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class HorizontalLayout extends Component {

}

export const renderHorizontalLayout = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)
    StyleComposer.horizontalAlign(style, config)
    StyleComposer.verticalAlign(style, config)

    return {
        class: "horizontal-layout",
        style
    }
}
