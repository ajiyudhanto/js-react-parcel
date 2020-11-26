# JS-REACT-PARCEL

A code that used to do `kitabisa.com code challenge`. It will displayed a list of campaigns that provided by kitabisa.com.

# How to Use

1. clone this repository to your local system

2. move to cloned repo directory, and then open terminal

3. in terminal, run `npm install`

4. in terminal, run `npm run dev`

5. now you can open `http://localhost:1234` or any PORT that displayed in terminal to see the result

# Note

If you want to change list of campaigns, you can change it from `src/store/actions/index.js` in url's `getCampaigns` constant.

If you want to test it using jest, make sure to install jest globally using:

- `yarn global add jest` or 
- `npm install jest --global`

then you can run `npm test` in terminal