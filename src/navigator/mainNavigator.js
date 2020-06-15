import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen866831Navigator from '../features/BlankScreen866831/navigator';
import BlankScreen966830Navigator from '../features/BlankScreen966830/navigator';
import BlankScreen1066829Navigator from '../features/BlankScreen1066829/navigator';
import BlankScreen1166828Navigator from '../features/BlankScreen1166828/navigator';
import BlankScreen1266827Navigator from '../features/BlankScreen1266827/navigator';
import BlankScreen65245Navigator from '../features/BlankScreen65245/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen866831: { screen: BlankScreen866831Navigator },
BlankScreen966830: { screen: BlankScreen966830Navigator },
BlankScreen1066829: { screen: BlankScreen1066829Navigator },
BlankScreen1166828: { screen: BlankScreen1166828Navigator },
BlankScreen1266827: { screen: BlankScreen1266827Navigator },
BlankScreen65245: { screen: BlankScreen65245Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
