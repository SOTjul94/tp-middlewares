const controller = {
    login: (req, res) => {
      return res.render("login");
    },
    register: (req, res) => {
      return res.render("register");
    },
    admin: (req, res) => {
      return res.render("login-admin");
    },
    admin_login: (req, res) => {
      
      
      
      
      return res.redirect("/admin/pannel");
    },
    pannel: (req, res) => {
      return res.render("admin-pannel");
    },
  };
  
  module.exports = controller;