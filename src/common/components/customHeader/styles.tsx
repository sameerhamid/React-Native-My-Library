import {
  FlexAlignType,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import {Colors} from '../../model/theme/themeModel';
import {scaleFontSize, scaleSize} from '../../utils/scaleSheetUtils';
import {FontFamily} from '../../styles/fonts';

type Styles = {
  container: ViewStyle;
  leftContainer: ViewStyle;
  leftImgVw: ViewStyle;
  leftImg: ImageStyle;
  middleContainer: ViewStyle;
  titleTxt: TextStyle;
  rightContainer: ViewStyle;
  rightImgVw: ViewStyle;
  rightImg: ImageStyle;
};

const styles = (
  colors?: Colors,
  headerTextAlignment: FlexAlignType | undefined = 'center',
  marginHorizantal: number = 10,
): Styles =>
  StyleSheet.create<Styles>({
    container: {
      backgroundColor: 'transparent',
      flexDirection: 'row',
    },
    leftContainer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    leftImgVw: {
      height: scaleSize(25),
      width: scaleSize(25),
      justifyContent: 'center',
      alignSelf: 'center',
      padding: scaleSize(15),
    },
    leftImg: {
      height: scaleSize(20),
      width: scaleSize(17),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    middleContainer: {
      flex: 1,
      alignItems: headerTextAlignment,
      justifyContent: 'center',
      marginHorizontal: scaleSize(marginHorizantal),
    },
    titleTxt: {
      fontSize: scaleFontSize(22),
      fontFamily: FontFamily.AppSans,
      color: colors?.lightBlackInput,
    },
    rightContainer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    rightImgVw: {
      height: scaleSize(25),
      width: scaleSize(25),
      justifyContent: 'center',
      alignSelf: 'center',
    },
    rightImg: {
      height: scaleSize(20),
      width: scaleSize(15),
      resizeMode: 'contain',
      alignSelf: 'center',
    },
  });

export default styles;
