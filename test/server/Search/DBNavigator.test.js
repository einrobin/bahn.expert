// @flow
import DBNavSearch from 'server/Search/DBNavigator';
import exampleRespone from './__fixtures__/DBNavigator.example';
import Nock from 'nock';

describe('DBNavigator Search', () => {
  // if (process.env.ONLINE_TEST) {
  //   it('success Search', async () => {
  //     const result = await DBNavSearch('Bochum');
  //
  //     expect(result).not.toHaveLength(0);
  //     expect(result).toMatchSnapshot();
  //   });
  // }

  describe('Mocked Test', () => {
    beforeAll(() => {
      Nock.disableNetConnect();
    });
    afterAll(() => {
      Nock.enableNetConnect();
    });

    it('Returns correct mapping', async () => {
      Nock('https://reiseauskunft.bahn.de')
        .post('/bin/mgate.exe')
        .query(true)
        .reply(200, exampleRespone);

      const result = await DBNavSearch('Hamburg');

      expect(result).not.toHaveLength(0);
      expect(result).toEqual([{ id: '8002549', title: 'Hamburg Hbf' }, { id: '8002553', title: 'Hamburg-Altona' }]);
    });

    it('Throws exception on error', async () => {
      try {
        await DBNavSearch('Hamburg');
        expect(true).toBeFalse();
      } catch (e) {
        expect(e).toBeDefined();
      }
    });
  });
});
