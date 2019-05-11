import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

export default class SignIn extends Component<Props> {
  state = {}

  _renderSocialLogInButtonGroup = () => {
    const {onPressLogIn} = this.props;
    return (
      <ButtonGroup>
        <Button onPress={() => onPressLogIn()} color={'red'}>
          <ButtonText>
            Google
          </ButtonText>
        </Button>
        <Button onPress={() => onPressLogIn()} color={'yellow'}>
          <ButtonText color={'black'}>
            카카톡 로그인
          </ButtonText>
        </Button>
      </ButtonGroup>
    )
  };

  _renderJoinAndLogInButtonGroup = () => {
    const {onPressLogIn} = this.props;
    return (
      <ButtonGroup>
        <Button color={'white'} style={{width: 150, height: 40}}>
          <ButtonText color={'#7661ff'}>JOIN</ButtonText>
        </Button>
        <Button onPress={() => onPressLogIn()} color={'white'} style={{width: 150, height: 40}}>
          <ButtonText color={'#7661ff'}>LOGIN</ButtonText>
        </Button>
      </ButtonGroup>
    )
  };

  render() {
    const {onPressLogIn} = this.props;
    return (
      <Container>
        <LogoWrapper>
          <Text style={{fontSize: 30, fontWeight: '700', color: 'white'}}>
            여기에 로고를 삽입해 주세요.
          </Text>
        </LogoWrapper>
        <FormWrapper>
          {this._renderSocialLogInButtonGroup()}
          <InputFormGroup>
            <TypeIDForm keyboardType={'email-address'} placeholder={'USER ID'}/>
            <TypePasswordForm secureTextEntry={true} placeholder={'PASSWORD'}/>
          </InputFormGroup>
          {this._renderJoinAndLogInButtonGroup()}
        </FormWrapper>
      </Container>
    )
  }
}

const TypeIDForm = styled.TextInput`
  width: 100%;
  height: 50;
  padding-left: 20;
  padding-right: 20;
  border-radius: 5;
  background-color: white;
  color: #7661ff;
`;

const TypePasswordForm = styled.TextInput`
  margin-top: 30;
  width: 100%;
  height: 50;
  padding-left: 20;
  padding-right: 20;
  border-radius: 5;
  color: #7661ff;
  background-color: white;
`;

const ButtonGroup = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const InputFormGroup = styled.View`
  flex: 4;
`;

const ButtonText = styled.Text`
  font-size: 15;
  color: ${props => props.color ? props.color : 'white'};
  font-weight: 700;
`;

const Button = styled.TouchableOpacity`
  margin-top: 20;
  background-color: ${props => props.color ? props.color : 'black'};
  width: 170;
  height: 35;
  border-radius: 3;
  justify-content: center;
  align-items: center;
`;

const color = '#a07bff';

const LogoWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a07bff;
`;
const FormWrapper = styled.View`
  flex: 1;
  padding-left: 10;
  padding-right: 10;
  background-color: #a07bff;
  justify-content: space-around;
`;

const Container = styled.View`
  flex: 1;
  background-color: white;
`;
