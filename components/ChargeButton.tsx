import { Link } from "expo-router";
import { Text } from "~/components/ui/text";
import { PlugZap } from "~/lib/icons/PlugZap";
import { Button } from "./ui/button";

export default function ChargeButton() {
  return (
    <Link href="/charge" asChild>
      <Button variant="outline" size={"main"} className="flex flex-row gap-2">
        <PlugZap className="text-foreground" size={28} strokeWidth={1.5} />
        <Text>Laden</Text>
      </Button>
    </Link>
  );
}
