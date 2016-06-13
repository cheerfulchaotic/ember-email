import { test } from 'qunit';
import moduleForAcceptance from 'email/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | contacts index');

test('visiting user contacts route displays all contacts', function(assert) {
  // Set up the test data
  server.create('contacts',{name: 'foo'});
  server.create('contacts',{name: 'bar'});
  server.create('contacts',{name: 'baz'});
  server.create('contacts',{name: 'bang'});
  server.create('contacts',{name: 'boop'});


  visit('/contacts');

  andThen(function() {
    assert.equal(find('.test-contact').length, 5, 'All contacts display');
  });
});

test('user contacts list is sorted by name', function(assert) {
  server.create('contacts',{name:'Jane Doe'});
  server.create('contacts',{name: 'John Armstrong'});
  server.create('contacts',{name: 'John Doe'});

  visit('/contacts');

  andThen(function() {
    assert.contains('.test-contact:eq(0) .test-contact-name', 'Jane Doe', 'Contact list is sorted alphabetically');
    assert.contains('.test-contact:eq(1) .test-contact-name', 'John Armstrong', 'Contact list is sorted alphabetically');
    assert.contains('.test-contact:eq(2) .test-contact-name', 'John Doe', 'Contact list is sorted alphabetically');
  });
});

test('displays info for a contact in each row', function(assert) {
  var contact = server.create('contacts',{name:'Ann Smith',primaryEmail:'smith@example.com',primaryPhone:'+1 555-555-5252'});

  visit('/contacts');

  andThen(function() {
    assert.contains('.test-contact:eq(0) .test-contact-name', 'Ann Smith', 'Contact row displays contact name');
    assert.contains('.test-contact:eq(0) .test-contact-primary-email', 'smith@example.com', 'Contact row displays contact primary email');
    assert.contains('.test-contact:eq(0) .test-contact-primary-email', '(+2)', 'Displays additional email count');
    assert.contains('.test-contact:eq(0) .test-contact-primary-phone', '+1 555-555-5252', 'Contact row displays primary phone');
    assert.contains('.test-contact:eq(0) .test-contact-primary-phone', '(+1)', 'Displays additional phone count');
  });
});

// Write the tests
skip('name links to edit for a contact');

skip('primary email is a mailto: link');

skip('primary phone is a tel: link');
