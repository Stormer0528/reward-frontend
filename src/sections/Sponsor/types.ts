// ----------------------------------------------------------------------

export type IMemberTableFilters = {
  search: string;
  status: string;
};

export type IMemberPrismaFilter = {
  OR?: any;
  sponsorId?: any;
  deletedAt?: any;
};
