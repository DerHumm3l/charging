import { Link } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Text } from "~/components/ui/text";
import { ArrowLeft } from "~/lib/icons/ArrowLeft";
import { X } from "~/lib/icons/X";
import Title from "~/components/ui/title";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
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
      />
      <View className="flex-1 p-4">
        <Title.Root>
          <Title.Main>Car State</Title.Main>
          <Title.Sub>This is a sub heading</Title.Sub>
        </Title.Root>
      </View>
      <View className="h-16 px-4 flex-row items-center justify-around">
        <Link href="/charge/confirm" asChild>
          <Button variant={"default"} className="w-full">
            <Text>Weiter</Text>
          </Button>
        </Link>
      </View>
    </SafeAreaView>
  );
}
