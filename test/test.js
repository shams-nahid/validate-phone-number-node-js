const { expect } = require('chai');
const { validate } = require('../index');

describe('Testing the validate phone number', () => {
  it('should validate bangladeshi phone number', () => {
    const phoneNumber = '+8801744253089';
    expect(validate(phoneNumber)).to.true;
  });
});

describe('Testing the invalidate phone number', () => {
  it('should invalidate bangladeshi phone number', () => {
    const phoneNumber = '+8809';
    expect(validate(phoneNumber)).to.false;
  });

  it('should validate bangladeshi phone number', () => {
    const phoneNumber = '12345';
    expect(validate(phoneNumber)).to.false;
  });
});
