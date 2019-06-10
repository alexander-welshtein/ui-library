import Component from "../core/Component"
import ComponentConfig from "../core/ComponentConfig"
import Config from "../render/Config"
import PropertyComposer from "../core/PropertyComposer"

export class Spacer extends Component {

}

export const renderSpacer = (config: ComponentConfig): Config => ({
    class: "spacer",
    style: {
        width: PropertyComposer.applyWidth(config),
        height: PropertyComposer.applyHeight(config),
        flex: PropertyComposer.applyGravity(config)
    }
})
