import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Icon extends Component {

}

export const renderIcon = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "icon",
        html: config.value,
        style
    }
}
