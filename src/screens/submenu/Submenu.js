import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Input, Button, H2, H3, ButtonItems, ButtonItem, Icon } from '../../../src/ui/UILib';

export default function Submenu(props){
  const { navigation } = props;
  const { menu_id, menu } = useSelector(state => state.menuConstructor);
  const submenu = menu.filter((menuItem) => menuItem.id === menu_id);
  console.log('>>>>>>>>>>>>>>>>> menu_id: ',menu_id);
  console.log('>>>>>>>>>>>>>>>>>>>>>>submenu: ', submenu);
  return (
    <Container>
      <Row>
        <H3>SUBMENU</H3>
      </Row>
      <View>
        {submenu[0].submenu.map((menu_item) => {
          return (
            <ButtonItem
              key={menu_item.id}
              icon={<Icon.IconSurvey/>}
              onPress={() =>
                navigation.navigate('SendMessage')
              }
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
