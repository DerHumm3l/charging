import { Stack } from "expo-router";

export default function FinishChargeLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index"></Stack.Screen>
    </Stack>
  );
}
