import type { TeamReportSection } from 'src/__generated__/graphql';

import TeamCommission from 'src/sections/TeamCommission';

// ----------------------------------------------------------------------

interface Props {
  isContact?: boolean;
  teamReport?: TeamReportSection;
}

export default function TeamCommissionPage({ isContact, teamReport }: Props) {
  return <TeamCommission isContact={isContact} teamReport={teamReport} />;
}
