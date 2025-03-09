import { useContext, useEffect, useState } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import { ChargeContext } from "./_utils/ChargeContext";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import Header from "~/components/ui/header";
import * as Location from "expo-location";
import Title from "~/components/ui/title";

export default function Screen() {
  const insets = useSafeAreaInsets();
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
    <View style={{ paddingTop: insets.top }}>
      <Header.Root>
        <Header.Center>
          <FormStepProgressIndicator currentStep={1} totalSteps={3} />
        </Header.Center>
      </Header.Root>
      <Title.Root>
        <Title.Main>Test Test</Title.Main>
        <Title.Sub>This is a sub heading</Title.Sub>
      </Title.Root>

      <Text>AddressStatus: {String(status)}</Text>
      <Text>Address: {address}</Text>
      <Link href="/charge/carStateLookup" asChild>
        <Button>
          <Text>Vor</Text>
        </Button>
      </Link>
    </View>
  );
}
