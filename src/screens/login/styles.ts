import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  flex: 1;
  background: purple;
  justify-content: center;
`;

export const HeaderContainer = styled.View`
  margin-bottom: 48px;
`;

export const Form = styled.View`
  margin-right: 5%;
  margin-left: 5%;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 8px 16px 8px 13px;
  margin-bottom: 16px;
`;

export const InputDataContainer = styled.View`
  flex: 1;
`;

export const StyledInput = styled.TextInput.attrs({
  selectionColor: '#fff',
})`
  color: #fff;
  padding: 4px;
  font-size: 16px;
`;

export const InputText = styled.Text`
  font-size: 12px;
  opacity: 0.5;
  color: #fff;
  font-family: 'Heebo-Regular';
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background: #ffffff;
  border-radius: 44px;
  padding: 0px 20px;
  height: 36px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const InputButtonText = styled.Text`
  font-size: 16px;
  color: #b22e6f;
  font-family: 'Heebo-Medium';
`;
