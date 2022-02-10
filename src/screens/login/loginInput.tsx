import React from 'react';
import {
  InputButton,
  InputButtonText,
  InputContainer,
  InputDataContainer,
  StyledInput,
  InputText,
} from './styles';

interface LoginInputProps {
  inputLabel: string;
  buttonTitle?: string;
}

export const LoginInput: React.FC<LoginInputProps> = ({
  inputLabel,
  buttonTitle = '',
}) => {
  return (
    <InputContainer>
      <InputDataContainer>
        <InputText>{inputLabel}</InputText>
        <StyledInput secureTextEntry={!!buttonTitle} />
      </InputDataContainer>
      {!!buttonTitle && (
        <InputButton>
          <InputButtonText>{buttonTitle}</InputButtonText>
        </InputButton>
      )}
    </InputContainer>
  );
};
