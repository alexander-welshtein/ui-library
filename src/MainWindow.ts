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
                                    padding: "8px",
                                    hook: this.cancelButton
                                },
                                {
                                    type: ComponentType.Spacer,
                                    width: "8px"
                                },
                                {
                                    type: ComponentType.Button,
                                    value: "Confirm",
                                    padding: "8px",
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
