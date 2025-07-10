import axios from 'axios'
import qs from 'qs'

export function login({ username, password, code = '', randomStr = 'blockPuzzle' }) {
  return axios.post(
    '/auth/oauth2/token',
    qs.stringify({
      username,
      password,
      randomStr,
      code,
      grant_type: 'password',
      scope: 'server'
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Authorization': 'Basic bWVyY2hhbnQ6ZHdrcXdwc3hmendzc3FmaWtzeGQ=',
        'client-tom': 'Y',
        'skiptoken': 'true'
      }
    }
  ).then(res => console.log(res)).catch(err => console.error(err));
}


