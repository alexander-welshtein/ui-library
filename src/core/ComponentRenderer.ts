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
import {renderIconButton} from "../components/IconButton"

const renderRoutes = new Map<ComponentType, (config: ComponentConfig) => Config>()
    .set(ComponentType.Content, renderContent)
    .set(ComponentType.VerticalLayout, config => renderLayout(config, false))
    .set(ComponentType.HorizontalLayout, config => renderLayout(config, true))
    .set(ComponentType.Button, renderButton)
    .set(ComponentType.Field, renderField)
    .set(ComponentType.Spacer, renderSpacer)
    .set(ComponentType.Label, renderLabel)
    .set(ComponentType.Image, renderImage)
    .set(ComponentType.Icon, renderIcon)
    .set(ComponentType.VerticalList, config => renderList(config, false))
    .set(ComponentType.HorizontalList, config => renderList(config, true))
    .set(ComponentType.Table, renderTable)
    .set(ComponentType.Window, renderWindow)
    .set(ComponentType.Checkbox, renderCheckbox)
    .set(ComponentType.IconButton, renderIconButton)

export default class ComponentRenderer {
    static render(componentConfig: ComponentConfig): Config {
        const config = renderRoutes.get(componentConfig.type)(componentConfig)

        if (componentConfig.id) {
            config.id = componentConfig.id
        }

        if (componentConfig.class) {
            config.class += ` ${componentConfig.class}`
        }

        return config
    }
}

