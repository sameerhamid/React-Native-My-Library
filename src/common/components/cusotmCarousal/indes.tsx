import {View, Text, ListRenderItem} from 'react-native';
import React, {JSXElementConstructor, ReactElement} from 'react';
import {scaleSize} from '../../utils/scaleSheetUtils';
import Carousel from 'react-native-snap-carousel';
import {screenWidth} from '../../constants/dimensions';
interface Props {
  isAutoPlay?: boolean;
  loop?: boolean;
  firstItem?: number;
  itemWidth?: number;
  inactiveSlideScale?: number;
  carouselRef?: React.MutableRefObject<null>;
  data?: {imageType: string; imageUri: string}[];
  renderItem?: ({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}

const defaultProps: Props = {
  isAutoPlay: false,
  loop: false,
  firstItem: 0,
  data: undefined,
  itemWidth: scaleSize(275),
  carouselRef: undefined,
  inactiveSlideScale: 0.75,
  renderItem: undefined,
};
const CustomCarousal = (props: typeof defaultProps) => {
  const {
    isAutoPlay,
    carouselRef,
    loop,
    firstItem,
    data,
    itemWidth,
    inactiveSlideScale,
    renderItem,
  } = props;
  return (
    <View>
      <Carousel
        autoplay={isAutoPlay}
        loop={loop}
        ref={carouselRef}
        //@ts-ignore
        data={data}
        hasParallaxImages
        sliderWidth={screenWidth}
        itemWidth={itemWidth}
        removeClippedSubviews={false}
        firstItem={0}
        renderItem={renderItem}
        inactiveSlideScale={inactiveSlideScale}
      />
    </View>
  );
};

export default CustomCarousal;
