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
            type: ComponentType.HorizontalLayout,
            height: "48px",
            children: [
                {
                    type: ComponentType.Label,
                    value: "Header",
                    verticalAlign: Align.Center
                }
            ]
        }
    ]
})
