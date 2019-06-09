import ComponentConfig from "./ComponentConfig"
import Config from "../render/Config"
import {ComponentType} from "./ComponentType"

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        let config: Config

        switch (componentConfig.type) {
            case ComponentType.rowLayout:
                config = this.renderRowLayout(componentConfig)
                break
            case ComponentType.columnLayout:
                config = this.renderColumnLayout(componentConfig)
                break
            case ComponentType.button:
                config = this.renderButton(componentConfig)
                break
            case ComponentType.field:
                config = this.renderField(componentConfig)
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

    private static renderRowLayout(config: ComponentConfig): Config {
        return {
            class: "row-layout",
            style: {
                width: this.applyWidth(config),
                height: this.applyHeight(config),
                padding: this.applyPadding(config),
                margin: this.applyMargin(config)
            }
        }
    }

    private static renderColumnLayout(config: ComponentConfig): Config {
        return {
            class: "columnLayout",
            style: {
                width: this.applyWidth(config),
                height: this.applyHeight(config),
                padding: this.applyPadding(config),
                margin: this.applyMargin(config)
            }
        }
    }

    private static renderButton(config: ComponentConfig): Config {
        return {
            class: "button",
            style: {
                margin: this.applyMargin(config),
                display: this.applyHidden(config)
            },
            children: [
                {
                    tag: "p",
                    class: "label",
                    text: config.label,
                    style: {
                        textAlign: this.applyTextAlign(config)
                    }
                }
            ]
        }
    }

    private static renderField(config: ComponentConfig): Config {
        return {
            class: "field",
            style: {
                margin: this.applyMargin(config),
                display: this.applyHidden(config)
            },
            children: [
                {
                    tag: "p",
                    text: "Label"
                },
                {
                    tag: "input",
                    attrs: {
                        type: "text"
                    }
                }
            ]
        }
    }

    private static applyWidth(config: ComponentConfig): string {
        return config.width ? config.width : "auto"
    }

    private static applyHeight(config: ComponentConfig): string {
        return config.height ? config.height : "auto"
    }

    private static applyPadding(config: ComponentConfig): string {
        if (config.padding) {
            const top = config.padding.top ? config.padding.top : "0"
            const bottom = config.padding.bottom ? config.padding.bottom : "0"
            const left = config.padding.left ? config.padding.left : "0"
            const right = config.padding.right ? config.padding.right : "0"

            return top + " " + right + " " + bottom + " " + left
        }
        return "0 0 0 0"
    }

    private static applyMargin(config: ComponentConfig): string {
        if (config.margin) {
            const top = config.margin.top ? config.margin.top : "0"
            const bottom = config.margin.bottom ? config.margin.bottom : "0"
            const left = config.margin.left ? config.margin.left : "0"
            const right = config.margin.right ? config.margin.right : "0"

            return top + " " + right + " " + bottom + " " + left
        }
        return "0 0 0 0"
    }

    private static applyTextAlign(config: ComponentConfig): string {
        return config.textAlign ? config.textAlign : "center"
    }

    private static applyHidden(config: ComponentConfig): string {
        return config.hidden ? "none" : "block"
    }
}

