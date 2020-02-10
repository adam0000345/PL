import hello_location from 'ic:canisters/hello_location';

hello_location.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
