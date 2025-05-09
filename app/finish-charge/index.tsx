import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import Title from "~/components/ui/title";
import { useAppStore } from "~/lib/state/appStore";

type FinishChargeFormData = {
  batteryLevel?: string;
};

export default function Screen() {
  const finishCharge = useAppStore((state) => state.finishCharge);
  const router = useRouter();

  const [formData, setFormData] = useState<FinishChargeFormData>({});

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 p-4 gap-4">
        <Title.Root>
          <Title.Main>
            Welchen Ladestand hat die Batterie nach dem Ladevorgang?
          </Title.Main>
        </Title.Root>
        <Input
          autoFocus
          maxLength={9}
          inputMode="numeric"
          className="text-6xl h-48 text-center border-none!"
          value={formData.batteryLevel}
          onChangeText={(batteryLevel) => setFormData({ batteryLevel })}
        />
      </View>
      <View className="h-16 px-4 flex-row items-center justify-around">
        <Button
          disabled={!formData.batteryLevel}
          variant={"default"}
          className="w-full"
          onPress={() => {
            finishCharge({
              timestamp: new Date(),
              chargingLevel: Number(formData.batteryLevel),
            });

            router.dismissTo("/");
          }}
        >
          <Text>Laden beenden</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
