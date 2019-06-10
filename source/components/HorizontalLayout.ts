import Component from "../core/Component"
import ComponentConfig, {Align} from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class HorizontalLayout extends Component {

}

export const renderHorizontalLayout = (config: ComponentConfig): Config => ({
    class: "horizontal-layout",
    style: {
        width: PropertyComposer.applyWidth(config),
        height: PropertyComposer.applyHeight(config),
        padding: PropertyComposer.applyPadding(config),
        margin: PropertyComposer.applyMargin(config),
        justifyContent: PropertyComposer.applyHorizontalAlign(config, Align.Left),
        alignItems: PropertyComposer.applyVerticalAlign(config, Align.Left)
    }
})
