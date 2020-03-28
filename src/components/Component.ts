import {ComponentConfig} from "../core/ComponentConfig"

export default abstract class Component {
    private readonly _element: HTMLElement
    private readonly _config: ComponentConfig

    constructor(element: HTMLElement, config: ComponentConfig) {
        this._element = element
        this._config = config
    }

    protected get config(): ComponentConfig {
        return this._config
    }

    protected get element(): HTMLElement {
        return this._element
    }


    on(event: string, listener: (event: Event) => void): (event: Event) => void {
        this.element.addEventListener(event, listener)
        return listener
    }


    deleteEventListener(event: string, listener: (event: Event) => void) {
        this.element.removeEventListener(event, listener)
    }


    addClass(name: string) {
        this.element.classList.add(name)
    }

    deleteClass(name: string) {
        this.element.classList.remove(name)
    }
}
