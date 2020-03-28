import Component from "./Component";
import {ComponentConfig} from "../core/ComponentConfig";
import Config from "../render/Config";
import StyleComposer from "../core/StyleComposer";

export class Image extends Component {

}

export const renderImage = (config: ComponentConfig): Config => {
    const style = {}

    StyleComposer.basic(style, config)

    return {
        class: "image",
        style,
        onRender: config.onRender ? element => {
            config.onRender(new Image(element, config))
        } : undefined
    }
}
