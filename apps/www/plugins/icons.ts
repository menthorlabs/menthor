import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBookmark,
  faUsers,
  faEarthAmericas,
  faArrowRight,
  faBars,
  faTimes,
  faMagnifyingGlass,
  faStar,
  faCodeFork,
  faRocket,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faBookmark,
  faUsers,
  faEarthAmericas,
  faArrowRight,
  faBars,
  faTimes,
  faMagnifyingGlass,
  faStar,
  faCodeFork,
  faDiscord,
  faRocket,
  faGraduationCap,
  faGithub
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("font-awesome-icon", FontAwesomeIcon);
});
