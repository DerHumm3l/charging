import { SafeAreaView } from "react-native-safe-area-context";
import ChargeButton from "~/components/ChargeButton";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <ChargeButton />
    </SafeAreaView>
  );
}
