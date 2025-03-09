import { useContext } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import { ChargeContext } from "./_utils/ChargeContext";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";
import Header from "~/components/ui/header";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";

export default function Screen() {
  const insets = useSafeAreaInsets();
  const context = useContext(ChargeContext);

  return (
    <View style={{ paddingTop: insets.top }}>
      <Header.Root>
        <Header.Center>
          <FormStepProgressIndicator currentStep={2} totalSteps={3} />
        </Header.Center>
      </Header.Root>
      <Text>Car State</Text>
      <Link href="/charge/locationTimeLookup" asChild>
        <Button>
          <Text>Zurück</Text>
        </Button>
      </Link>
      <Link href="/charge/confirm" asChild>
        <Button>
          <Text>Vor</Text>
        </Button>
      </Link>
    </View>
  );
}
