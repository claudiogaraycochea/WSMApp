import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Container, Row, H2, ButtonItems, ButtonItem, Icon, ButtonBottom, Color, Button } from '../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuId } from '../../store/actions/menuActions';
import { db } from '../../store/firestore/Firestore';
import base64 from 'react-native-base64';

import { collection, query, where } from "firebase/firestore";


export default function HomeMenu(props){
  const { navigation } = props;
  // const { menu } = useSelector(state => state.menuConstructor);
  const [company, setCompany] = useState(null);
  //let menu = [];
  // const company_own = true;
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();

  /*const getUsersAutoUpdate = async () => {
    db.collection('menu').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc=>{
        // console.log(doc.data());
        // console.log(doc.id);
        docs.push({...doc.data(), id: doc.id});
      });
      setCompany(docs);
    });
  }*/

  useEffect(()=>{
    if(menu.length===0) {
      getMenu('123')
    }
  }, []);

  function handleChooseMenu(menu_id) {
    const menu_parent = menu.find((menuItem) => menuItem.id === menu_id);
    console.log('handleChooseMenu: menu_selected:', menu_parent);
    const menu_child = menu_parent.menu;
    const params = {
      menu_selected: menu_child,
      prev_title: menu_parent.title
    };
    navigation.navigate('Menu', params);
  }

  const handleCreateSubmit = async () => {
    console.log('handleCreateSubmit')
    console.log('menu',menu);
    const data = {
      menu,
      user_id: '123'
    };
    await db.collection('menu').doc().set(data);
  }

  const getMenu = async (user_id) => {
    db.collection('menu').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc=>{
        if(doc.data().user_id === user_id) {
          docs.push({...doc.data(), id: doc.id});
        }
        // console.log(doc.id);
        //docs.push({...doc.data(), id: doc.id});
      });
      //console.log('docs:',docs);
      setMenu(docs[0].menu);
    });
  }

  /*return (
    <View>
      <Row><Text>Loading</Text></Row>
      <Row>
        <Button onPress={()=>handleCreateSubmit()}>Set deviceggg</Button>
      </Row>
      <Row>
        <Button onPress={()=>handleGetMenu('123')}>Get Menu</Button>
      </Row>
    </View>
  )*/

  console.log(menu);

  return (
    <Container
      bottom={(true) ? (
        <ButtonBottom
          icon={(<Icon.IconHotkeySettings color={Color.white}/>)}
          onPress={() => navigation.navigate('AdminOverviewCompany')}
        >
          Admin my company
        </ButtonBottom>) : null
      }
    >
      <Row>
        <H2>WELCOME!</H2>
      </Row>
      <View>
        {(menu.length>0) ? (menu.map((menu_item) => {
          return (
            <ButtonItem
              key={menu_item.id}
              icon={<Icon.IconSurvey/>}
              onPress={() => handleChooseMenu(menu_item.id)}
              iconAction={<Icon.IconNext/>}
            >
              {menu_item.title}
            </ButtonItem>
          )
        }) ): null}
      </View>
    </Container>
  )
};
