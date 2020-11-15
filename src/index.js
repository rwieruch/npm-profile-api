import 'dotenv/config';

// https://github.com/npm/npm-profile
import profile from 'npm-profile';

profile
  .get({
    token: process.env.NPM_ACCESS_TOKEN,
  })
  .then((profile) => console.log(profile));

profile
  .listTokens({
    token: process.env.NPM_ACCESS_TOKEN,
  })
  .then((tokens) => console.log(tokens));

profile
  .createToken(process.env.NPM_PASSWORD, true, null, {
    token: process.env.NPM_ACCESS_TOKEN,
    // otp: null, // only needed if 2FA is enabled
  })
  .then((token) => {
    console.log(token);
    profile.removeToken(token.key, {
      token: process.env.NPM_ACCESS_TOKEN,
    });
  });
