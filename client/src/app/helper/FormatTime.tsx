export default function formatTime(dateTimeStr: string | undefined) {
    if (!dateTimeStr) return ''

    const date = new Date(dateTimeStr);
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12
    hours = hours ? hours : 12

    return `${hours}:${minutes} ${ampm}`;
};