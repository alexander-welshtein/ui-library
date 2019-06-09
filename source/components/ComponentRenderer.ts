import ComponentConfig from "./ComponentConfig"
import Config from "../render/Config"

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        let config: Config

        switch (componentConfig.type) {
            case "linearLayout":
                config = this.renderLinearLayout(componentConfig)
                break
            case "button":
                config = this.renderButton(componentConfig)
                break
        }

        if (componentConfig.children) {
            for (const child of componentConfig.children) {
                if (!config.children) {
                    config.children = []
                }

                config.children.push(this.render(child))
            }
        }

        return config
    }

    // noinspection JSUnusedLocalSymbols
    static renderLinearLayout(config: ComponentConfig): Config {
        return {
            class: "linear-layout"
        }
    }

    static renderButton(config: ComponentConfig): Config {
        return {
            class: "button",
            children: [
                {
                    tag: "p",
                    class: "label",
                    text: config.label
                }
            ]
        }
    }
}

