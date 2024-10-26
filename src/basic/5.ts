// Виконуйте це завдання у файлі src/basic/5.ts.
// Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek і повертає boolean значення, що вказує, чи це день робочий
// чи вихідний.

enum DayOfWeek {
	Monday = "true",
	Tuesday = "true",
	Wednesda = "true",
	Thursday = "true",
	Friday = "true",
	Saturday = "false",
	Sunday = "false",
}

const isWeekend = (day: DayOfWeek) => {
	return `The day of ${day}.`;
};
console.log(isWeekend(DayOfWeek.Monday));
