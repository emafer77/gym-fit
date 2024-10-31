import * as React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import "../global.css";
function Carrusel() {
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        loop
        width={width}
        height={height - 200}
        autoPlay={false}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ index }) => (
          <View className="flex-1 justify-center m-6 border-2 border-zinc-500 rounded-lg">
            <Text className="text-center text-3x1">{index}</Text>
          </View>
        )}
      />
    </View>
  );
}

export default Carrusel;
