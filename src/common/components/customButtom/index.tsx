import {
  View,
  Text,
  GestureResponderEvent,
  ViewStyle,
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import React, {ReactElement} from 'react';
import {BorderStyle, BorderType} from '../../constants/enums';
import {useTheme} from '@react-navigation/native';
import buttonStyles from './buttonStyles';
import textStyles from '../customText/textStyles';
import {imageStyles} from '../customImage/imageStyle';

interface Props {
  onPress?: ((_event: GestureResponderEvent) => void) | undefined;
  title?: string;
  btnStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  shouldDisable?: boolean;
  hideBackground?: boolean;
  borderColor?: string;
  borderType?: BorderType;
  textSize?: number;
  borderRadius?: number;
  leftImage?: ImageSourcePropType;
  rightImage?: ImageSourcePropType;
  buttonImageStyle?: ImageStyle;
  shouldPreventDisabledStyle?: boolean;
  rightImageTintColor?: string;
  leftImageTintColor?: string;
  isSkipButton?: boolean;
  isCompleteRadiusButton?: boolean;
  showIcon?: boolean;
  isBigText?: boolean;
}
const defaultProps: Props = {
  onPress: undefined,
  title: '',
  btnStyle: {},
  buttonTextStyle: {},
  shouldDisable: false,
  hideBackground: false,
  borderColor: '',
  borderType: undefined,
  textSize: undefined,
  borderRadius: undefined,
  leftImage: undefined,
  rightImage: undefined,
  buttonImageStyle: {},
  shouldPreventDisabledStyle: false,
  rightImageTintColor: undefined,
  leftImageTintColor: '',
  isSkipButton: false,
  isCompleteRadiusButton: false,
  showIcon: false,
  isBigText: false,
};

const CustomButton = (props: typeof defaultProps): ReactElement => {
  const {
    onPress,
    title,
    btnStyle,
    buttonTextStyle,
    shouldDisable,
    hideBackground,
    borderColor,
    borderType,
    textSize,
    borderRadius,
    leftImage,
    rightImage,
    buttonImageStyle,
    shouldPreventDisabledStyle,
    rightImageTintColor,
    leftImageTintColor,
    isSkipButton,
    isCompleteRadiusButton,
    showIcon,
    isBigText,
  } = props;
  const theme = useTheme();
  const buttonStyle = buttonStyles(
    theme.colors,
    isSkipButton,
    isCompleteRadiusButton,
  );

  const textStyle = textStyles(theme.colors);
  const iamgeStyle = imageStyles(theme?.colors);

  const getBorderStyle = (): BorderStyle => {
    if (borderType === BorderType.DOTTED) {
      return BorderStyle.DOTTED;
    }

    if (borderType === BorderType.DASHED) {
      return BorderStyle.DASHED;
    }

    return BorderStyle.SOLID;
  };

  return <TouchableOpacity disabled={shouldDisable}></TouchableOpacity>;
};

export default CustomButton;
