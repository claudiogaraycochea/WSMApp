import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Container, Row, H2, ButtonItems, ButtonItem, Icon, ButtonBottom, Color } from '../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuId } from '../../store/actions/menuActions';
import { db } from '../../store/firestore/Firestore';
import base64 from 'react-native-base64';

export default function HomeMenu(props){
  const { navigation } = props;
  // const { menu } = useSelector(state => state.menuConstructor);
  const [company, setCompany] = useState(null);
  let menu = [];
  // const company_own = true;
  const dispatch = useDispatch();

  const getUsersAutoUpdate = async () => {
    db.collection('menu').onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach(doc=>{
        // console.log(doc.data());
        // console.log(doc.id);
        docs.push({...doc.data(), id: doc.id});
      });
      setCompany(docs);
    });
  }

  useEffect(()=>{
    getUsersAutoUpdate();
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

  if(company===null) {
    return (<Row><Text>Loading</Text></Row>)
  }


    if((company!==null) && menu.length===0) {
      /*const menuEncoded = base64.encode(JSON.stringify(menu));
      console.log("encode: ", menuEncoded);
      const menuDecoded = base64.decode(menuEncoded);
      console.log('decode: ', menuDecoded)*/
      const menuResult = (company!==null) ? JSON.parse(base64.decode(company[0].data)):[];
      console.log('company[0].data: ',menuResult);
      menu=menuResult;
    }


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
        {menu.map((menu_item) => {
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
        })}
      </View>
    </Container>
  )
};
