export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
export function getDay(date){
    return dayNames[new Date(date).getDay()];
}