import { Link } from "expo-router";
import { Pressable, View } from "react-native";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { useAppStore } from "~/lib/state/appStore";

export const BatteryCapacitySettingCard: React.FC<{}> = () => {
  const { batteryCapacity } = useAppStore((state) => state.settings);
  const updateSettings = useAppStore((state) => state.updateSettings);

  return (
    <Link href={`/settings/batteryCapacity`} asChild>
      <Pressable>
        <Card className="flex flex-row justify-between items-start p-4">
          <View>
            <CardTitle>Batteriespeicher</CardTitle>
            <Text>Anpassen für zukünftige Ladevorgänge</Text>
          </View>
          <ArrowRight className="text-foreground self-center" />
        </Card>
      </Pressable>
    </Link>
  );
};
