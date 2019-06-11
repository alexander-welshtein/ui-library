import "./Application.scss"
import "./themes/FluentTheme.scss"
import ComponentConfig from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"

export default class Application {
    public render(): ComponentConfig {
        return {
            type: ComponentType.rowLayout,
            width: "100%",
            height: "100%",
            children: [
                {
                    type: ComponentType.rowLayout,
                    children: [
                        {
                            type: ComponentType.button,
                            label: "Button"
                        }
                    ]
                },
                {
                    type: ComponentType.rowLayout,
                    children: [
                        {
                            type: ComponentType.button,
                            label: "Coursera"
                        },
                        {
                            type: ComponentType.spacer
                        },
                        {
                            type: ComponentType.button,
                            label: "Udemy",
                            onRender: component => {
                                console.log(component)
                            }
                        },
                        {
                            type: ComponentType.button,
                            label: "Lynda",
                        }
                    ]
                }
            ]
        }
    }
}
