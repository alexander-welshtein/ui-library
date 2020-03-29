import Component from "./Component"
import Config from "../render/Config"
import {ComponentConfig} from "../core/ComponentConfig"
import StyleComposer from "../core/StyleComposer"
import ComponentRenderer from "../core/ComponentRenderer"

export class Window extends Component {
    show() {
        this.element.style.display = "inline"
    }

    hide() {
        this.element.style.display = "none"
    }
}

export const renderWindow = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return config.modal ? {
        class: "modal-window",
        children: [
            {
                class: "content",
                style,
                children: config.children.map(config => ComponentRenderer.render(config))
            }
        ],
        onRender: element => {
            element.children[0].addEventListener("click", event => {
                event.stopPropagation()
            })

            if (config.hook) {
                config.hook.setElement(element)
                config.hook.setConfig(config)
            }
        }
    } : {
        class: "window",
        style,
        children: config.children.map(config => ComponentRenderer.render(config)),
        onRender: config.hook ? element => {
            config.hook.setElement(element)
            config.hook.setConfig(config)
        } : undefined
    }
}