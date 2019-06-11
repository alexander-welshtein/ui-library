import "./Application.scss"
import "./themes/FluentTheme.scss"
import ComponentConfig from "./core/ComponentConfig"
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
                    value: "Button",
                },
                {
                    type: ComponentType.Button,
                    value: "SuperButton",
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
