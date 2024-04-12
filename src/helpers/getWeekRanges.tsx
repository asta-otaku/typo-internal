export default function getWeekRanges() {
    const weekRanges = [];
    const today = new Date();
  
    // Loop through 9 weeks before the current week
    for (let i = 0; i <= 9; i++) {
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - today.getDay() - i * 7); // Adjust for weeks before the current week
  
      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 6); // End date is 6 days after the start date (Saturday)
  
      // Format start and end dates
      const startDateFormatted = startDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
      const endDateFormatted = endDate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
      });
  
      // Combine formatted dates
      const formattedRange = `${startDateFormatted} - ${endDateFormatted}`;
  
      weekRanges.unshift(formattedRange); // Add to the beginning of the array
    }
  
    return weekRanges;
  }