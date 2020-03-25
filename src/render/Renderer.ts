import Config from "./Config";

export default class Renderer {
    static render(config: Config): HTMLElement {
        if (!config.tag || config.tag == "") {
            config.tag = "div"
        }

        const element = document.createElement(config.tag)

        for (const property in config) {
            switch (property) {
                case "class":
                    element.className = config[property]
                    break
                case "text":
                    element.innerText = config[property]
                    break
                case "html":
                    element.innerHTML = config[property]
                    break
                case "attrs":
                    for (const attr in config[property]) {
                        element.setAttribute(attr, config[property][attr])
                    }
                    break
                case "style":
                    for (const style in config[property]) {
                        if (style in element.style) {
                            element.style[style] = config[property][style]
                        } else {
                            console.error(`Undefined style property: ${style}`)
                        }
                    }
                    break
                case "children":
                    for (const childConfig of config[property]) {
                        element.appendChild(this.render(childConfig))
                    }
                    break
                default:
                    if (property in element) {
                        element[property] = config[property]
                    }
            }
        }

        if (config.onRender) {
            config.onRender(element, config)
        }

        return element
    }
}
