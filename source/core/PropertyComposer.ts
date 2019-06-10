import ComponentConfig, {Align} from "./ComponentConfig"

export default class PropertyComposer {
    public static width(config: ComponentConfig): string {
        return config.width ? config.width : "auto"
    }

    public static height(config: ComponentConfig): string {
        return config.height ? config.height : "auto"
    }

    public static padding(config: ComponentConfig): string {
        if (config.padding) {
            const top = config.padding.top ? config.padding.top : "0"
            const bottom = config.padding.bottom ? config.padding.bottom : "0"
            const left = config.padding.left ? config.padding.left : "0"
            const right = config.padding.right ? config.padding.right : "0"

            return top + " " + right + " " + bottom + " " + left
        }
        return "0 0 0 0"
    }

    public static margin(config: ComponentConfig): string {
        if (config.margin) {
            const top = config.margin.top ? config.margin.top : "0"
            const bottom = config.margin.bottom ? config.margin.bottom : "0"
            const left = config.margin.left ? config.margin.left : "0"
            const right = config.margin.right ? config.margin.right : "0"

            return top + " " + right + " " + bottom + " " + left
        }
        return "0 0 0 0"
    }

    public static verticalAlign(config: ComponentConfig, defaultValue: Align): string {
        return config.verticalAlign ? config.verticalAlign : defaultValue
    }

    public static horizontalAlign(config: ComponentConfig, defaultValue: Align): string {
        return config.horizontalAlign ? config.horizontalAlign : defaultValue
    }

    public static hidden(config: ComponentConfig, defaultValue: string): string {
        return config.hidden ? "none" : defaultValue
    }

    public static gravity(config: ComponentConfig): string {
        return config.gravity ? config.gravity + "" : "auto"
    }
}
