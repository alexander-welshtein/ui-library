import ComponentConfig, {Align} from "./ComponentConfig"

export default class PropertyComposer {
    public static main(style: {}) {
        style["flexShrink"] = 1
        style["flexGrow"] = 1
    }

    public static width(style: {}, config: ComponentConfig) {
        style["width"] = config.width ? config.width : "auto"
    }

    public static height(style: {}, config: ComponentConfig) {
        style["height"] = config.height ? config.height : "auto"
    }

    public static padding(style: {}, config: ComponentConfig) {
        if (config.padding) {
            const top = config.padding.top ? config.padding.top : "0"
            const bottom = config.padding.bottom ? config.padding.bottom : "0"
            const left = config.padding.left ? config.padding.left : "0"
            const right = config.padding.right ? config.padding.right : "0"

            style["padding"] = top + " " + right + " " + bottom + " " + left
        }
        style["padding"] = "0 0 0 0"
    }

    public static margin(style: {}, config: ComponentConfig) {
        if (config.margin) {
            const top = config.margin.top ? config.margin.top : "0"
            const bottom = config.margin.bottom ? config.margin.bottom : "0"
            const left = config.margin.left ? config.margin.left : "0"
            const right = config.margin.right ? config.margin.right : "0"

            style["margin"] = top + " " + right + " " + bottom + " " + left
        }
        style["margin"] = "0 0 0 0"
    }

    public static verticalAlign(style: {}, config: ComponentConfig, defaultValue: Align) {
        style["alignItems"] = config.verticalAlign ? config.verticalAlign : defaultValue
    }

    public static horizontalAlign(style: {}, config: ComponentConfig, defaultValue: Align) {
        style["justifyContent"] = config.horizontalAlign ? config.horizontalAlign : defaultValue
    }

    public static hidden(style: {}, config: ComponentConfig, defaultValue: string) {
        style["display"] = config.hidden ? "none" : defaultValue
    }

    public static gravity(style: {}, config: ComponentConfig) {
        style["flexBasis"] = config.gravity ? (config.gravity * 100) + "%" : "auto"
    }
}
