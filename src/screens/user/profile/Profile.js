import React from 'react';
import { View } from 'react-native';
import { Container, Section, Row, Col, H3, Text, Button, ImageUser } from '../../../../src/ui/UILib';
import { useSelector, useDispatch} from 'react-redux';
import { logout } from '../../../store/actions/userActions';
import ButtonUploadImage from './buttonUploadImage/ButtonUploadImage';

export default function ProfileUser(props) {  
  const { user } = useSelector(state => state.userConstructor);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  console.log('user',user);

  return (
    <Container>
      <Section>
        <Row>
          <ImageUser size={128} image={`https://${user.avatar}`}/>
        </Row>
        <Row>
          <ButtonUploadImage handleRefreshUser={() => handleRefreshUser()}/>
        </Row>
      </Section>
      <View>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <Text>Firstname</Text>
          </Col>
          <Col align='flex-end'>
            <Text>{user.firstname}</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <Text>Lastname</Text>
          </Col>
          <Col align='flex-end'>
            <Text>{user.lastname}</Text>
          </Col>
        </Row>
        <Row type='divisor'>
          <Col width='40' align='flex-start'>
            <Text>Email</Text>
          </Col>
          <Col align='flex-end'>
            <Text>{user.email}</Text>
          </Col>
        </Row>
        <Row>
          <Col width='40' align='flex-start'>
            <Text>Role</Text>
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
