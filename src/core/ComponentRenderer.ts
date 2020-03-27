import {ComponentConfig} from "./ComponentConfig"
import Config from "../render/Config"
import {ComponentType} from "./ComponentType"
import {renderButton} from "../components/Button"
import {renderField} from "../components/Field"
import {renderSpacer} from "../components/Spacer"
import {renderLabel} from "../components/Label"
import {renderImage} from "../components/Image"
import {renderContent} from "../components/Content"
import {renderIcon} from "../components/Icon"
import {renderList} from "../components/List"
import {renderLinearLayout} from "../components/LinearLayout"

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
                return renderLinearLayout(config, false)
            case ComponentType.HorizontalLayout:
                return renderLinearLayout(config, true)
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
            case ComponentType.Icon:
                return renderIcon(config)
            case ComponentType.VerticalList:
                return renderList(config, false)
            case ComponentType.HorizontalList:
                return renderList(config, true)
            default:
                return renderContent(config)
        }
    }
}

