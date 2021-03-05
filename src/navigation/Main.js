import React from 'react';
import { useSelector } from 'react-redux';

import NavigatorPublic from "./NavigationPublic";
import NavigationPrivate from "./NavigationPrivate";

export default function Main(props) {
  const { auth } = useSelector(state => state.userConstructor);
  const isLoggedIn = auth.AccessToken;

  /*return (
    <>
      <NavigationPrivate props={props}/>
    </>
  )*/

  return (
    <>
      {isLoggedIn ? (<NavigationPrivate props={props}/>):(<NavigatorPublic props={props}/>)}
    </>
  )
}
