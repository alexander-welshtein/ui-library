import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import Renderer from "../render/Renderer"
import ComponentRenderer from "../core/ComponentRenderer"
import ElementUtil from "../render/ElementUtil"

export class List extends Component {
    addItems(...items: any[]) {
        for (const item of items) {
            this.config.items.push(item)
            this.element.appendChild(Renderer.render(ComponentRenderer.render(this.config.adapter(item))))
        }
    }

    removeItem(index: number) {
        this.config.items.splice(index, 1)
        ElementUtil.deleteChild(this.element, index)
    }

    clear() {
        ElementUtil.clear(this.element)
    }

    set(items: any[]) {
        this.clear()
        this.addItems(...items)
    }
}

export const renderList = (config: ComponentConfig, horizontal: boolean): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: horizontal ? "horizontal-list" : "vertical-list",
        style,
        onRender: config.hook ? element => {
            config.hook.element = element
            config.hook.config = config
        } : undefined,
        children: config.items.map(item => config.adapter(item)).map(config => ComponentRenderer.render(config))
    }
}