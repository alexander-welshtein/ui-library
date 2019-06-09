import "./Application.scss"
import "./themes/MainTheme.scss"
import ComponentConfig from "./components/ComponentConfig"
import Component from "./components/Component"

export default class Application extends Component {
    public render(): ComponentConfig {
        return {
            type: "linearLayout",
            children: [
                {
                    type: "button",
                    label: "Coursera"
                }
            ]
        }
    }
}
