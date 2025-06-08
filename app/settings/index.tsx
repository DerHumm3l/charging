import { Link } from "expo-router";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { SettingsList } from "~/components/SettingsList/SettingsList";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Text } from "~/components/ui/text";
import { Version } from "~/components/Version/Version";
import { X } from "~/lib/icons/X";

export default function Screen() {
  return (
    <SafeAreaView className="flex-1">
      <Header
        left={
          <Link href="/" asChild>
            <Button variant={"ghost"}>
              <X className="text-foreground" />
            </Button>
          </Link>
        }
        center={<Text className="text-lg font-semibold">Einstellungen</Text>}
      />
      <ScrollView>
        <SettingsList />
        <Version />
      </ScrollView>
    </SafeAreaView>
  );
}
