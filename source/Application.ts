import View from "./render/View"
import Config from "./render/Config"
import Button from "./components/button/Button"

export default class Application extends View {
    public render(): Config {
        return {
            class: "application",
            children: [
                new Button().render()
            ]
        }
    }
}
