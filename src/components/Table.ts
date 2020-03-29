import Component from "./Component"
import {ComponentConfig} from "../core/ComponentConfig"
import Config from "../render/Config"
import StyleComposer from "../core/StyleComposer"
import {ComponentType} from "../core/ComponentType"
import Renderer from "../render/Renderer"
import ComponentRenderer from "../core/ComponentRenderer"
import ElementUtil from "../render/ElementUtil"

export class Table extends Component {

    private readonly content: HTMLElement


    constructor() {
        super()

        this.content = this.element.children[1] as HTMLElement
    }


    addItems(...items: any[]) {
        for (const item of items) {
            this.config.items.push(item)
            this.content.appendChild(Renderer.render(ComponentRenderer.render({
                type: ComponentType.HorizontalLayout,
                children: this.config.rowAdapter(item)
            })))
        }
    }

    removeItem(index: number) {
        this.config.items.splice(index, 1)
        ElementUtil.deleteChild(this.content, index)
    }

    clear() {
        ElementUtil.clear(this.content)
    }

    set(items: any[]) {
        this.clear()
        this.addItems(...items)
    }
}

export const renderTable = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "table",
        style,
        onRender: config.hook ? element => {
            config.hook.element = element
            config.hook.config = config
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