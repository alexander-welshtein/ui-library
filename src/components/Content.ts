import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Content extends Component {

}

export const renderContent = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "content",
        style,
        ...(config.value ? {
            html: config.value
        } : {})
    }
}
