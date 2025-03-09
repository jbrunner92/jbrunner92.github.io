import { create } from 'zustand';

interface CardsStore {
  cardSearchResults: string[];
}

interface CardsStoreActions {
  setCardSearchResults: (cardSearchResults: string[]) => void;
}

type CardsStoreState = CardsStore & {actions: CardsStoreActions};

const defaultSettings: CardsStore = {
  cardSearchResults: [],
}

const cardsStore = create<CardsStoreState>((set) => ({
  ...defaultSettings,
  actions: {
    setCardSearchResults: (cardSearchResults) => set({ cardSearchResults }),
  },
}));

export const useCardSearchResults = () => cardsStore(state => state.cardSearchResults);
export const useCardsActions = () => cardsStore(state => state.actions);