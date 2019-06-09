import "./Application.scss"
import "./themes/FluentTheme.scss"
import ComponentConfig from "./components/ComponentConfig"
import Component from "./components/Component"
import {ComponentType} from "./components/ComponentType"

export default class Application extends Component {
    public render(): ComponentConfig {
        return {
            type: ComponentType.rowLayout,
            width: "125px",
            padding: {
                top: "10px",
                left: "10px"
            },
            children: [
                {
                    type: ComponentType.button,
                    label: "Coursera",
                },
                {
                    type: ComponentType.button,
                    label: "Udemy",
                    margin: {
                        top: "5px"
                    }
                },
                {
                    type: ComponentType.button,
                    label: "Lynda",
                    margin: {
                        top: "5px"
                    }
                },
                {
                    type: ComponentType.field,
                    margin: {
                        top: "5px"
                    }
                }
            ]
        }
    }
}
