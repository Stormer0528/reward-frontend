import type { TeamReportSection } from 'src/__generated__/graphql';

import TeamCommission from 'src/sections/TeamCommission';

// ----------------------------------------------------------------------

interface Props {
  contact?: boolean;
  teamReport?: TeamReportSection;
}

export default function TeamCommissionPage({ contact, teamReport }: Props) {
  return (
    <TeamCommission contact={contact as boolean} teamReport={teamReport as TeamReportSection} />
  );
}
