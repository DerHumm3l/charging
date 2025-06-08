import { View } from "react-native";
import { BatteryCapacitySettingCard } from "./components/BatteryCapacity/BatteryCapacitySettingCard";

type Props = {};

export const SettingsList: React.FC<Props> = () => {
  return (
    <View className="flex flex-col gap-4 p-6">
      <BatteryCapacitySettingCard />
    </View>
  );
};
