const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      return true;
    },
    uiShown() {
      document.getElementById('loader').style.display = 'none';
    },
  },
  signInFlow: 'popup',
  signInSuccessUrl: 'signedIn',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
};
ui.start('#firebaseui-auth-container', uiConfig);
