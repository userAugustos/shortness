import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}> {/* ApolloProvider is a context provider, and in this context, we provider the conection (client) */}
			<App />
		</ApolloProvider>
  </React.StrictMode>
)
