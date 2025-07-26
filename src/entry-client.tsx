// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { registerSW } from 'virtual:pwa-register';

mount(() => <StartClient />, document.getElementById("app")!);
registerSW();