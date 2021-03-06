import React from "react";
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Account from "./pages/Account"


import Routes from "./routes";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
} from "react-navigation";

const SignedOut = createStackNavigator(
    {
        Login,
        Account
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);

// const SignedIn = createStackNavigator(
//     {
//         Feed
//     },
//     {
//         initialRouteName: "Feed",
//         headerMode: "none"
//     }
// );

const createRootNavigator = () => {
    return createSwitchNavigator(
        {
            SignedIn:{
                screen: Routes
            },
            SignedOut:{
                screen: SignedOut
            }
        },
        {
            initialRouteName: "SignedOut"
        }
    );
};

export default createAppContainer(createRootNavigator())
