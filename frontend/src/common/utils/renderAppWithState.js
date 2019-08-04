import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import AppLoginOrAppLogof from '../../main/AppLoginOrAppLogof';
import { createStore } from 'redux'

export default function renderAppWithState(state) {
  const store = createStore(state);
  const wrapper = mount(
    <Provider store={store}>
      <AppLoginOrAppLogof />
    </Provider>
  );
  return [store, wrapper];
}