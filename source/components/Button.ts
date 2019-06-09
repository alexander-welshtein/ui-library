import ComponentConfig from "../core/ComponentConfig"
import Component from "../core/Component"

export default class Button extends Component {
    private element: HTMLElement
    private readonly config: ComponentConfig

    constructor(element: HTMLElement, config: ComponentConfig) {
        super()
        this.element = element
        this.config = config
    }

    render(): ComponentConfig {
        return this.config
    }
}
