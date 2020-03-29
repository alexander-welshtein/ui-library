import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class Image extends Component {

}

export const renderImage = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "image",
        style,
        onRender: config.hook ? element => {
            config.hook.setElement(element)
            config.hook.setConfig(config)
        } : undefined
    }
}
