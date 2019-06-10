import Component from "../core/Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => ({
    class: "vertical-layout",
    style: {
        width: PropertyComposer.width(config),
        height: PropertyComposer.height(config),
        flex: PropertyComposer.gravity(config),
        padding: PropertyComposer.padding(config),
        margin: PropertyComposer.margin(config),
        justifyContent: PropertyComposer.horizontalAlign(config, Align.Left),
        alignItems: PropertyComposer.verticalAlign(config, Align.Left)
    }
})
