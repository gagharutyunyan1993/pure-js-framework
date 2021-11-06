import {WFMComponent} from "../../main";

class AppHeader extends  WFMComponent {
    constructor(config) {
        super(config);
    }


}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
         <nav class="deep-purple darken-4">
            <div class="nav-wrapper">
              <a href="#" class="brand-logo" style="margin-left: 20px">PJF</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="#">Main Page</a></li>
                <li><a href="#tabs">Tabs</a></li>
              </ul>
            </div>
          </nav>
    `
})