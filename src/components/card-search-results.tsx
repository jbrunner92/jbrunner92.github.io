import { useCardSearchResults } from "@/store";
import { Stack } from "@mui/material";
import { CardSearchResult } from "./card-search-result";
import { SearchCards } from "./search-cards";

export const CardSearchResults = () => {
  const cardSearchResults = useCardSearchResults();

  return (
    <>
      <SearchCards />
      <Stack direction="row" spacing={4} paddingY={2} gap={2} flexWrap="wrap" sx={{ '&>:not(style)~:not(style)': { marginLeft: 0 } }}>
        {cardSearchResults.map((card) => (
          <CardSearchResult key={card} cardName={card} />
        ))}
      </Stack>
    </>
  );
}