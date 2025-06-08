import { Link } from "expo-router";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ChargeButton from "~/components/ChargeButton";
import { ChargeList } from "~/components/ChargeList/ChargeList";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Settings } from "~/lib/icons/Settings";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Header
          right={
            <Link href="/settings" asChild>
              <Button variant={"ghost"}>
                <Settings className="text-foreground" />
              </Button>
            </Link>
          }
        />
        <ChargeButton />
        <ChargeList />
      </ScrollView>
    </SafeAreaView>
  );
}
