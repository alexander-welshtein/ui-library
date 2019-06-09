import "./Application.scss"
import "./themes/MainTheme.scss"
import ComponentConfig from "./components/ComponentConfig"
import Component from "./components/Component"

export default class Application extends Component {
    public render(): ComponentConfig {
        return {
            type: "rowLayout",
            width: "150px",
            padding: {
                left: "10px",
            },
            children: [
                {
                    type: "button",
                    label: "Coursera",
                    textAlign: "center"
                },
                {
                    type: "button",
                    label: "Udemy",
                    textAlign: "center"
                }
            ]
        }
    }
}
