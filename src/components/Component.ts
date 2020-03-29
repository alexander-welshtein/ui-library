import {ComponentConfig} from "../core/ComponentConfig"

export default abstract class Component {
    protected element: HTMLElement
    protected config: ComponentConfig


    getElement() {
        return this.element
    }

    setElement(element: HTMLElement) {
        this.element = element
    }

    getConfig() {
        return this.config
    }

    setConfig(config: ComponentConfig) {
        this.config = config
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
