import {
  View,
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

import textStyles from '../customText/textStyles';
import {imageStyles} from '../customImage/imageStyle';
import {buttonStyles} from './buttonStyles';
import CustomImage from '../customImage';
import CustomText from '../customText';
import {WithDebounce} from '../../utils/debounceUtil';
import Colors from '../../styles/colors';
import {ThemeModelItem} from '../../model/theme/themeModel';

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
  const theme: ThemeModelItem = useTheme();
  const buttonStyle = buttonStyles(
    theme.colors,
    isSkipButton,
    isCompleteRadiusButton,
  );

  const textStyle = textStyles(theme.colors);
  const imageStyle = imageStyles(theme?.colors);

  const getBorderStyle = (): BorderStyle => {
    if (borderType === BorderType.DOTTED) {
      return BorderStyle.DOTTED;
    }

    if (borderType === BorderType.DASHED) {
      return BorderStyle.DASHED;
    }

    return BorderStyle.SOLID;
  };

  return (
    <TouchableOpacity
      disabled={shouldDisable}
      //@ts-ignore
      onPress={WithDebounce(() => {
        //@ts-ignore
        onPress?.();
      })}
      style={{
        ...buttonStyle.btnView,
        ...(hideBackground && {backgroundColor: Colors.grayBackground}),
        ...(!!borderType && {
          borderWidth: 1,
          borderStyle: getBorderStyle(),
        }),
        ...(!!borderColor && {
          borderWidth: 1,
          borderColor,
        }),
        ...(!!borderRadius && {
          borderWidth: 0,
          borderRadius,
        }),
        ...(shouldDisable && !shouldPreventDisabledStyle
          ? buttonStyle.disabledBtnView
          : {}),
        ...(btnStyle ?? {}),
      }}>
      {leftImage && (
        <CustomImage
          source={leftImage}
          imageStyle={{...imageStyle.margin, ...buttonImageStyle}}
        />
      )}
      <View style={{flex: rightImage || (isSkipButton && showIcon) ? 1 : 0}} />
      <CustomText
        text={title}
        txtSize={textSize}
        txtStyle={{
          ...(isSkipButton
            ? {...textStyle.purple_Bold18}
            : {...textStyle?.white_Bold18}),
          ...(buttonTextStyle ?? {}),
          ...(shouldDisable && !shouldPreventDisabledStyle
            ? isBigText
              ? {...textStyle.white_Bold18}
              : {...textStyle.white_Sans12}
            : {}),
        }}
      />

      {(rightImage || (isSkipButton && showIcon)) && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <CustomImage
            tintColor={rightImageTintColor || theme?.colors.purpleButtonTheme}
            source={rightImage}
            imageStyle={{...imageStyle.margin, ...buttonImageStyle}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
