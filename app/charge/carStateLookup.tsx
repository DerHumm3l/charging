import { useContext } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import { ChargeContext } from "./_utils/ChargeContext";
import { Button } from "~/components/ui/button";
import { Link } from "expo-router";
import Header from "~/components/ui/header";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import { X } from "~/lib/icons/X";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";

export default function Screen() {
  const insets = useSafeAreaInsets();
  const context = useContext(ChargeContext);

  return (
    <View className="h-screen flex flex-col" style={{ paddingTop: insets.top }}>
      <Header
        left={
          <Link href="/charge/locationTimeLookup" asChild>
            <Button variant={"ghost"}>
              <ArrowLeft className="text-foreground" />
            </Button>
          </Link>
        }
        center={<FormStepProgressIndicator currentStep={2} totalSteps={3} />}
        right={
          <Link href="/" asChild>
            <Button variant={"ghost"}>
              <X className="text-foreground" />
            </Button>
          </Link>
        }
        className="grow-0"
      />
      <View className="grow">
        <Text>Car State</Text>
      </View>
      <View className="grow-0">
        <Link href="/charge/confirm" asChild>
          <Button>
            <Text>Vor</Text>
          </Button>
        </Link>
      </View>
    </View>
  );
}
