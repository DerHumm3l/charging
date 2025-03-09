import { View } from "react-native";
import { Text } from "~/components/ui/text";

type Props = {
  currentStep: number;
  totalSteps: number;
};

export default function FormStepProgressIndicator({
  currentStep,
  totalSteps,
}: Props) {
  return (
    <View>
      <Text className="text-sm text-muted-foreground font-semibold">{`Schritt ${currentStep} von ${totalSteps}`}</Text>
    </View>
  );
}
