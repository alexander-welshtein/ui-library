import {ComponentType} from "./ComponentType"
import Component from "./Component"

export default interface ComponentConfig {
    type?: ComponentType
    label?: string
    width?: string
    height?: string
    padding?: Padding
    margin?: Margin
    textAlign?: string
    hidden?: boolean
    gravity?: number
    children?: ComponentConfig[]
    onRender?: ((component: Component) => void)
}

interface Padding {
    top?: string
    bottom?: string
    left?: string
    right?: string
}

interface Margin {
    top?: string
    bottom?: string
    left?: string
    right?: string
}
