import Renderer from "./render/Renderer"
import Application from "./Application"
import ComponentRenderer from "./core/ComponentRenderer"

document.body.classList.add("fluent-theme")
document.body.appendChild(Renderer.render(ComponentRenderer.render(new Application().render())))
