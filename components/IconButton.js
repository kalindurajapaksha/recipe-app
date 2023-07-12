import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

export default IconButton;
