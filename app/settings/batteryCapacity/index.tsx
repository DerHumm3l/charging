import { useNavigation, useRouter } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import Header from "~/components/ui/header";
import { Text } from "~/components/ui/text";
import { X } from "~/lib/icons/X";

export default function Screen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1">
      <Header
        left={
          <Button variant={"ghost"} onPress={() => navigation.goBack()}>
            <X className="text-foreground" />
          </Button>
        }
      />
      <View>
        <Text>Battery Setting</Text>
      </View>
    </SafeAreaView>
  );
}
