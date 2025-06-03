import SPonsorListView from 'src/sections/Sponsorship/SponsorList';

// ----------------------------------------------------------------------
interface Props {
  allowState: string;
}
// ----------------------------------------------------------------------

export default function SponsorshipPage({ allowState }: Props) {
  return <SPonsorListView allowState={allowState} />;
}
