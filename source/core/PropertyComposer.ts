import {Align, ComponentConfig} from "./ComponentConfig"

export default class PropertyComposer {
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
        } else {
            style.width = "auto"
        }
    }

    public static height(style: any, config: ComponentConfig) {
        if (config.height) {
            style.height = config.height
            style.flexShrink = "0"
            style.flexGrow = "0"
        } else {
            style.height = "auto"
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
        if (config.padding) {
            let top, bottom, left, right

            if (config.padding.all) {
                top = bottom = left = right = config.padding.all
            } else {
                top = config.padding.top ? config.padding.top : "0"
                bottom = config.padding.bottom ? config.padding.bottom : "0"
                left = config.padding.left ? config.padding.left : "0"
                right = config.padding.right ? config.padding.right : "0"
            }

            style.padding = top + " " + right + " " + bottom + " " + left
        } else {
            style.padding = "0 0 0 0"
        }
    }

    public static margin(style: any, config: ComponentConfig) {
        if (config.margin) {
            let top, bottom, left, right

            if (config.margin.add) {
                top = bottom = left = right = config.margin.add
            } else {
                top = config.margin.top ? config.margin.top : "0"
                bottom = config.margin.bottom ? config.margin.bottom : "0"
                left = config.margin.left ? config.margin.left : "0"
                right = config.margin.right ? config.margin.right : "0"
            }

            style.margin = top + " " + right + " " + bottom + " " + left
        } else {
            style.margin = "0 0 0 0"
        }
    }

    public static verticalAlign(style: any, config: ComponentConfig, defaultValue: Align) {
        style.alignItems = config.verticalAlign ? config.verticalAlign : defaultValue
    }

    public static horizontalAlign(style: any, config: ComponentConfig, defaultValue: Align) {
        style.justifyContent = config.horizontalAlign ? config.horizontalAlign : defaultValue
    }

    public static hidden(style: any, config: ComponentConfig) {
        style.display = config.hidden ? "none" : "flex"
    }

    public static gravity(style: any, config: ComponentConfig) {
        style.flexBasis = config.gravity ? (config.gravity * 100) + "%" : "auto"
    }
}
