import * as Location from "expo-location";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Text } from "~/components/ui/text";
import Title from "~/components/ui/title";
import { X } from "~/lib/icons/X";

export default function Screen() {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const requestLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setStatus(status === "granted");

      if (status !== "granted") {
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      const addressResponse = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      if (addressResponse.length > 0) {
        const { street, city, postalCode, region, country } =
          addressResponse[0];
        setAddress(`${street}, ${city}, ${postalCode}, ${region}, ${country}`);
      }
    };

    requestLocation();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <Header
        center={<FormStepProgressIndicator currentStep={1} totalSteps={3} />}
        right={
          <Link href="/" asChild>
            <Button variant={"ghost"}>
              <X className="text-foreground" />
            </Button>
          </Link>
        }
      />
      <View className="flex-1 p-4">
        <Title.Root>
          <Title.Main>Test Test</Title.Main>
          <Title.Sub>This is a sub heading</Title.Sub>
        </Title.Root>
        <Text>AddressStatus: {String(status)}</Text>
        <Text>Address: {address}</Text>
      </View>
      <View className="h-16 px-4 flex-row items-center justify-around">
        <Link href="/charge/carStateLookup" asChild>
          <Button variant={"default"} className="w-full">
            <Text>Weiter</Text>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
