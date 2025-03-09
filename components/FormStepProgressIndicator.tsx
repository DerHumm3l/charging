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
      <Text>{`Schritt ${currentStep} von ${totalSteps}`}</Text>
    </View>
  );
}
