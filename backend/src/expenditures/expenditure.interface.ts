interface Expenditure {
  name: string;
  cyclic: boolean;
  dayPeriod?: number;
  value: number;
  createdAt: Date;
}
export default Expenditure;
