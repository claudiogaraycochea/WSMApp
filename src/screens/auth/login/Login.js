import React, {useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Row, Button, Input, Icon, Notification, Loading } from '../../../../src/ui/UILib';
import { request, ContentTypes } from '../../../store/apiLib';

import { useDispatch } from 'react-redux';
import { login } from "../../../store/actions/userActions";

export default function Login(props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('cjgaraycochea@gmail.com');
  const [password, setPassword] = useState('321Demo$');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();

  async function handleLoginSubmit() {
    setLoading(true);
    setNotification();
    const data = {
      email,
      password,
    };
    const endpoint = `/user/auth`;
    try {
      const res = await request('POST', endpoint, data, { 'content-type': ContentTypes.json });
      const responseData = {
        auth: res.data.result.Auth,
        user: res.data.result.User.result
      }
      console.log(responseData);
      dispatch(login(responseData));
    } catch (err) {
      setLoading(false);
      setNotification({
        type: 'danger',
        message: 'Email or password wrong'
      })
    }
  }

  return (
    <Container >
      <Loading visible={loading}/>
      {(notification) ? <Notification variant={notification.type}>{notification.message}></Notification> : null}
      <View style={{paddingTop: 80}}>
        <Row>
          <Image 
            source={require('../../../assets/wsm-agency-logo.png')}  
            style={{width: 269, height: 180, marginBottom: 40 }}
          />
        </Row>
        <Row>
          <Input
            type='email'
            value={email}
            placeholder='Email'
            onChangeText={(text)=> setEmail(text)}
          />
        </Row>
        <Row>
          <Input
            type='password'
            value={password}
            placeholder='Password'
            onChangeText={(text)=> setPassword(text)}
          />
        </Row>

        <Row>
          <Button
            variant='primary'
            onPress={handleLoginSubmit}
          >
            Login
          </Button>
        </Row>
        <Row>
          <Button
            onPress={() =>
              navigation.navigate('SignUp')
            }
          >Create Account</Button>
        </Row>
        {/*
        <Row>
          <Button
            title="StyleGuide"
            variant="primary"
            onPress={() =>
              navigation.navigate('StyleGuide')
            }
          >StyleGuide</Button>
          </Row>
        */}
      </View>
    </Container>
  )
  
}

const styles = StyleSheet.create({
  iconLogo: {
    width: 120,
    height: 120,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
