/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';
import MainScreen from './components/MainScreen/container';
import PropertyTaskList from './components/PropertyList/TaskList/container';
import TaskDetailContainer from './components/TaskDetail/container';
import CreateTaskContainer from './components/CreateTask/container';
import AddPropertyList from './components/AddPropertyList';
import SettingsContainer from './components/Settings/container';
import SignInContainer from './components/SignIn/container';
import StorybookUI from '../storybook';
import { defaultNavigatorStyle } from './assets/styles/global';

export const registerScreens = (store, Provider) => {
  Navigation.registerComponent(
    'InCheck.MainScreen',
    () => MainScreen, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.PropertyTaskList',
    () => PropertyTaskList, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.TaskDetailContainer',
    () => TaskDetailContainer, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.SignIn',
    () => SignInContainer, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.CreateTaskContainer',
    () => CreateTaskContainer, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.StorybookUI',
    () => StorybookUI, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.AddPropertyList',
    () => AddPropertyList, store, Provider
  );
  Navigation.registerComponent(
    'InCheck.Settings',
    () => SettingsContainer, store, Provider
  );
};

export const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'InCheck.SignIn',
      navigatorStyle: {
        ...defaultNavigatorStyle,
        navBarHidden: true
      }
    }
  });
};
