import Renderer from "./render/Renderer"
import Application from "./Application"
import ComponentRenderer from "./core/ComponentRenderer"
import {MainWindow} from "./MainWindow"

document.body.classList.add("fluent-theme")

const mainWindow = new MainWindow()

document.body.appendChild(Renderer.render(ComponentRenderer.render(Application())))
document.body.appendChild(Renderer.render(ComponentRenderer.render(mainWindow.config())))

mainWindow.initialize()