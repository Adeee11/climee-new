import * as switchAction from "./switchAction";
import * as alertAction from "./alertAction";
import * as weatherActions from "./weatherActions";
import * as colorThemeAction from "./colorThemeAction";
import * as tabColorAction from "./tabColorAction";
export default {
  ...switchAction,
  ...alertAction,
  ...weatherActions,
  ...colorThemeAction,
  ...tabColorAction,
};
