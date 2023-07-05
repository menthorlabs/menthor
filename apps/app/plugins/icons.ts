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
  faEdit,
  faHashtag,
  faStar,
  faLock,
  faClipboard,
  faArrowRightFromBracket,
  faArrowUp,
  faArrowDown,
  faCircleUser,
  faSignature,
  faCheckCircle,
  faXmark,
  faCloudArrowUp,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faDiscord,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
config.autoAddCss = false;

library.add(
  faArrowRight,
  faHome,
  faMagnifyingGlass,
  faBookBookmark,
  faArrowLeft,
  faBell,
  faCheck,
  faEdit,
  faHashtag,
  faStar,
  faLock,
  faClipboard,
  faArrowRightFromBracket,
  faArrowUp,
  faArrowDown,
  faCircleUser,
  faSignature,
  faCheckCircle,
  faXmark,
  faCloudArrowUp,
  faCircleCheck,
  faCircleXmark,
  faGithub,
  faGoogle,
  faDiscord,
  faTwitter
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
