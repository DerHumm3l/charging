import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useRef, useCallback, useEffect } from "react";
import { View } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ChargeButton from "~/components/ChargeButton";
import { Button } from "~/components/ui/button";
import { Sheet, useSheetRef } from "~/components/ui/sheet";
import { Text } from "~/components/ui/text";

export default function Screen() {
  const bottomSheetModalRef = useSheetRef();

  return (
    <SafeAreaView className="flex-1">
      <ChargeButton />
      <Button
        onPress={() => {
          bottomSheetModalRef.current?.present();
          bottomSheetModalRef.current?.expand();
        }}
      >
        <Text>Toggle</Text>
      </Button>
      <Sheet
        ref={bottomSheetModalRef}
        snapPoints={["80%"]}
        enableDynamicSizing={false}
      >
        <BottomSheetView style={{ backgroundColor: "##1c1c1c" }}>
          <Text>Hi mom </Text>
          <Button>
            <Text>Nice</Text>
          </Button>
        </BottomSheetView>
      </Sheet>
    </SafeAreaView>
  );
}
