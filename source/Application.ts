import "./Application.scss"
import "./themes/MainTheme.scss"
import ComponentConfig from "./components/ComponentConfig"
import Component from "./components/Component"
import {ComponentType} from "./components/ComponentType"

export default class Application extends Component {
    public render(): ComponentConfig {
        return {
            type: ComponentType.rowLayout,
            width: "150px",
            padding: {
                top: "10px",
                left: "10px"
            },
            children: [
                {
                    type: ComponentType.button,
                    label: "Coursera",
                    textAlign: "center"
                },
                {
                    type: ComponentType.button,
                    label: "Udemy",
                    textAlign: "center",
                    margin: {
                        top: "5px"
                    }
                }
            ]
        }
    }
}
