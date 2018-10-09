var user;

var logic = {
  register: function(email, name, password, onSuccess, onFailure) {
    if(!email || !email.trim().length) {
      onFailure('Email is empty');
    } else if(!name || !name.trim().length) {
      onFailure('Name is empty');
    } else if(!password || !password.trim().length) {
      onFailure('Password is empty');
    } else {
      user = {
        email: email,
        name: name,
        password: password
      }

      onSuccess();
    }
  },

  login: function(name, password, onSuccess, onFailure) {
    if(name !== user.name) {
      onFailure('Name is wrong');
    } else if(password !== user.password) {
      onFailure('Password is wrong');
    } else {
      onSuccess();
    }
  }
};