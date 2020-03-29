import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import Renderer from "../render/Renderer"
import ComponentRenderer from "../core/ComponentRenderer"
import ElementUtil from "../render/ElementUtil"

export class List<T> extends Component {
    addItems(...items: T[]) {
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

    setItems(items: T[]) {
        this.clear()
        this.addItems(...items)
    }

    getItems(): T[] {
        return this.config.items
    }
}


export const renderList = (config: ComponentConfig, horizontal: boolean): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: `list ${horizontal ? "" : "vertical-list"}`,
        style,
        onRender: config.hook ? element => {
            config.hook.setElement(element)
            config.hook.setConfig(config)
        } : undefined,
        children: config.items.map(item => config.adapter(item)).map(config => ComponentRenderer.render(config))
    }
}