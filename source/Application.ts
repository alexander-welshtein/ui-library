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
                    label: "Button",
                    fit: true
                },
                {
                    type: ComponentType.Button,
                    label: "SuperButton",
                    fit: true
                }
            ]
        },
        {
            type: ComponentType.RowLayout,
            children: []
        }
    ]
})
