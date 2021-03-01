import React from 'react';
import { View } from 'react-native';
import { Container, Row, H3, ButtonItems, ButtonItem, Icon } from '../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { setMenuId } from '../../store/actions/menuActions';

export default function HomeMenu(props){
  const { navigation } = props;
  const { menu } = useSelector(state => state.menuConstructor);
  const dispatch = useDispatch();

  function handleChooseSubmenu(menu_id) {
    dispatch(setMenuId(menu_id));
    navigation.navigate('Submenu');
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
              onPress={() => handleChooseSubmenu(menu_item.id)}
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
