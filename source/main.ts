import Renderer from "./render/Renderer"
import Application from "./Application"
import ComponentRenderer from "./components/ComponentRenderer"

document.body.classList.add("main-theme")
document.body.appendChild(Renderer.render(ComponentRenderer.render(new Application().render())))
