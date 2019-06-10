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
                            label: "Spacer"
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
                            type: ComponentType.spacer,
                            gravity: 1
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
            ]
        }
    }
}
