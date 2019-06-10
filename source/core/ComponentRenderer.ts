import ComponentConfig from "./ComponentConfig"
import Config from "../render/Config"
import {ComponentType} from "./ComponentType"
import {renderButton} from "../components/Button"
import {renderField} from "../components/Field"
import {renderHorizontalLayout} from "../components/HorizontalLayout"
import {renderVerticalLayout} from "../components/VerticalLayout"

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        let config: Config

        switch (componentConfig.type) {
            case ComponentType.rowLayout:
                config = renderVerticalLayout(componentConfig)
                break
            case ComponentType.columnLayout:
                config = renderHorizontalLayout(componentConfig)
                break
            case ComponentType.button:
                config = renderButton(componentConfig)
                break
            case ComponentType.field:
                config = renderField(componentConfig)
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
}

