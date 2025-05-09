import { Link } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { throwIfNull } from "~/lib/error";
import { id } from "~/lib/id";
import { useAppStore } from "~/lib/state/appStore";
import { Charge } from "~/types/charge";

type ChargeFormData = {
  startChargingLevel?: number;
  mileage?: number;
  location?: string;
  startTime?: Date;
};

const createCharge = (
  formData: ChargeFormData,
  batteryCapacity: number
): Charge => {
  throwIfNull(formData?.location);
  throwIfNull(formData?.startChargingLevel);
  throwIfNull(formData?.startTime);
  throwIfNull(formData?.mileage);

  return {
    id: id(),
    finished: false,
    startState: {
      chargingLevel: formData.startChargingLevel,
      timestamp: formData.startTime,
    },
    car: {
      capacity: batteryCapacity,
    },
    address: formData.location,
    mileage: formData.mileage,
  };
};

export default function ChargeForm() {
  const [formData, setFormData] = useState<ChargeFormData>({});
  const startCharge = useAppStore((state) => state.startCharge);
  const { batteryCapacity } = useAppStore((state) => state.settings);

  const startCharging = () => {
    const charge = createCharge(formData, batteryCapacity);
    startCharge(charge);
  };

  return <View role="form"></View>;
}
