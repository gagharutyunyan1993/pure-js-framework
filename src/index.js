import {bootstrap} from "./main";
import {appModule} from "./app/app.module";
import { wfm } from "./main";

wfm.delay(2000).then(() => {
    bootstrap(appModule);
});
