import { Stack } from "expo-router";
import { ChargeProvider } from "./_utils/ChargeContext";

export default function ChargeLayout() {
  return (
    <ChargeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="step1"></Stack.Screen>
        <Stack.Screen name="step2"></Stack.Screen>
      </Stack>
    </ChargeProvider>
  );
}
