import { View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export default function TabOneScreen() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
      // Tried using or not using className: same result on web.
      // width: 100,
      // height: 100,
      // backgroundColor: 'blue',
    };
  });

  return (
    <View className='flex-1 items-center justify-center bg-gray-900'>
      <GestureDetector gesture={panGesture}>
        <Animated.View 
          style={animatedStyle}
          className='w-16 h-16 bg-blue-500 rounded-lg'
        />
      </GestureDetector>
    </View>
  );
}
