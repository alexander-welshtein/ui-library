import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import {ComponentType} from "../core/ComponentType"
import Renderer from "../render/Renderer"
import ComponentRenderer from "../core/ComponentRenderer"
import ElementUtil from "../render/ElementUtil"

export class Table<T> extends Component {

    private content: HTMLElement

    private onItemClickListener: (event: MouseEvent) => void


    setElement(value: HTMLElement) {
        super.element = value

        this.content = this.element.children[1] as HTMLElement
    }

    addItems(...items: T[]) {
        for (const item of items) {
            this.content.appendChild(Renderer.render(ComponentRenderer.render({
                type: ComponentType.HorizontalLayout,
                children: this.config.rowAdapter(item)
            })))
        }
    }

    removeItem(index: number) {
        ElementUtil.deleteChild(this.content, index)
    }

    clear() {
        ElementUtil.clear(this.content)
    }

    setItems(items: T[]) {
        this.clear()
        this.addItems(...items)
    }

    // noinspection DuplicatedCode
    setOnItemClick(listener: (index: number) => void) {
        if (this.onItemClickListener) {
            this.content.removeEventListener("click", this.onItemClickListener)
        }

        this.content.addEventListener("click", this.onItemClickListener = (event: MouseEvent) => {
            const itemElement = ElementUtil.getChildWithParentBy(event.target as HTMLElement, this.content)
            const itemIndex = Array.from(this.content.children).indexOf(itemElement)

            listener(itemIndex)
        })
    }
}

export const renderTable = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "table",
        style,
        onRender: config.hook ? element => {
            config.hook.setElement(element)
            config.hook.setConfig(config)
        } : undefined,
        children: [
            {
                type: ComponentType.HorizontalLayout,
                class: "header",
                children: config.header
            },
            {
                type: ComponentType.VerticalLayout,
                class: "content",
                children: config.items.map(item => config.rowAdapter(item)).map((children): ComponentConfig => ({
                    type: ComponentType.HorizontalLayout,
                    children
                }))
            }
        ].map(config => ComponentRenderer.render(config))
    }
}