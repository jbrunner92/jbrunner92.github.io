import { useCardByName } from '@/hooks';
import { FC } from 'react';

interface Props {
  cardName: string;
}

export const CardSearchResult: FC<Props> = ({ cardName }) => {
  const { card } = useCardByName(cardName);

  if (!card) {
    return null;
  }

  return (
    <div>
      <p>{card?.name}</p>
      <img src={card?.image_uris?.normal} alt={card?.name} />
    </div>
  );
}