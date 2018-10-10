# Phone number check

## Introduction

Phone number check is a [npm](http://npmjs.org) module for [NodeJS](http://nodejs.org/), that **checks if a phone number exists and valid**.

It validates the number through regex.

## Install

`npm i validate-phone-number-node-js`

## Usage

`validate(phoneNumber)`

The function signature accepts an arguments and returns a boolean value.

- `true` (boolean) valid phone number.
- `false` (boolean) invalid phone number.

### Example

```js
const validatePhoneNumber = require('validate-phone-number-node-js');
const result = validatePhoneNumber.validate('+8801744253089');

```

***

MIT License
