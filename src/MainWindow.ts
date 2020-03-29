import {ComponentType} from "./core/ComponentType"
import {Align, ComponentConfig} from "./core/ComponentConfig"

export const MainWindow: ComponentConfig = {
    type: ComponentType.Window,
    width: "400px",
    height: "200px",
    children: [
        {
            type: ComponentType.VerticalLayout,
            children: [
                {
                    type: ComponentType.HorizontalLayout,
                    height: "48px",
                    verticalAlign: Align.Center,
                    children: [
                        {
                            type: ComponentType.Label,
                            value: "Modal window"
                        }
                    ]
                },
                {
                    type: ComponentType.Spacer
                },
                {
                    type: ComponentType.HorizontalLayout,
                    padding: "8px",
                    fit: true,
                    children: [
                        {
                            type: ComponentType.Button,
                            value: "Cancel",
                            padding: "8px"
                        },
                        {
                            type: ComponentType.Spacer,
                            width: "8px"
                        },
                        {
                            type: ComponentType.Button,
                            value: "Confirm",
                            padding: "8px"
                        }
                    ]
                }
            ]
        }
    ]
}