import {Align, ComponentConfig} from "./ComponentConfig"

export default class StyleComposer {
    public static basic(style: any, config: ComponentConfig) {
        this.fit(style, config)
        this.width(style, config)
        this.height(style, config)
        this.gravity(style, config)
        this.padding(style, config)
        this.margin(style, config)
        this.hidden(style, config)
    }


    public static width(style: any, config: ComponentConfig) {
        if (config.width) {
            style.width = config.width
            style.flexShrink = "0"
            style.flexGrow = "0"
        }
    }

    public static height(style: any, config: ComponentConfig) {
        if (config.height) {
            style.height = config.height
            style.flexShrink = "0"
            style.flexGrow = "0"
        }
    }

    public static fit(style: any, config: ComponentConfig) {
        if (config.fit) {
            style.flexShrink = "0"
            style.flexGrow = "0"
        } else {
            style.flexShrink = "1"
            style.flexGrow = "1"
        }
    }

    public static padding(style: any, config: ComponentConfig) {
        // noinspection DuplicatedCode
        if (config.padding) {
            if (typeof config.padding === "string") {
                style.padding = config.padding
            } else {
                style.padding = `${
                    (config.padding.top || "0")} ${
                    (config.padding.right || "0")} ${
                    (config.padding.bottom || "0")} ${
                    (config.padding.left || "0")}`
            }
        }
    }

    public static margin(style: any, config: ComponentConfig) {
        // noinspection DuplicatedCode
        if (config.margin) {
            if (typeof config.margin === "string") {
                style.margin = config.margin
            } else {
                style.margin = `${
                    (config.margin.top || "0")} ${
                    (config.margin.right || "0")} ${
                    (config.margin.bottom || "0")} ${
                    (config.margin.left || "0")}`
            }
        }
    }

    public static verticalAlign(style: any, config: ComponentConfig, defaultValue?: Align) {
        style.alignItems = config.verticalAlign || (defaultValue || "unset")
    }

    public static horizontalAlign(style: any, config: ComponentConfig, defaultValue?: Align) {
        style.justifyContent = config.horizontalAlign || (defaultValue || "unset")
    }

    public static hidden(style: any, config: ComponentConfig) {
        style.display = config.hidden ? "none" : "flex"
    }

    public static gravity(style: any, config: ComponentConfig) {
        style.flexBasis = config.gravity ? (config.gravity * 100) + "%" : "auto"
    }
}
