import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { AuthProvider } from './contexts/AuthContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
