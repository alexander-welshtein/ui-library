import ComponentConfig from "../core/ComponentConfig"

export default abstract class Component {
    private readonly _element: HTMLElement
    private readonly _config: ComponentConfig

    constructor(element: HTMLElement, config: ComponentConfig) {
        this._element = element
        this._config = config
    }

    get config(): ComponentConfig {
        return this._config
    }

    get element(): HTMLElement {
        return this._element
    }
}
