import Component from "../components/Component"
import {ComponentType} from "./ComponentType"

export interface ComponentConfig {
    type?: ComponentType
    id?: string
    class?: string
    value?: string
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
    all?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
}

interface Margin {
    all?: string
    top?: string
    bottom?: string
    left?: string
    right?: string
}

export enum Align {
    Left = "flex-start",
    Right = "flex-end",
    Center = "center"
}
