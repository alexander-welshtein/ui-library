import "./Application.scss"
import "./themes/FluentTheme.scss"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"

export default (): ComponentConfig => ({
    type: ComponentType.VerticalLayout,
    width: "100%",
    height: "100%",
    children: [
        {
            type: ComponentType.VerticalLayout,
            fit: true,
            children: [
                {
                    type: ComponentType.Button,
                    children: [
                        {
                            type: ComponentType.Label,
                            value: "Button",
                            verticalAlign: Align.Center,
                            horizontalAlign: Align.Center
                        }
                    ]
                },
                {
                    type: ComponentType.Button,
                    verticalAlign: Align.Center,
                    horizontalAlign: Align.Center,
                    width: "200px",
                    height: "50px",
                    children: [
                        {
                            type: ComponentType.Label,
                            value: "Super button",
                            verticalAlign: Align.Center,
                            horizontalAlign: Align.Center
                        },
                        {
                            type: ComponentType.Image,
                            width: "24px",
                            height: "24px"
                        }
                    ]
                },
                {
                    type: ComponentType.Label,
                    value: "Label"
                }
            ]
        },
        {
            type: ComponentType.VerticalLayout,
            children: []
        }
    ]
})
