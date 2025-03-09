import { AppBar, Link, Stack } from "@mui/material"
import { FC, PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query"
import * as Scry from "scryfall-sdk"

export const AppContainer: FC<PropsWithChildren> = ({ children }) => {
  Scry.setAgent("MoogicTheGoobering", "1.0.0");
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppBar position="static" >
        <Stack direction="row" justifyContent="space-between" padding={2} paddingRight={4}>
          <Link href="/" variant="h6" sx={{color: 'white', textDecoration: 'none'}}>Moogic the Goobering</Link>
          <Stack direction="row" gap={3}>
            <Link variant="h6" href="/games" sx={{color: 'white', textDecoration: 'none'}}>Games</Link>
            <Link variant="h6" href="/decks" sx={{color: 'white', textDecoration: 'none'}}>Decks</Link>
            <Link variant="h6" href="/card-search" sx={{color: 'white', textDecoration: 'none'}}>Card Search</Link>
          </Stack>
        </Stack>
      </AppBar>
      <main>
        {children}
      </main>
    </QueryClientProvider>
  )
}