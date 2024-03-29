export default interface Income {
  name: string;
  value: number;
  cyclic: boolean;
  createdAt: string;
  User: string;
}

export type SingleIncome = Income & {
  cyclic: false;
};

export type RegularIncome = Income & {
  cyclic: true;
  dayPeriod: number;
  endDate?: Date;
};
