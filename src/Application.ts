import "./Application.scss"
import "./themes/FluentTheme.scss"
import menuIcon from "../assets/menu.svg"
import text from "../assets/text.txt"
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
                    value: "Header"
                },
                {
                    type: ComponentType.Icon,
                    id: "menu-icon",
                    value: menuIcon,
                    width: "24px",
                    height: "24px"
                }
            ]
        },
        {
            type: ComponentType.Label,
            value: text,
            fit: true
        },
        {
            type: ComponentType.VerticalLayout,
            padding: "8px",
            children: [
                {
                    type: ComponentType.Field,
                    value: "Name",
                    fit: true,
                    margin: {
                        bottom: "16px"
                    },
                    labelWidth: "80px"
                },
                {
                    type: ComponentType.Field,
                    value: "Email",
                    fit: true,
                    labelWidth: "80px"
                }
            ]
        },
        {
            type: ComponentType.HorizontalLayout,
            fit: true,
            horizontalAlign: Align.Right,
            children: [
                {
                    type: ComponentType.Button,
                    value: "Confirm",
                    padding: "8px",
                    fit: true,
                    onRender: component => {
                        component.element.onclick = () => {
                            alert("123")
                        }
                    }
                }
            ]
        }
    ]
})
