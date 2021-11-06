import {bootstrap, _ } from "main";
import {appModule} from "./app/app.module";

_.delay(1000).then(() => {
    bootstrap(appModule);
});
