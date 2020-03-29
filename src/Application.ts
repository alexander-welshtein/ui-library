import "./Application.scss"
import "./themes/FluentTheme.scss"
import menuIcon from "../assets/menu.svg"
import text from "../assets/text.txt"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"
import {Field} from "./components/Field"

export class Application {

    private readonly field = new Field()


    config(): ComponentConfig {
        return {
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
                            label: "Header"
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
                    label: text,
                    fit: true
                },
                {
                    type: ComponentType.VerticalLayout,
                    padding: "8px",
                    children: [
                        {
                            type: ComponentType.Field,
                            label: "Name",
                            placeholder: "Name",
                            fit: true,
                            margin: {
                                bottom: "16px"
                            },
                            labelWidth: "80px",
                            hook: this.field
                        },
                        {
                            type: ComponentType.Field,
                            label: "Email",
                            fit: true,
                            labelWidth: "80px"
                        },
                        {
                            type: ComponentType.Table,
                            fit: true,
                            items: [
                                {
                                    id: 1,
                                    name: "item_1"
                                },
                                {
                                    id: 2,
                                    name: "item_2"
                                }
                            ],
                            header: [
                                {
                                    type: ComponentType.Label,
                                    label: "Id",
                                    gravity: .2
                                },
                                {
                                    type: ComponentType.Label,
                                    label: "Name",
                                    gravity: .8
                                }
                            ],
                            rowAdapter: (item: {
                                id: number,
                                name: string
                            }) => [
                                {
                                    type: ComponentType.Label,
                                    label: String(item.id),
                                    gravity: .2
                                },
                                {
                                    type: ComponentType.Label,
                                    label: String(item.name),
                                    gravity: .8
                                }
                            ]
                        },
                        {
                            type: ComponentType.VerticalList,
                            fit: true,
                            items: [
                                {
                                    id: 1,
                                    name: "item_1"
                                },
                                {
                                    id: 2,
                                    name: "item_2"
                                }
                            ],
                            adapter: (item: {
                                id: number,
                                name: string
                            }) => ({
                                type: ComponentType.HorizontalLayout,
                                children: [
                                    {
                                        type: ComponentType.Label,
                                        label: String(item.id),
                                        gravity: .2
                                    },
                                    {
                                        type: ComponentType.Label,
                                        label: String(item.name),
                                        gravity: .8
                                    }
                                ]
                            })
                        }
                    ]
                },
                {
                    type: ComponentType.HorizontalLayout,
                    fit: true,
                    horizontalAlign: Align.Right,
                    padding: "24px",
                    children: [
                        {
                            type: ComponentType.Button,
                            label: "Show dialog",
                            fit: true
                        }
                    ]
                }
            ]
        }
    }

    initialize() {
        this.field.clear()
    }
}
