import Renderer from "./render/Renderer"
import Application from "./Application"

document.body.appendChild(Renderer.render(new Application().render()))
