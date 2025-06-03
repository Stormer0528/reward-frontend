import { SponsorshipListView } from 'src/sections/Sponsorship/List';

// ----------------------------------------------------------------------
interface Props {
  allowState: string;
}
// ----------------------------------------------------------------------

export default function SponsorshipListPage({ allowState }: Props) {
  return <SponsorshipListView allowState={allowState} />;
}
