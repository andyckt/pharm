// Function to get current date in Hong Kong time
export function getCurrentHongKongDate(): Date {
  // Create a date object with the current time
  const now = new Date()

  // Format the date in Hong Kong time zone
  const hongKongTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Hong_Kong",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  }).format(now)

  // Parse the formatted date string back to a Date object
  return new Date(hongKongTime)
}

// Function to get the next N days from a given date
export function getNextNDays(startDate: Date, numberOfDays: number): Date[] {
  const dates: Date[] = []

  for (let i = 0; i < numberOfDays; i++) {
    const date = new Date(startDate)
    date.setDate(startDate.getDate() + i)
    dates.push(date)
  }

  return dates
}

// Function to format a date as "MMM D" (e.g., "Mar 7")
export function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

// Function to get day of week as three-letter abbreviation (e.g., "Thu")
export function getDayOfWeek(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short" })
}

// Function to determine if a date is a weekday or weekend
export function isWeekend(date: Date): boolean {
  const day = date.getDay()
  return day === 0 || day === 6 // 0 is Sunday, 6 is Saturday
}

// Function to get date type (weekday or weekend)
export function getDateType(date: Date): "weekday" | "weekend" {
  return isWeekend(date) ? "weekend" : "weekday"
}
