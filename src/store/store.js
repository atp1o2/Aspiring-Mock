import Reflux from 'reflux';
import Actions from '../actions/Actions'

var Store = Reflux.createStore({
  listenables: Actions,

  data: {},

  init () {
    Actions.loadData()
  }
});

export default Store;
