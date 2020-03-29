import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import Renderer from "../render/Renderer"
import ComponentRenderer from "../core/ComponentRenderer"
import ElementUtil from "../render/ElementUtil"

export class List<T> extends Component {

    private onItemClickListener: (event: MouseEvent) => void


    addItems(...items: T[]) {
        for (const item of items) {
            this.element.appendChild(Renderer.render(ComponentRenderer.render(this.config.adapter(item))))
        }
    }

    removeItem(index: number) {
        ElementUtil.deleteChild(this.element, index)
    }

    clear() {
        ElementUtil.clear(this.element)
    }

    setItems(items: T[]) {
        this.clear()
        this.addItems(...items)
    }

    // noinspection DuplicatedCode
    setOnItemClick(listener: (index: number) => void) {
        if (this.onItemClickListener) {
            this.element.removeEventListener("click", this.onItemClickListener)
        }

        this.element.addEventListener("click", this.onItemClickListener = (event: MouseEvent) => {
            const itemElement = ElementUtil.getChildWithParentBy(event.target as HTMLElement, this.element)
            const itemIndex = Array.from(this.element.children).indexOf(itemElement)

            listener(itemIndex)
        })
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