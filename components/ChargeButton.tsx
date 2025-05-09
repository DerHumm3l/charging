import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { Zap } from "~/lib/icons/Zap";
import { ZapOff } from "~/lib/icons/ZapOff";
import { useAppStore } from "~/lib/state/appStore";
import { Button } from "./ui/button";

export default function ChargeButton() {
  const currentCharge = useAppStore((state) => state.currentCharge);

  const currentlyCharging = !!currentCharge;

  const icon = currentlyCharging ? (
    <ZapOff className="text-foreground" size={28} strokeWidth={1.5} />
  ) : (
    <Zap className="text-foreground" size={28} strokeWidth={1.5} />
  );

  return (
    <View className="flex gap-1">
      <Link href={currentlyCharging ? "/finish-charge" : "/charge"} asChild>
        <Button variant="outline" size={"main"} className="flex flex-row gap-3">
          {icon}
          <Text>{currentlyCharging ? "Laden beenden" : "Laden"}</Text>
        </Button>
      </Link>
      {currentlyCharging && (
        <Text className="text-muted-foreground text-sm">{`Laden seit ${currentCharge.startState.timestamp.toLocaleString()}`}</Text>
      )}
    </View>
  );
}
