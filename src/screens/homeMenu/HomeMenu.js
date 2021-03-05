import React from 'react';
import { View } from 'react-native';
import { Container, Row, H3, ButtonItems, ButtonItem, Icon } from '../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuId } from '../../store/actions/menuActions';

export default function HomeMenu(props){
  const { navigation } = props;
  const { menu } = useSelector(state => state.menuConstructor);
  const dispatch = useDispatch();

  function handleChooseMenu(menu_id) {
    const menu_parent = menu.find((menuItem) => menuItem.id === menu_id);
    console.log('handleChooseMenu: menu_selected:', menu_parent);
    const menu_child = menu_parent.menu;
    const params = {
      menu_selected: menu_child
    };
    navigation.navigate('Menu', params);
  }

  return (
    <Container>
      <Row>
        <H3>MENU</H3>
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
