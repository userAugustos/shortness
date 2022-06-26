import { useQuery } from '@apollo/client' // this a hook from apollo integration with react, facilitates the react call for graphql
import { GET_LESSONS_QUERY } from './utils/querys'
import { ILesson } from './utils/types/lessons'

function App() {
	const { data } = useQuery<{ lessons: ILesson[] }>(GET_LESSONS_QUERY) // example of a query
	// above i'm passing directly the type of return of query, an object with and array of lessons

	console.log(data?.lessons)

	return (
		<ul>
			{data?.lessons.map(lesson =>(
				<li key={lesson.id}>{lesson.title}</li>
			))}
		</ul>
	)
}

export default App

