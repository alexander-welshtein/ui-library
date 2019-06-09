import "./Application.scss"
import "./themes/FluentTheme.scss"
import ComponentConfig from "./core/ComponentConfig"
import Component from "./core/Component"
import {ComponentType} from "./core/ComponentType"

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
                    label: "Coursera"
                },
                {
                    type: ComponentType.button,
                    label: "Udemy",
                    margin: {
                        top: "5px"
                    },
                    onRender: component => {
                        console.log(component)
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
