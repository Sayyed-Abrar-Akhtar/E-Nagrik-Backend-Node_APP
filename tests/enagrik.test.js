// we will use supertest to test HTTP requests/responses
const request = require('supertest');
// we also need our app for the correct routes!
const app = require('../index');

// describe('POST child birth info', () => {
//   jest.setTimeout(30000);
//   test('It should post child birth details and return request response.', async () => {
//     const birthRecordObj = {
//       child_name: 'Nusaybah',
//       gender: 'female',
//       dob: 'mm/dd/yy',
//       birth_place: 'ktm',
//       permanent_address: 'ktm',
//       grandfather_name: 'grandfatherName',
//       father_id: 'fatherId',
//       father_name: 'fatherName',
//       mother_id: 'motherId',
//       mother_name: 'motherName',
//       informant_id: 'informantId',
//       informant_name: 'informantName',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/birth-record/')
//       .send(birthRecordObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// // CITIZEN REGISTRATION
// describe('POST citizen info', () => {
//   jest.setTimeout(30000);
//   test('It should post citizen details and return request response.', async () => {
//     const citizenRecordObj = {
//       citizen_name: 'TEST',
//       gender: 'MALE',
//       birth_place: 'KTM',
//       address: 'KTM',
//       father_name: 'fatherName',
//       father_address: 'fatherAddress',
//       mother_name: 'motherName',
//       mother_address: 'motherAddress',
//       email: 'S@A.COM',
//       password: '21212',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/citizen/')
//       .send(citizenRecordObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// CITIZEN LOGIN AUTHORISATION
// describe('POST citizen credentials', () => {
//   jest.setTimeout(30000);
//   test('It should post citizen details and return authorization response.', async () => {
//     const citizenCredentialObj = {
//       email: 's@a.com',
//       password: 's',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/citizen/auth')
//       .send(citizenCredentialObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// // FETCH CITIZEN DATA
// describe('GET citizen data', () => {
//   jest.setTimeout(30000);
//   test('It should get citizen details request response.', async () => {
//     jest.setTimeout(50000);
//     const response = await request(app).get('/api/citizen/');
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// MARRIAGE REGISTRATION
// describe('POST marriage details', () => {
//   jest.setTimeout(30000);
//   test('It should post marriage details and return request response.', async () => {
//     const marriageInfoObj = {
//       bridegroom_name: 'bridegroom',
//       bride_name: 'bride',
//       bridegroom_dob: '2021/10/11',
//       bride_dob: '2021/10/11',
//       bridegroom_citizenship_num: '0123456789',
//       bride_citizenship_num: '0123456789',
//       bridegroom_permanent_address: 'kly',
//       bride_permanent_address: 'kly',
//       bridegroom_father_name: 'ram',
//       bride_father_name: 'hari',
//       bridegroom_mother_name: 'sita',
//       bride_mother_name: 'sita',
//       bridegroom_grandfather_name: 'laxman',
//       bride_grandfather_name: 'laxman',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/marriage-record')
//       .send(marriageInfoObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// DEATH REGISTRATION
// describe('POST deceased details', () => {
//   jest.setTimeout(30000);
//   test('It should post deceased details and return request response.', async () => {
//     const deathObj = {
//       deceased_name: 'ram',
//       gender: 'male',
//       age: '42',
//       died_on: '10/11/2021',
//       death_place: 'kly',
//       birth_country: 'Nepal',
//       citizen_id: '1346454',
//       permanent_address: 'kly',
//       marital_status: 'married',
//       education: 'graduate',
//       religion: 'hindu',
//       grandfather_name: 'grandram',
//       father_name: 'Rama',
//       spouse_name: 'rita',
//       death_cause: 'natural',
//       informant_name: 'grnadram',
//       informant_relation: 'father',
//       informant_address: 'kly',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/death-record')
//       .send(deathObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

// describe('POST citizen complain', () => {
//   jest.setTimeout(30000);
//   test('It should post complain details and return request response.', async () => {
//     const complainObj = {
//       citizen_name: 'ram',
//       citizen_id: '123464',
//       contact: '+977-134678451',
//       assailant_name: 'ravan',
//       event_date: '00/12/12',
//       event_detail: 'eventDetail',
//     };
//     jest.setTimeout(50000);
//     const response = await request(app)
//       .post('/api/complain-record')
//       .send(complainObj);
//     jest.setTimeout(100000);
//     expect(response.body.success).toEqual(true);
//   });
// });

//CREATE NOTICE
describe('POST notice details', () => {
  jest.setTimeout(30000);
  test('It should post notice details and return request response.', async () => {
    const complainObj = {
      info: 'Booster doses initiated!!',
    };
    jest.setTimeout(50000);
    const response = await request(app).post('/api/notice').send(complainObj);
    jest.setTimeout(100000);
    expect(response.body.success).toEqual(true);
  });
});

//FETCH ALL NOTICES
describe('GET All Notices', () => {
  jest.setTimeout(30000);
  test('It should get all notices request response.', async () => {
    jest.setTimeout(50000);
    const response = await request(app).get('/api/notice');
    jest.setTimeout(100000);
    expect(response.body.success).toEqual(true);
  });
});
