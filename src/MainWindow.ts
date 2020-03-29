import {ComponentType} from "./core/ComponentType"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {Button} from "./components/Button"
import {Window} from "./components/Window"

export class MainWindow {

    private window = new Window()
    private cancelButton = new Button()
    private confirmButton = new Button()

    config(): ComponentConfig {
        return {
            type: ComponentType.Window,
            width: "400px",
            height: "200px",
            modal: true,
            children: [
                {
                    type: ComponentType.VerticalLayout,
                    children: [
                        {
                            type: ComponentType.HorizontalLayout,
                            verticalAlign: Align.Center,
                            fit: true,
                            children: [
                                {
                                    type: ComponentType.Label,
                                    label: "Modal window",
                                    padding: "24px"
                                }
                            ]
                        },
                        {
                            type: ComponentType.Spacer
                        },
                        {
                            type: ComponentType.HorizontalLayout,
                            padding: "24px",
                            fit: true,
                            horizontalAlign: Align.Right,
                            children: [
                                {
                                    type: ComponentType.Button,
                                    label: "Cancel",
                                    fit: true,
                                    hook: this.cancelButton
                                },
                                {
                                    type: ComponentType.Spacer,
                                    width: "16px"
                                },
                                {
                                    type: ComponentType.Button,
                                    label: "Confirm",
                                    fit: true,
                                    primary: true,
                                    hook: this.confirmButton
                                }
                            ]
                        }
                    ]
                }
            ],
            hook: this.window
        }
    }

    initialize() {
        this.cancelButton.on("click", () => {
            this.window.hide()
        })

        this.confirmButton.on("click", () => {
            this.window.hide()
        })
    }
}
