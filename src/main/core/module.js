import {router, _} from "main";
import {renderComponent} from "./component/render-component";
import {RoutingModule} from "main/core/routing/routing.module";

export class Module {
    constructor(config) {
        this.components = config.components;
        this.bootstrapComponent = config.bootstrap;
        this.routes = config.routes;
    }

    start() {
        initComponents(this.bootstrapComponent, this.components);
        initRouting(this.routes);
    }
}

function initComponents(bootstrap, components) {
    if(_.isUndefined(bootstrap)){
        throw new Error(`Bootstrap component isn't defined`)
    }
    [bootstrap, ...components].forEach(renderComponent)
}

function initRouting(routes) {
    if(_.isUndefined(routes)) return;

    let routing = new RoutingModule(routes)
    routing.init();
}