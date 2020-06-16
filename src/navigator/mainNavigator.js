import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignUp23066943Navigator from '../features/SignUp23066943/navigator';
import UserProfile3266941Navigator from '../features/UserProfile3266941/navigator';
import NotificationList2166939Navigator from '../features/NotificationList2166939/navigator';
import Settings2366937Navigator from '../features/Settings2366937/navigator';
import Dashboard21866936Navigator from '../features/Dashboard21866936/navigator';
import Dashboard21966935Navigator from '../features/Dashboard21966935/navigator';
import ArticleList1366934Navigator from '../features/ArticleList1366934/navigator';
import Dashboard11566932Navigator from '../features/Dashboard11566932/navigator';
import EmailAuth1666931Navigator from '../features/EmailAuth1666931/navigator';
import Feed1766930Navigator from '../features/Feed1766930/navigator';
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
SignUp23066943: { screen: SignUp23066943Navigator },
UserProfile3266941: { screen: UserProfile3266941Navigator },
NotificationList2166939: { screen: NotificationList2166939Navigator },
Settings2366937: { screen: Settings2366937Navigator },
Dashboard21866936: { screen: Dashboard21866936Navigator },
Dashboard21966935: { screen: Dashboard21966935Navigator },
ArticleList1366934: { screen: ArticleList1366934Navigator },
Dashboard11566932: { screen: Dashboard11566932Navigator },
EmailAuth1666931: { screen: EmailAuth1666931Navigator },
Feed1766930: { screen: Feed1766930Navigator },
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
