const accountId = 1234;
let accountPassword = "12344";
accountCity = "Jaipur";
let accountEmail = "shahsikant@gmail.com";
let accountState;
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);

// prefer not to use var
// because of issue in block scope and functional scope

accountEmail = "shashi@gmail.com";
accountPassword = "12344ri4u4iou";
accountCity = "akbarpur";
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);

// problem of scope by using var
