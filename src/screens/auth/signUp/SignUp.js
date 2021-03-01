import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { Container, Section, Row, H2, H3, Input, Button, InputSwitch, Notification} from '../../../../src/ui/UILib';
import { useSelector, useDispatch } from 'react-redux';
import { signUp } from './../../../store/actions/userActions';

export default function SignUp (props) {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [is_enabled, setIsEnabled] = useState(false);
  const [role, setRole] = useState('customer');
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState(); 
  const [password, setPassword] = useState();
  const [repeat_password, setRepeatPassword] = useState();

  const { sign_up_success, error_message } = useSelector(state => state.userConstructor);

  const handleSubmit = () => {
    const data = {
      email,
      firstname,
      lastname,
      password,
      role,
    };
    dispatch(signUp(data));
  };

  const changeSwitch = () => {
    if (is_enabled===false) {
      return true;
    }
    return false;
  }

  if(sign_up_success) {
    return (
      <Container>
        <View>
          <Row>
            <H2>{email}</H2>
          </Row>
          <Row>
            <Text style={{textAlign: 'center'}}>A confirmation email has been sent to the registered email address.</Text>
          </Row>
          <Row>
            <Text style={{textAlign: 'center'}}>Please follow the instructions in the email to complete your registration.</Text>
          </Row>
          <Row>
            <Button
              onPress={()=>navigation.navigate('Login')}
            >
              Go to login
            </Button>
          </Row>
        </View>
      </Container>
    )
  }

  return (
    <Container>
      {(error_message.type==='SIGN_UP_ERROR') ? <Notification variant={'danger'}>Content error.</Notification> : null}
      <Section>
        <Row>
          {(role==='customer') ? (
            <H3>CREATE CUSTOMER ACCOUNT</H3>
          ):(
            <H3>CREATE COMPANY ACCOUNT</H3>
          )}
        </Row>
        <Row>
          <Input
            label='Firstname'
            value={firstname}
            placeholder='Firstname'
            onChangeText={(text)=> setFirstname(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Lastname'
            value={lastname}
            placeholder='Lastname'
            onChangeText={(text)=> setLastname(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Email'
            type='email'
            value={email}
            placeholder='Email'
            onChangeText={(text)=> setEmail(text)}
          />
        </Row>
        <Row>
          <Input
            label='Password'
            type='password'
            value={password}
            placeholder='Password'
            onChangeText={(text)=> setPassword(text)}
            min={3}
          />
        </Row>
        <Row>
          <Input
            label='Repeat password'
            type='password'
            value={repeat_password}
            placeholder='Repeat password'
            onChangeText={(text)=> setRepeatPassword(text)}
            min={3}
          />
        </Row>
        <Row>
          <View><InputSwitch onChange={()=> setIsEnabled(changeSwitch())} value={is_enabled}/><Text>Accept terms and conditions</Text></View>
        </Row>
        <Row>
          <Button
            variant='primary'
            onPress={handleSubmit}
          >
            Create account
          </Button>
        </Row>
      </Section>
      <Section>
        <Row>
          {(role==='customer') ? (
            <Button
              onPress={()=>setRole('company')}
            >
              Create Company account
            </Button>
          ):(
            <Button
              onPress={()=>setRole('customer')}
            >
              Create Customer account
            </Button>
          )}
        </Row>
      </Section>
    </Container>
  )
};
