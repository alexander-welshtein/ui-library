import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"

export class List extends Component {

}

export const renderList = (config: ComponentConfig, horizontal: boolean): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    config.children = config.items.map(item => config.adapter(item))

    return {
        class: horizontal ? "horizontal-list" : "vertical-list",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new List(element, config))
        } : undefined
    }
}