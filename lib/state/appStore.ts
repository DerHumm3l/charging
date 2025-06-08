import { Charge } from "~/types/charge";
import { Settings } from "~/types/settings";
import { createWithReset } from "./reset";
import { ChargingState } from "~/types/chargingState";

const testCharges: Charge[] = [
  {
    id: "1",
    startState: {
      chargingLevel: 20,
      timestamp: new Date("2023-10-01T10:00:00Z"),
    },
    endState: {
      chargingLevel: 80,
      timestamp: new Date("2023-10-01T12:00:00Z"),
    },
    address: {
      city: "Berlin",
      street: "Musterstraße",
      postalCode: "10115",
      country: "Germany",
      district: "Mitte",
      streetNumber: "1",
      region: "Berlin",
      subregion: "Berlin",
      name: "Ladepunkt 1",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Musterstraße 1, 10115 Berlin, Germany",
    },
    finished: true,
    mileage: 100,
    car: {
      capacity: 75,
    },
  },
  {
    id: "2",
    startState: {
      chargingLevel: 30,
      timestamp: new Date("2023-10-02T14:00:00Z"),
    },
    endState: {
      chargingLevel: 90,
      timestamp: new Date("2023-10-02T16:00:00Z"),
    },
    address: {
      city: "Hamburg",
      street: "Beispielstraße",
      postalCode: "20095",
      country: "Germany",
      district: "Hamburg-Mitte",
      streetNumber: "2",
      region: "Hamburg",
      subregion: "Hamburg",
      name: "Ladepunkt 2",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Beispielstraße 2, 20095 Hamburg, Germany",
    },
    finished: true,
    mileage: 200,
    car: {
      capacity: 75,
    },
  },
  {
    id: "3",
    startState: {
      chargingLevel: 10,
      timestamp: new Date("2023-10-03T08:00:00Z"),
    },
    endState: {
      chargingLevel: 70,
      timestamp: new Date("2023-10-03T10:00:00Z"),
    },
    address: {
      city: "München",
      street: "Teststraße",
      postalCode: "80331",
      country: "Germany",
      district: "München",
      streetNumber: "3",
      region: "Bayern",
      subregion: "Oberbayern",
      name: "Ladepunkt 3",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Teststraße 3, 80331 München, Germany",
    },
    finished: true,
    mileage: 300,
    car: {
      capacity: 75,
    },
  },
  {
    id: "4",
    startState: {
      chargingLevel: 50,
      timestamp: new Date("2023-10-04T09:00:00Z"),
    },
    endState: {
      chargingLevel: 100,
      timestamp: new Date("2023-10-04T11:00:00Z"),
    },
    address: {
      city: "Frankfurt",
      street: "Demo-Straße",
      postalCode: "60311",
      country: "Germany",
      district: "Frankfurt am Main",
      streetNumber: "4",
      region: "Hessen",
      subregion: "Darmstadt",
      name: "Ladepunkt 4",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Demo-Straße 4, 60311 Frankfurt, Germany",
    },
    finished: true,
    mileage: 400,
    car: {
      capacity: 75,
    },
  },
  {
    id: "5",
    startState: {
      chargingLevel: 0,
      timestamp: new Date("2023-10-05T07:00:00Z"),
    },
    endState: {
      chargingLevel: 60,
      timestamp: new Date("2023-10-05T09:00:00Z"),
    },
    address: {
      city: "Stuttgart",
      street: "Ladeplatz",
      postalCode: "70173",
      country: "Germany",
      district: "Stuttgart-Mitte",
      streetNumber: "5",
      region: "Baden-Württemberg",
      subregion: "Stuttgart",
      name: "Ladepunkt 5",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Ladeplatz 5, 70173 Stuttgart, Germany",
    },
    finished: true,
    mileage: 500,
    car: {
      capacity: 75,
    },
  },
  {
    id: "6",
    startState: {
      chargingLevel: 20,
      timestamp: new Date("2023-10-06T10:00:00Z"),
    },
    endState: {
      chargingLevel: 80,
      timestamp: new Date("2023-10-06T12:00:00Z"),
    },
    address: {
      city: "Düsseldorf",
      street: "Ladeweg",
      postalCode: "40213",
      country: "Germany",
      district: "Düsseldorf-Mitte",
      streetNumber: "6",
      region: "Nordrhein-Westfalen",
      subregion: "Düsseldorf",
      name: "Ladepunkt 6",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Ladeweg 6, 40213 Düsseldorf, Germany",
    },
    finished: true,
    mileage: 600,
    car: {
      capacity: 75,
    },
  },
  {
    id: "7",
    startState: {
      chargingLevel: 30,
      timestamp: new Date("2023-10-07T14:00:00Z"),
    },
    endState: {
      chargingLevel: 90,
      timestamp: new Date("2023-10-07T16:00:00Z"),
    },
    address: {
      city: "Köln",
      street: "Ladeplatz",
      postalCode: "50667",
      country: "Germany",
      district: "Köln-Mitte",
      streetNumber: "7",
      region: "Nordrhein-Westfalen",
      subregion: "Köln",
      name: "Ladepunkt 7",
      isoCountryCode: "DE",
      timezone: "Europe/Berlin",
      formattedAddress: "Ladeplatz 7, 50667 Köln, Germany",
    },
    finished: true,
    mileage: 700,
    car: {
      capacity: 75,
    },
  },
];

export type AppStore = {
  charges: Charge[];
  currentCharge: Charge | undefined;
  settings: Settings;
  updateSettings: (settings: Settings) => void;
  startCharge: (charge: Charge) => void;
  finishCharge: (endState: ChargingState) => void;
};

export const useAppStore = createWithReset<AppStore>()((set) => ({
  // charges: [],
  charges: testCharges,
  currentCharge: undefined,
  settings: { batteryCapacity: 0 },
  finishCharge: (endState: ChargingState) =>
    set((prev) => ({
      currentCharge: undefined,
      charges: [
        ...prev.charges,
        { ...prev.currentCharge!, endState, finished: true },
      ],
    })),
  startCharge: (charge) =>
    set({
      currentCharge: charge,
    }),
  updateSettings: (updatedSettings) =>
    set({
      settings: updatedSettings,
    }),
}));
