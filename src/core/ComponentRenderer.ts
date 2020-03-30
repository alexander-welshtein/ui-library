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
import {renderLayout} from "../components/Layout"
import {renderTable} from "../components/Table"
import {renderWindow} from "../components/Window"
import {renderCheckbox} from "../components/Checkbox"

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        const config = this.toConfig(componentConfig)

        if (componentConfig.id) {
            config.id = componentConfig.id
        }

        if (componentConfig.class) {
            config.class += ` ${componentConfig.class}`
        }

        return config
    }

    private static toConfig(config: ComponentConfig): Config {
        switch (config.type) {
            case ComponentType.VerticalLayout:
                return renderLayout(config, false)
            case ComponentType.HorizontalLayout:
                return renderLayout(config, true)
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
            case ComponentType.Table:
                return renderTable(config)
            case ComponentType.Window:
                return renderWindow(config)
            case ComponentType.Checkbox:
                return renderCheckbox(config)
            default:
                return renderContent(config)
        }
    }
}

