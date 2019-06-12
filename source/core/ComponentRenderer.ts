import {ComponentConfig} from "./ComponentConfig"
import Config from "../render/Config"
import {ComponentType} from "./ComponentType"
import {renderButton} from "../components/Button"
import {renderField} from "../components/Field"
import {renderHorizontalLayout} from "../components/HorizontalLayout"
import {renderVerticalLayout} from "../components/VerticalLayout"
import {renderSpacer} from "../components/Spacer"
import {renderLabel} from "../components/Label"
import {renderImage} from "../components/Image";

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        const config = this.toConfig(componentConfig)

        if (componentConfig.id) {
            config.id = componentConfig.id
        }

        if (componentConfig.class) {
            config.class += componentConfig.class
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

    private static toConfig(config: ComponentConfig): Config {
        switch (config.type) {
            case ComponentType.VerticalLayout:
                return renderVerticalLayout(config)
            case ComponentType.HorizontalLayout:
                return renderHorizontalLayout(config)
            case ComponentType.Button:
                return renderButton(config)
            case ComponentType.Field:
                return renderField(config)
            case ComponentType.Spacer:
                return renderSpacer(config)
            case ComponentType.Label:
                return renderLabel(config)
            case ComponentType.Image:
                return renderImage(config)
        }
    }
}

