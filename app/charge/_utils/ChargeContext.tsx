import { createContext, PropsWithChildren, useState } from "react";

type ChargeFormData = {
  batteryLevel?: string;
  mileage?: string;
};

type ChargeContext = {
  formData: ChargeFormData;
  setFormData: (data: Partial<ChargeFormData>) => void;
};

type Props = PropsWithChildren;

export const ChargeContext = createContext<ChargeContext>({
  formData: {},
  setFormData: () => {},
});

export const ChargeProvider = ({ children }: Props) => {
  const [formData, setFormData] = useState<ChargeFormData>({});

  const updateFormData = (data: Partial<ChargeFormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <ChargeContext.Provider value={{ formData, setFormData: updateFormData }}>
      {children}
    </ChargeContext.Provider>
  );
};
