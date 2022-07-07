import { address } from "src/entities/address.entity";

export const addressProviders = [
  {
    provide: 'ADDRESS_REPOSITORY',
    useValue: address,
  },
];
