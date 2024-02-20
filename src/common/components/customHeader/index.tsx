import {
  View,
  Text,
  ImageSourcePropType,
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  TextStyle,
  ViewStyle,
  FlexAlignType,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {ThemeModelItem} from '../../model/theme/themeModel';
import {useTheme} from '@react-navigation/native';
import stylesObj from './styles';
import {isIOS} from '../../constants/platformInfo';
import Spacer from '../utility/spacer';
import {scaleSize} from '../../utils/scaleSheetUtils';

interface Props {
  title?: string;
  leftAccessories?: ImageSourcePropType;
  leftAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  rightAccessories?: ImageSourcePropType;
  rightAccessoriesPress?: ((_event: GestureResponderEvent) => void) | undefined;
  leftImg?: StyleProp<ImageStyle>;
  rightImage?: StyleProp<ImageStyle>;
  titleTxt?: StyleProp<TextStyle>;
  showSpaceFromTop?: boolean;
  containerStyle?: ViewStyle;
  headerTextAlignment?: FlexAlignType | undefined;
  marginHorizantal?: number;
}

const defaultProps: Props = {
  title: '',
  leftAccessories: undefined,
  leftAccessoriesPress: undefined,
  rightAccessories: undefined,
  rightAccessoriesPress: undefined,
  leftImg: undefined,
  rightImage: undefined,
  titleTxt: undefined,
  showSpaceFromTop: true,
  headerTextAlignment: undefined,
  marginHorizantal: undefined,
};

const CustomHeader = (props: typeof defaultProps): React.ReactElement => {
  const theme: ThemeModelItem = useTheme();
  const {
    title,
    leftAccessories,
    leftAccessoriesPress,
    rightAccessories,
    rightAccessoriesPress,
    leftImg,
    rightImage,
    titleTxt,
    showSpaceFromTop,
    headerTextAlignment,
    marginHorizantal,
  } = props;

  const styles = stylesObj(theme.colors, headerTextAlignment, marginHorizantal);

  // left accessories view

  const leftContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.leftContainer}>
          {leftAccessories ? (
            <TouchableOpacity
              style={styles.leftImgVw}
              onPress={leftAccessoriesPress}>
              <Image
                source={leftAccessories}
                style={[styles.leftImg, leftImg]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }
    return null;
  };

  // middle title view

  const middleVw = (): React.ReactNode => (
    <View style={styles.middleContainer}>
      <Text style={[styles.titleTxt]}>{title ?? ''}</Text>
    </View>
  );

  //   right accessories veiw

  const rightContainer = (): React.ReactNode => {
    if (leftAccessories || rightAccessories) {
      return (
        <View style={styles.rightContainer}>
          {rightAccessories ? (
            <TouchableOpacity
              style={styles.rightImgVw}
              onPress={rightAccessoriesPress}>
              <Image
                source={rightAccessories}
                style={[styles.rightImg, rightImage]}
              />
            </TouchableOpacity>
          ) : undefined}
        </View>
      );
    }
    return null;
  };

  return (
    <>
      {!isIOS && (showSpaceFromTop || defaultProps.showSpaceFromTop) && (
        <Spacer height={scaleSize(15)} />
      )}
      <View style={[styles.container, props?.containerStyle]}>
        {/* left side container  */}
        {leftContainer()}

        {/* middle container containing title text  */}

        {middleVw()}

        {/* right side container  */}

        {rightContainer()}
      </View>
    </>
  );
};

export default CustomHeader;
