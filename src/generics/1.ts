// Виконуйте це завдання у файлі src/generics/1.ts.
// Типізуйте асинхронну функцію fetchData, яка приймає URL ресурсу та повертає об'єкт з даними. Використовуйте Generics
// для типізації повернутих даних.

import axios from "axios";

async function fetchData<T extends any, U extends string>(url: U): Promise<T> {
	try {
		const response = await axios.get(url);
		return response.data;
	} catch (error) {
		throw new Error(`Error fetching from ${url}: ${error}`);
	}
}