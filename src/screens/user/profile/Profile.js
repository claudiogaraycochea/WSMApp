import React from 'react';
import { View, Text } from 'react-native';
import { Container, Row, Col, H3, Button } from '../../../../src/ui/UILib';
import { useSelector, useDispatch} from 'react-redux';
import { logout } from '../../../store/actions/userActions';

export default function ProfileUser(props) {  
  const { user } = useSelector(state => state.userConstructor);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log('user',user);

  return (
    <Container>
      <View>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <H3>Firstname</H3>
          </Col>
          <Col align='flex-end'>
            <Text>{user.firstname}</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <H3>Lastname</H3>
          </Col>
          <Col align='flex-end'>
            <Text>{user.lastname}</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <H3>Email</H3>
          </Col>
          <Col align='flex-end'>
            <Text>{user.email}</Text>
          </Col>
        </Row>
        <Row>
          <Col width='40' align='flex-start'>
            <H3>Role</H3>
          </Col>
          <Col align='flex-end'>
            <Text>{user.role}</Text>
          </Col>
        </Row>
      </View>
      <View>
        <Button
          onPress={() =>handleLogout()}
        >
          Close Session
        </Button>
      </View>
    </Container>
  )
};
