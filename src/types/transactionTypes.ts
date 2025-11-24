export enum TransactionTypeEnum {
  LAZER = "Lazer",
  CONTAS = "Contas",
  ALIMENTACAO = "Alimentação",
  TRANSPORTE = "Transporte",
  INVESTIMENTOS = "Investimentos",
  PETS = "Pets",
  SAUDE = "Saúde",
  ASSINATURAS = "Assinaturas",
  SALARIO = "Salário",
}

export const TransactionTypesOut = [
    TransactionTypeEnum.ALIMENTACAO,
    TransactionTypeEnum.TRANSPORTE,
    TransactionTypeEnum.LAZER,
    TransactionTypeEnum.CONTAS,
    TransactionTypeEnum.INVESTIMENTOS,
    TransactionTypeEnum.PETS,
    TransactionTypeEnum.SAUDE,
    TransactionTypeEnum.ASSINATURAS,
  ]

  export const TransactionTypesIn = [
    TransactionTypeEnum.SALARIO,
  ]

  export const TransactionTypes = [
    ...TransactionTypesIn,
    ...TransactionTypesOut
  ]