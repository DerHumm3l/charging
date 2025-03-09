import { Stack } from "expo-router";
import { ChargeProvider } from "./_utils/ChargeContext";
import FormStepProgressIndicator from "~/components/FormStepProgressIndicator";

export default function ChargeLayout() {
  return (
    <ChargeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="locationTimeLookup"></Stack.Screen>
        <Stack.Screen name="carStateLookup"></Stack.Screen>
        <Stack.Screen name="confirm"></Stack.Screen>
      </Stack>
    </ChargeProvider>
  );
}
