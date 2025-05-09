import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Text } from "~/components/ui/text";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { X } from "~/lib/icons/X";
import Title from "~/components/ui/title";
import { useContext } from "react";
import { ChargeContext } from "./_utils/ChargeContext";
import { Input } from "~/components/ui/input";
import * as Location from "expo-location";
import { useAppStore } from "~/lib/state/appStore";

export default function Screen() {
  const { formData, setFormData } = useContext(ChargeContext);
  const startCharge = useAppStore((state) => state.startCharge);
  const router = useRouter();

  const getAddress = async (): Promise<
    Location.LocationGeocodedAddress | "unknown"
  > => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      return "unknown";
    }

    const location = await Location.getCurrentPositionAsync({});

    if (!location) {
      return "unknown";
    }

    const address = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    return address[0];
  };

  // TODO: error when value is not a number
  // TODO: emphasis for start charging

  return (
    <SafeAreaView className="flex-1">
      <Header
        left={
          <Link href="/charge/step1" asChild>
            <Button variant={"ghost"}>
              <ArrowLeft className="text-foreground" />
            </Button>
          </Link>
        }
        center={<FormStepProgressIndicator currentStep={2} totalSteps={2} />}
        right={
          <Link href="/" asChild>
            <Button variant={"ghost"}>
              <X className="text-foreground" />
            </Button>
          </Link>
        }
      />
      <View className="flex-1 p-4 gap-4">
        <Title.Root>
          <Title.Main>Was ist der aktuelle Ladestand der Batterie?</Title.Main>
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
          onPress={async () => {
            const address = await getAddress();
            const startDate = new Date();

            // TODO: improve function interface
            startCharge({
              id: "",
              car: {
                capacity: 999999,
              },
              finished: false,
              startState: {
                chargingLevel: Number(formData.batteryLevel),
                timestamp: startDate,
              },
              mileage: Number(formData.mileage),
              address,
            });

            router.dismissTo("/");
          }}
        >
          <Text>Laden starten</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
