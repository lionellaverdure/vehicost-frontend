import { Pressable, Text } from "react-native";
import { global } from "../styles/style";

const SimpleButton = ({ callback, textButton, ...props }) => {
  const handlePress = () => {
    callback();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        global.button,
        {
          backgroundColor: pressed
            ? global.buttonPressed.backgroundColor
            : global.button.backgroundColor,
        },
      ]}
      onPress={handlePress}
    >
      <Text style={global.buttonTxt}>{textButton}</Text>
    </Pressable>
  );
};

export default SimpleButton;
