 
export const convertCapitalizedText = (camelCaseString: string) => {
    const stringWithSpaces = camelCaseString.replace(/([A-Z])/g, ' $1');

    return stringWithSpaces?.charAt(0)?.toUpperCase() + stringWithSpaces?.slice(1);
}
 
export const formatTime = (time: any) => {
    let hour = parseInt(time.split(':')[0]);
    const minute: any = parseInt(time.split(':')[1]);
    const period: any = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    return `${hour}:${minute < 10 ? '0' + minute : minute} ${period}`;
}


export const getLocalDateTime = (dateTime: string | null | undefined) => {
    if (!dateTime) return "";
    const newDate: any = new Date(dateTime);

    const sMonth = padValue(newDate.getMonth() + 1);
    const sDay = padValue(newDate.getDate());
    const sYear = newDate.getFullYear();
    let sHour = newDate.getHours();
    const sMinute = padValue(newDate.getMinutes());
    let sAMPM = "AM";

    const iHourCheck = parseInt(sHour);

    if (iHourCheck > 12) {
        sAMPM = "PM";
        sHour = iHourCheck - 12;
    }
    else if (iHourCheck === 0) {
        sHour = "12";
    }

    sHour = padValue(sHour);

    return sDay + "-" + sMonth + "-" + sYear + "@" + sHour + ":" + sMinute + " " + sAMPM;

}
export const getLocalDate = (date: string | null | undefined) => {
    if (!date) return "";
    const newDate: any = new Date(date);

    const sMonth = padValue(newDate.getMonth() + 1);
    const sDay = padValue(newDate.getDate());
    const sYear = newDate.getFullYear();

    return sDay + "-" + sMonth + "-" + sYear;
} 

function padValue(value: number) {
    return (value < 10) ? "0" + value : value;
}
 