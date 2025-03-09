import { useQuery } from "react-query"
import { Card, Cards } from "scryfall-sdk";


export const useCardByName = (cardName: string) => {

  const {data: card, ...rest} = useQuery<Card>(
    ['card', cardName],
    async () => Cards.byName(cardName),
    {
      enabled: !!cardName,
      staleTime: Infinity,
    }
  )

  return {
    card, 
    ...rest
  }
}