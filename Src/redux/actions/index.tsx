import * as switchAction from './switchAction';
import * as alertAction from "./alertAction"
import * as weatherActions from "./weatherActions"

export default {
     ...switchAction,
     ...alertAction,
     ...weatherActions
};
