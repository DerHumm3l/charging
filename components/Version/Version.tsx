import { View } from "react-native";
import { Text } from "~/components/ui/text";
import Constants from "expo-constants";

export const Version: React.FC<{}> = () => {
  return (
    <View className="flex items-center">
      <Text>Version: {Constants.expoConfig?.version}</Text>
    </View>
  );
};
