import {_} from "main";

export function renderComponent(c) {
    if(!_.isUndefined(c.onInit)) c.onInit();
    c.render();
    if(!_.isUndefined(c.afterInit)) c.afterInit();
}