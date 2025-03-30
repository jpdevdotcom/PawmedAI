import { getData } from "../api/classify-image";

async function ToDoList() {
	const posts = await getData();
	return (
		<ul>
			{posts.findings.map((find, idx) => (
				<li key={idx}>{find.severity}</li>
			))}
		</ul>
	);
}

export { ToDoList };
