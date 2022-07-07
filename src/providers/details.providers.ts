import { details } from "src/entities/profile.entity";

export const ProfileProviders = [
  {
    provide: 'PROFILE_REPOSITORY',
    useValue: details,
  },
];
