import {ComponentType} from "./ComponentType"

export default interface ComponentConfig {
    type?: ComponentType,
    label?: string,
    width?: string,
    height?: string,
    padding?: Padding,
    textAlign?: string,
    children?: ComponentConfig[]
}

interface Padding {
    top?: string,
    bottom?: string,
    left?: string,
    right?: string,
}
