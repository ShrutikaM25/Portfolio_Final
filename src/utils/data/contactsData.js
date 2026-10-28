// Kept for backwards compatibility; contact details live in personal-data.js.
import { personalData } from './personal-data';

export const contactsData = {
  email: personalData.email,
  phone: personalData.phone,
  address: personalData.location,
  github: personalData.github,
  linkedIn: personalData.linkedIn,
  website: personalData.website,
};
