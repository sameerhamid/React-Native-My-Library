import {StyleSheet, ViewStyle} from 'react-native';

import {scaleSize} from '../../utils/scaleSheetUtils';
import {Colors} from '../../model/theme/themeModel';
import {showConsole} from '../../utils/logUtils';

type Styles = {
  btnView: ViewStyle;
  disabledBtnView: ViewStyle;
  actionSheetItem: ViewStyle;
  cancelBtn: ViewStyle;
  purpleButtonWidth129: ViewStyle;
};
export const buttonStyles = (
  colors?: Colors,
  isSkipButton?: boolean,
  isCompleteRadiusButton?: boolean,
): Styles =>
  StyleSheet.create<Styles>({
    btnView: {
      height: scaleSize(50),
      paddingVertical: scaleSize(10),
      paddingHorizontal: scaleSize(8),
      borderRadius: isCompleteRadiusButton ? scaleSize(10) : scaleSize(15),
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      flexDirection: 'row',
      backgroundColor: isSkipButton
        ? colors?.white100
        : colors?.purpleButtonTheme,
      borderBottomLeftRadius: isCompleteRadiusButton ? scaleSize(10) : 0,
      borderBottomRightRadius: isCompleteRadiusButton ? scaleSize(10) : 0,
      borderWidth: isSkipButton ? 1 : 0,
      borderColor: colors?.purpleButtonTheme,
    },

    disabledBtnView: {
      backgroundColor: colors?.purpleDisable,
    },

    actionSheetItem: {
      borderRadius: scaleSize(11),
      paddingHorizontal: scaleSize(0),
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },

    cancelBtn: {
      marginTop: 0,
      borderRadius: scaleSize(10),
      backgroundColor: colors?.cyanTheme,
    },

    purpleButtonWidth129: {
      width: scaleSize(129),
    },
  });
