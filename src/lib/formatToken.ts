export function formatToken(
  value: bigint | undefined | null,
  decimals: number
): string {
  if (!value || value === BigInt(0)) return "0.00";

  // Convert the BigInt to a string
  let stringValue = value.toString();

  // Pad the string with leading zeros if necessary
  while (stringValue.length <= decimals) {
    stringValue = "0" + stringValue;
  }

  // Insert the decimal point
  const decimalIndex = stringValue.length - decimals;
  let integerPart = stringValue.slice(0, decimalIndex) || "0";
  const fractionalPart = stringValue
    .slice(decimalIndex, decimalIndex + 2)
    .padEnd(2, "0");

  // Combine integer and fractional parts
  return `${integerPart}.${fractionalPart}`;
}
