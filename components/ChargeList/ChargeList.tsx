import { Pressable, View } from "react-native";
import { ArrowRight } from "~/lib/icons/ArrowRight";
import { useAppStore } from "~/lib/state/appStore";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Text } from "../ui/text";
import { Link } from "expo-router";

export function ChargeList() {
  const charges = useAppStore((state) => state.charges);

  const orderedCharges = [...charges].sort((a, b) => {
    if (a.startState.timestamp < b.startState.timestamp) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <View className="flex flex-col gap-4 p-6">
      {orderedCharges.map((charge) => (
        <Link key={charge.id} href={`/charge/${charge.id}`} asChild>
          <Pressable>
            <Card
              key={charge.id}
              className="flex flex-row justify-between items-start p-4"
            >
              <View>
                <CardTitle>
                  {charge.address !== "unknown"
                    ? charge.address.city
                    : "Unbekannt"}
                </CardTitle>
                <CardDescription>
                  {charge.startState.timestamp.toLocaleString()}
                </CardDescription>
                <Text>
                  {`Von ${charge.startState.chargingLevel}% auf ${charge.endState?.chargingLevel}%`}
                </Text>
              </View>
              <ArrowRight className="text-foreground self-center" />
            </Card>
          </Pressable>
        </Link>
      ))}
    </View>
  );
}
