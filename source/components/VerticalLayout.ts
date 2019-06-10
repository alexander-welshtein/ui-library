import Component from "../core/Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class VerticalLayout extends Component {

}

export const renderVerticalLayout = (config: ComponentConfig): Config => ({
    class: "vertical-layout",
    style: {
        width: PropertyComposer.applyWidth(config),
        height: PropertyComposer.applyHeight(config),
        padding: PropertyComposer.applyPadding(config),
        margin: PropertyComposer.applyMargin(config),
        justifyContent: PropertyComposer.applyHorizontalAlign(config, Align.Left),
        alignItems: PropertyComposer.applyVerticalAlign(config, Align.Left)
    }
})
