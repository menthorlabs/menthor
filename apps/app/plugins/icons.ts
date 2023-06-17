import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faHome,
  faMagnifyingGlass,
  faBookBookmark,
  faArrowLeft,
  faBell,
  faCheck,
  faLock,
  faClipboard,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

library.add(
  faArrowRight,
  faHome,
  faMagnifyingGlass,
  faBookBookmark,
  faArrowLeft,
  faBell,
  faCheck,
  faLock,
  faClipboard,
  faCheckCircle,
  faGithub,
  faGoogle
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
