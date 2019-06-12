import "./Application.scss"
import "./themes/FluentTheme.scss"
import menuIcon from "../assets/menu.svg"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"

export default (): ComponentConfig => ({
    type: ComponentType.VerticalLayout,
    width: "100%",
    height: "100%",
    children: [
        {
            type: ComponentType.HorizontalLayout,
            id: "main-header",
            height: "48px",
            padding: {
                left: "8px",
                right: "12px"
            },
            verticalAlign: Align.Center,
            children: [
                {
                    type: ComponentType.Label,
                    value: "Header",
                },
                {
                    type: ComponentType.Icon,
                    id: "menu-icon",
                    value: menuIcon,
                    width: "24px",
                    height: "24px"
                },
                {
                    value: menuIcon
                }
            ]
        }
    ]
})
