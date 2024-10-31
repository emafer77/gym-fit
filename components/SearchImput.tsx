import { View, TextInput } from "react-native";
import React from "react";

const SearchInput = () => {
  const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

  return (
    <View>
      <TextInput
        className="border-2 "
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

export default SearchInput;
