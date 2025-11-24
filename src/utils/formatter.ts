export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const formatarReal = (valor: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}
