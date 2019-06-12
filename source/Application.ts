import "./Application.scss"
import "./themes/FluentTheme.scss"
import ComponentConfig, {Align} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"

export default (): ComponentConfig => ({
    type: ComponentType.RowLayout,
    width: "100%",
    height: "100%",
    children: [
        {
            type: ComponentType.RowLayout,
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
                    children: [
                        {
                            type: ComponentType.Label,
                            value: "Super button",
                            verticalAlign: Align.Center,
                            horizontalAlign: Align.Center
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
            type: ComponentType.RowLayout,
            children: []
        }
    ]
})
