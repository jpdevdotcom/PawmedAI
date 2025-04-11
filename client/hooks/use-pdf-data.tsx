// hooks/use-pdf-data.ts
import { DssDataProps } from "@/app/data/dss-data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IPDFData {
	animalData: DssDataProps[];
	setAnimalData: (data: DssDataProps[]) => void;
}

export const usePdfData = create<IPDFData>()(
	persist(
		(set) => ({
			animalData: [],
			setAnimalData: (data) => set({ animalData: data }),
		}),
		{
			name: "pdf-data-storage", // Unique key for localStorage
		}
	)
);
