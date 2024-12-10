export function formatDate(dateString) {
    const months = ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"];
    // Split dateString into year, month, and day
    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day); // Months are 0-indexed
    return `${day} ${months[date.getMonth()]}, ${year}`;
}
