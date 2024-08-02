import { FC } from "react";

interface ILimitedTextCharactersProps {
  text: string;
  limit: number;
}

const LimitedTextCharacters: FC<ILimitedTextCharactersProps> = ({
  text,
  limit = 20,
}) => {
  const limitedText = text.substring(0, limit) + "...";
  if (text.length > limit) return limitedText;
  return text;
};

export default LimitedTextCharacters;
