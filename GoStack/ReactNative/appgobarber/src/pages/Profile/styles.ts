import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px ${Platform.OS === 'ios' ? 40 : 150}px;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 64px;

`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0 24px;
  align-self: flex-start;
`;

export const UserAvatarButton = styled.TouchableOpacity`
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 93px;
  align-self: center;
`;
