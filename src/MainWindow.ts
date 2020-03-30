import {ComponentType} from "./core/ComponentType"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {Button} from "./components/Button"
import {Window} from "./components/Window"
import {Checkbox} from "./components/Checkbox"

export class MainWindow {

    private window = new Window()
    private cancelButton = new Button()
    private confirmButton = new Button()
    private checkbox = new Checkbox()

    config(): ComponentConfig {
        return {
            type: ComponentType.Window,
            hook: this.window,
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
                                    type: ComponentType.Checkbox,
                                    hook: this.checkbox,
                                    label: "Active",
                                    checked: true
                                },
                                {
                                    type: ComponentType.Spacer
                                },
                                {
                                    type: ComponentType.Button,
                                    hook: this.cancelButton,
                                    label: "Cancel",
                                    fit: true
                                },
                                {
                                    type: ComponentType.Spacer,
                                    width: "16px"
                                },
                                {
                                    type: ComponentType.Button,
                                    hook: this.confirmButton,
                                    label: "Confirm",
                                    fit: true,
                                    primary: true
                                }
                            ]
                        }
                    ]
                }
            ]
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
