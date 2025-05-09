import { Link } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import Title from "~/components/ui/title";
import { X } from "~/lib/icons/X";
import { ChargeContext } from "./_utils/ChargeContext";

export default function Screen() {
  const { formData, setFormData } = useContext(ChargeContext);

  // TODO: error when value is not a number

  return (
    <SafeAreaView className="flex-1">
      <Header
        center={<FormStepProgressIndicator currentStep={1} totalSteps={2} />}
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
          <Title.Main>Was ist der aktuelle Kilometerstand?</Title.Main>
        </Title.Root>
        <Input
          autoFocus
          maxLength={9}
          inputMode="numeric"
          className="text-6xl h-48 text-center border-none!"
          value={formData.mileage}
          onChangeText={(mileage) => setFormData({ mileage })}
        />
      </View>
      <View className="h-16 px-4 flex-row items-center justify-around">
        <Link href="/start-charge/step2" asChild>
          <Button
            disabled={!formData.mileage}
            variant={"default"}
            className="w-full"
            onPress={() => {}}
          >
            <Text>Weiter</Text>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
