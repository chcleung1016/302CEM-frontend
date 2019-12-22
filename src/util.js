export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
export function getDay(date) {
  return dayNames[new Date(date).getDay()];
}
export function toShortNumber(num) {
  if (num > 1000000) return Math.round(num / 1000000) + "M";
  if (num > 1000) return Math.round(num / 1000) + "K";
  return num;
}
