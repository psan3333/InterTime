/*
 *
 */
export type AvgMaxDto = {
  category: string;
  avg: number;
  max: number;
};

export type CategoriesPieChartDto = {
  category: string;
  timePercentage: number; // format: miliseconds / (1000 * 3600)
};

// export type InternetTimeByPeriodBarsDto = {};
