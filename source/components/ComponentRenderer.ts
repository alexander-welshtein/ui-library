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
                padding: this.applyPadding(config)
            }
        }
    }

    private static renderColumnLayout(config: ComponentConfig): Config {
        return {
            class: "columnLayout",
            style: {
                width: this.applyWidth(config),
                height: this.applyHeight(config),
                padding: this.applyPadding(config)
            }
        }
    }

    private static renderButton(config: ComponentConfig): Config {
        return {
            class: "button",
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

    private static applyTextAlign(config: ComponentConfig): string {
        return config.textAlign ? config.textAlign : "auto"
    }
}

