export default interface Transaction {
    id: number
    account_id: number
    type: string
    description: string
    amount: number
    dated: string
  }