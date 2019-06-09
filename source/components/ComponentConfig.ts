import {ComponentType} from "./ComponentType"

export default interface ComponentConfig {
    type?: ComponentType
    label?: string
    width?: string
    height?: string
    padding?: Padding
    margin?: Margin
    textAlign?: string
    children?: ComponentConfig[]
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
