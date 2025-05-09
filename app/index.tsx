import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ChargeButton from "~/components/ChargeButton";
import { ChargeList } from "~/components/ChargeList/ChargeList";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <ChargeButton />
        <ChargeList />
      </ScrollView>
    </SafeAreaView>
  );
}
