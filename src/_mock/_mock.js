import { sub } from 'date-fns';
//
import {
  role,
  email,
  video,
  boolean,
  company,
  phoneNumber,
  //
  firstName,
  lastName,
  fullName,
  //
  price,
  rating,
  age,
  percent,
  //
  fullAddress,
  country,
  //
  jobTitle,
  tourName,
  sentence,
  blogTitle,
  brandsName,
  courseTitle,
  description,
  jobCategories,
} from './assets';

// ----------------------------------------------------------------------

const _mock = {
  id: (index) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index) => email[index],
  phoneNumber: (index) => phoneNumber[index],
  time: (index) => sub(new Date(), { days: index, hours: index }),
  boolean: (index) => boolean[index],
  role: (index) => role[index],
  company: (index) => company[index],
  address: {
    fullAddress: (index) => fullAddress[index],
    country: (index) => country[index],
  },
  name: {
    firstName: (index) => firstName[index],
    lastName: (index) => lastName[index],
    fullName: (index) => fullName[index],
  },
  text: {
    blogTitle: (index) => blogTitle[index],
    courseTitle: (index) => courseTitle[index],
    jobTitle: (index) => jobTitle[index],
    jobCategories: (index) => jobCategories[index],
    tourName: (index) => tourName[index],
    brandsName: (index) => brandsName[index],
    sentence: (index) => sentence[index],
    description: (index) => description[index],
  },
  number: {
    percent: (index) => percent[index],
    rating: (index) => rating[index],
    age: (index) => age[index],
    price: (index) => price[index],
  },
  image: {
    avatar: (index) => `/assets/images/avatar/avatar_${index + 1}.jpg`,
    company: (index) => `/assets/images/company/company_${index + 1}.png`,
    marketing: (index) => `/assets/images/marketing/marketing_${index + 1}.jpg`,
    travel: (index) => `/assets/images/travel/travel_${index + 1}.jpg`,
    career: (index) => `/assets/images/career/career_${index + 1}.jpg`,
    course: (index) => `/assets/images/course/course_${index + 1}.jpg`,
    product: (index) => `/assets/images/product/product_${index + 1}.png`,
  },
  video: (index) => video[index],
  jobTitle,
  jobCategories,
  shareLinks: {
    facebook: `facebook/user-name`,
    instagram: `instagram/user-name`,
    linkedin: `linkedin/user-name`,
    twitter: `twitter/user-name`,
  },
};

export default _mock;
