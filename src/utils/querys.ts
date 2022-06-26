import { gql } from "@apollo/client"; // gql allowed us to write better querys, with the snippets and hilights

export const GET_LESSONS_QUERY = gql` 
	query{
		lessons{
			id
			title
		}
	}
` 