import { useCardsActions } from "@/store";
import { SearchOutlined } from "@mui/icons-material";
import { TextField } from "@mui/material"
import * as Scry from 'scryfall-sdk';

export const SearchCards = () => {
  const { setCardSearchResults } = useCardsActions();

  const searchCards = async (textFieldValue: string) => {
    const cardNames = await Scry.Cards.autoCompleteName(textFieldValue);
    setCardSearchResults(cardNames);
  }

  return (
    <TextField
      label="Search cards" 
      variant="outlined" 
      size="small" 
      onChange={(event) => searchCards(event.target.value)}
      slotProps={{
        input: {
          startAdornment: (<SearchOutlined />)
        }
      }} 
    />
  )
}