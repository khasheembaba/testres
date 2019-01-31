import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeComponent from '../views/mainview/HomeComponent';
import GetHelpComponent from '../views/gethelp/GetHelpComponent';
import ProvideHelpComponent from '../views/providehelp/ProvideHelpComponent';
import HowCanHelpComponent from '../views/howcanhelp/HowCanHelpComponent';
import RegentComponent from '../views/regent129st/RegentComponent';




const MainNavigator = createStackNavigator(
  {
    Home: HomeComponent,
    GetHelp:GetHelpComponent,
    ProvideHelp:ProvideHelpComponent,
    HowCanHelp:HowCanHelpComponent,
    Regent129St:RegentComponent
  },
  {
    initialRouteName: 'Home',
  }
);

//const MainNavigator = createAppContainer(RootStack);
export default MainNavigator;