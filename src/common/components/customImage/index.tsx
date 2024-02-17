import {Image, ImageSourcePropType, ImageStyle, View} from 'react-native';
import {ImageSourceType} from '../../constants/enums';
import {useTheme} from '@react-navigation/native';
import {imageStyles} from './imageStyle';

interface Props {
  source?: ImageSourcePropType | string;
  tintColor?: string;
  imageStyle?: ImageStyle;
  sourceType?: ImageSourceType;
  borderRadious?: number;
}

const defaultProps: Props = {
  source: undefined,
  tintColor: undefined,
  imageStyle: undefined,
  sourceType: undefined,
  borderRadious: 0,
};

// Image component with custom styling to display images

const CustomImage = (props: typeof defaultProps): React.ReactElement => {
  const {source, tintColor, imageStyle, sourceType, borderRadious} = props;
  const theme = useTheme();
  const imageStyled = imageStyles(theme?.colors, borderRadious); // instance of common image style to implement  styling

  return source ? (
    <Image
      resizeMode="contain"
      style={{
        ...imageStyled.icon_22, // default style object
        ...(imageStyle ?? {}), // overrides the default style of the image
        ...{tintColor: tintColor ?? ''}, // to add tint color, can be passed through props
      }}
      //@ts-ignore
      source={sourceType === ImageSourceType.URL ? {uri: `${source}`} : source} // source will display image based on if it containes a url or is a locally stored image
    />
  ) : (
    <View />
  );
};

export default CustomImage;
