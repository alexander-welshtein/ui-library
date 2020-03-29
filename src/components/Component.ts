import {ComponentConfig} from "../core/ComponentConfig"

export default abstract class Component {
    private _element: HTMLElement
    private _config: ComponentConfig


    get config(): ComponentConfig {
        return this._config
    }

    set config(config: ComponentConfig) {
        this._config = config
    }

    get element(): HTMLElement {
        return this._element
    }

    set element(value: HTMLElement) {
        this._element = value
    }


    on(event: string, listener: (event: Event) => void): (event: Event) => void {
        this._element.addEventListener(event, listener)
        return listener
    }


    deleteEventListener(event: string, listener: (event: Event) => void) {
        this._element.removeEventListener(event, listener)
    }


    addClass(name: string) {
        this._element.classList.add(name)
    }

    deleteClass(name: string) {
        this._element.classList.remove(name)
    }
}
