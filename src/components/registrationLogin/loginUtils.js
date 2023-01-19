export const loginUtils = (loginData) => [
  {
    textId: 1,
    id: "email",
    name: "email",
    label: "Email Address",
    type: "email",
    margin: "normal",
    value: loginData.email,
  },
  {
    textId: 2,
    id: "password",
    name: "password",
    label: "Password",
    type: "password",
    margin: "normal",
    value: loginData.password,
  },
];
