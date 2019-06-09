import View from "../render/View"
import Config from "../render/Config"

export default class Application extends View {
    public render(): Config {
        return {
            class: "application",
            text: "sfsdfds"
        }
    }
}
