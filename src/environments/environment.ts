// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyApKkjYYhy-FQrUp31Y0Xn7U-mwb6V3a6o',
    authDomain: 'firstfbase.firebaseapp.com',
    databaseURL: 'https://firstfbase.firebaseio.com',
    projectId: 'firstfbase',
    storageBucket: 'firstfbase.appspot.com',
    messagingSenderId: '647656171704'
  }
};
