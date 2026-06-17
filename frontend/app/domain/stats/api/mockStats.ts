import { AvgMaxDto } from "./types";

// it's purpose is to make requests
export async function mockAvgMaxBars(period: string) {
  const data: AvgMaxDto[] = [
    {
      category: "Work",
      avg: 4 * 3600 * 1000,
      max: 13 * 3600 * 1000,
    },
    {
      category: "Social Networks",
      avg: 3 * 3600 * 1000,
      max: 12 * 3600 * 1000,
    },
    {
      category: "Personal Stuff",
      avg: 2 * 3600 * 1000,
      max: 8 * 3600 * 1000,
    },
  ];

  return data;
}
