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
    padding?: string | Padding
    margin?: string | Margin
    verticalAlign?: Align
    horizontalAlign?: Align
    hidden?: boolean
    gravity?: number
    children?: ComponentConfig[]
    onRender?: ((component: Component) => void)

    // Field
    labelWidth?: string

    // List
    items?: any[]
    adapter?: (item: any) => ComponentConfig
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
    Left = "flex-start",
    Right = "flex-end",
    Center = "center"
}
