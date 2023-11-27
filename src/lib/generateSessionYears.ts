const generateSessionYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2000;
    const yearRange = [];

    for (let year = currentYear; year >= startYear; year--) {
        const formattedYear = `${year}-${year + 1}`;
        yearRange.push(formattedYear);
    }

    return yearRange;
}


export default generateSessionYears;