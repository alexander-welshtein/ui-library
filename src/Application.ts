import "./Application.scss"
import "./themes/FluentTheme.scss"
import settingsIcon from "../assets/settings.svg"
import {ComponentConfig} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"

export class Application {

    config(): ComponentConfig {
        return {
            type: ComponentType.VerticalLayout,
            width: "100%",
            height: "100%",
            children: [
                {
                    type: ComponentType.HorizontalLayout,
                    fit: true,
                    children: [
                        {
                            type: ComponentType.IconButton,
                            value: settingsIcon,
                            label: "Settings",
                            fit: true
                        }
                    ]
                }
            ]
        }
    }

    initialize() {

    }
}
