import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transactions } from './pages/Transactions'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { AuthProvider } from './contexts/AuthContext'
import { Toaster } from 'sonner'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <TransactionsProvider>
          <Toaster richColors />
          <Transactions />
        </TransactionsProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}
