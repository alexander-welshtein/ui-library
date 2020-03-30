import Renderer from "./render/Renderer"
import {Application} from "./Application"
import ComponentRenderer from "./core/ComponentRenderer"

document.body.classList.add("fluent-theme")

const application = new Application

document.body.appendChild(Renderer.render(ComponentRenderer.render(application.config())))

application.initialize()