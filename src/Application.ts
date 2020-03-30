import "./Application.scss"
import "./themes/FluentTheme.scss"
import menuIcon from "../assets/menu.svg"
import {Align, ComponentConfig} from "./core/ComponentConfig"
import {ComponentType} from "./core/ComponentType"
import {Field} from "./components/Field"
import {List} from "./components/List"
import {Table} from "./components/Table"

export class Application {

    private readonly field = new Field()
    private readonly list = new List<{
        id: number,
        name: string
    }>()
    private readonly table = new Table<{
        id: number,
        name: string
    }>()


    config(): ComponentConfig {
        return {
            type: ComponentType.VerticalLayout,
            width: "100%",
            height: "100%",
            children: [
                {
                    type: ComponentType.HorizontalLayout,
                    id: "main-header",
                    padding: "16px",
                    verticalAlign: Align.Center,
                    fit: true,
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
                            height: "24px",
                            padding: "8px"
                        }
                    ]
                },
                {
                    type: ComponentType.VerticalLayout,
                    padding: "24px",
                    children: [
                        {
                            type: ComponentType.Field,
                            hook: this.field,
                            label: "Name",
                            placeholder: "Name",
                            fit: true,
                            margin: {
                                bottom: "16px"
                            },
                            labelWidth: "80px"
                        },
                        {
                            type: ComponentType.Field,
                            label: "Email",
                            fit: true,
                            margin: {
                                bottom: "32px"
                            },
                            labelWidth: "80px"
                        },
                        {
                            type: ComponentType.Table,
                            hook: this.table,
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
                            hook: this.list,
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

        this.list.setOnItemClick(index => {
            console.log(index)
        })

        this.table.setOnItemClick(index => {
            console.log(index)
        })
    }
}
