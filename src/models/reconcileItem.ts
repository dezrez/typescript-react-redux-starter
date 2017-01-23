export interface IReconcileItem {
    id: number;
    accountNumber: number;
    date: string;
    amount: number;
    iban: string;
    matchedId: number;
}
