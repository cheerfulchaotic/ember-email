import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.name.findName(); },
  primaryEmail() {return faker.internet.email();},
  primaryPhone() {return faker.phone.phoneNumber();}
});
