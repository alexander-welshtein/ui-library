import View from "../../render/View"
import Config from "../../render/Config"

export default class Button extends View {
    public render(): Config {
        return {
            class: "button",
            children: [
                {
                    tag: "p",
                    class: "label",
                    text: "label"
                }
            ]
        }
    }
}
