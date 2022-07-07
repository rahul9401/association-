import { company } from 'src/entities/company.entity';

export const companyProviders = [
  {
    provide: 'COMPANY_REPOSITORY',
    useValue: company,
  },
];
