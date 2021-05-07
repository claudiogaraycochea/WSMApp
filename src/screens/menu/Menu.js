import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Input, Button, H2, H3, ButtonItems, ButtonItem, Icon } from '../../../src/ui/UILib';

export default function Menu(props){
  const { navigation, route } = props;
  const { menu_selected, prev_title } = route.params;

  function handleChooseMenu(menu_id) {
    const menu_parent = menu_selected.find((menuItem) => menuItem.id === menu_id);
    if (menu_parent.data) {
      const data_selected = menu_parent.data;
      const params = {
        data_selected,
      };
      navigation.navigate('SendMessage', params); 
    }
    else {
      const menu_child = menu_parent.menu;
      const params = {
        menu_selected: menu_child,
        prev_title: menu_parent.title
      };
      navigation.push('Menu', params);
      // navigation.navigate('Menu', params);      
    }
  }

  return (
    <Container>
      <Row>
        <H2>{prev_title}</H2>
      </Row>
      <View>
        {menu_selected.map((menu_item) => {
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
