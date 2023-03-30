export default function formatMoney(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
}
