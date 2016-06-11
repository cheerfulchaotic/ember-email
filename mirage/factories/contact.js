import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  email() { return [{address:faker.internet.email(), tags:'primary' }];},
  phone() { return [{address:faker.phone.phoneNumber(), tags: 'primary'} ];},
  name() { return faker.name.findName(); }
});
