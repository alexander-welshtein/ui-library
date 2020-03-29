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
    padding?: string | {
        top?: string
        bottom?: string
        left?: string
        right?: string
    }
    margin?: string | {
        top?: string
        bottom?: string
        left?: string
        right?: string
    }
    verticalAlign?: Align
    horizontalAlign?: Align
    hidden?: boolean
    gravity?: number
    children?: ComponentConfig[]
    hook?: Component

    // Field
    labelWidth?: string

    // List
    items?: any[]
    adapter?: (item: any) => ComponentConfig

    // Table
    header?: ComponentConfig[]
    rowAdapter?: (item: any) => ComponentConfig[]

    // Window
    modal?: boolean
}

export enum Align {
    Left = "flex-start",
    Right = "flex-end",
    Center = "center"
}
