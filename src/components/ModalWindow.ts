import Component from "./Component"
import Config from "../render/Config"
import {ComponentConfig} from "../core/ComponentConfig"
import StyleComposer from "../core/StyleComposer"
import ComponentRenderer from "../core/ComponentRenderer"

export class ModalWindow extends Component {

    show() {
        this.element.style.display = "inline"
    }

    hide() {
        this.element.style.display = "none"
    }
}

export const renderModalWindow = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "modal-window",
        children: [
            {
                class: "content",
                style,
                children: config.children.map(config => ComponentRenderer.render(config)),
                onRender: config.onRender ? element => {
                    config.onRender(new ModalWindow(element, config))
                } : undefined
            }
        ],
        onRender: element => {
            element.addEventListener("click", () => {
                element.style.display = "none"
            })

            element.children[0].addEventListener("click", event => {
                event.stopPropagation()
            })
        }
    }
}