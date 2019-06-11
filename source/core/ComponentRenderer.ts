import ComponentConfig from "./ComponentConfig"
import Config from "../render/Config"
import {ComponentType} from "./ComponentType"
import {renderButton} from "../components/Button"
import {renderField} from "../components/Field"
import {renderHorizontalLayout} from "../components/HorizontalLayout"
import {renderVerticalLayout} from "../components/VerticalLayout"
import {renderSpacer} from "../components/Spacer"
import {renderLabel} from "../components/Label"

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        const config = this.toConfig(componentConfig)

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
            case ComponentType.RowLayout:
                return renderVerticalLayout(config)
            case ComponentType.ColumnLayout:
                return renderHorizontalLayout(config)
            case ComponentType.Button:
                return renderButton(config)
            case ComponentType.Field:
                return renderField(config)
            case ComponentType.Spacer:
                return renderSpacer(config)
            case ComponentType.Label:
                return renderLabel(config)
        }
    }
}

