import 'googlemaps';
import { CustomMap } from './CustomMap';
import { User } from './User';
import { Company } from './Company';

// console.log(user);
// console.log(company);

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);