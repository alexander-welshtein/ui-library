import Renderer from "./render/Renderer"
import Application from "./Application"
import ComponentRenderer from "./core/ComponentRenderer"
import MainDialog from "./MainDialog"

document.body.classList.add("fluent-theme")

document.body.appendChild(Renderer.render(ComponentRenderer.render(Application())))
document.body.appendChild(Renderer.render(ComponentRenderer.render(MainDialog)))