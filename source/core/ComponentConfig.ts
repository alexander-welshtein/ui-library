import {ComponentType} from "./ComponentType"
import Component from "../components/Component"

export default interface ComponentConfig {
    type?: ComponentType
    label?: string
    width?: string
    height?: string
    fit?: boolean
    padding?: Padding
    margin?: Margin
    verticalAlign?: Align
    horizontalAlign?: Align
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

export enum Align {
    Left = "left",
    Right = "right",
    Center = "center"
}
