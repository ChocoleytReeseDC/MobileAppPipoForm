"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.pipo = [{
      "id": 1,
      "name": "Reese Dela Cruz",
      "usn": "15000871300",
      "datein": "Jan 23, 2017",
      "dateout": "Jan 24, 2018",
      "description": "MSI Laptop. SN: CRKQWEK234617IOB ",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 2,
      "name": "Jason Alfar",
      "usn": "15000489000",
      "datein": "February 14 2017",
      "dateout": "February 15, 2018",
      "description": "Asus Laptop, SN: EANUCV0478664IF",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 3,
      "name": "Bernard Aguilar",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Acer Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 4,
      "name": "Louie Lumanta",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Acer Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 5,
      "name": "Jason Lam ",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Toshiba Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 6,
      "name": "Hannah Tan",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Asus Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 7,
      "name": "April Tumala",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": " Dell Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 8,
      "name": "Keno Bergado",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Acer Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 9,
      "name": "Kent Dael",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Asus Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 10,
      "name": "Norberto Laudenorio",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Projector.",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 11,
      "name": "Bryan Bayer",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Asus Rog Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }, {
      "id": 12,
      "name": "Finney Edbriel",
      "usn": "15000871300",
      "datein": "",
      "dateout": "",
      "description": "Asus Laptop",
      "image": "img/aa.jpg",
      "approve": "img/pending.jpg"

    }];

    this.studentpicture = [{
      "pic": "img/aa.jpg",
      "pendingpic": "img/pending.jpg"

    }];
    this.picture = [{
      "idpic": 1,
      "pic": "img/aa.jpg",
      "approvepic": "img/approve.png"

    }, this.login = [{
      "id": 1,
      "username": "1403211363",
      "password": "passinpassout01"
    }, {
      "id": 2,
      "username": "1453234662",
      "password": "passinpassout02"
    }, {
      "id": 3,
      "username": "1462206235",
      "password": "passinpassout03"
    }, {
      "id": 4,
      "username": "1409921336",
      "password": "passinpassout04"
    }, {
      "id": 5,
      "username": "15000871300",
      "password": "GDP300500"
    }]];
  }

  _createClass(App, [{
    key: "render",
    value: function render(html, component) {

      component.innerHTML += html;
    }
  }, {
    key: "reRender",
    value: function reRender(html, component) {

      component.innerHTML = html;
    }
  }, {
    key: "createDesign",
    value: function createDesign() {
      var id = document.getElementById('base_id');
      var name = document.getElementById('coc_name');
      var description = document.getElementById('coc_description');
      var image = document.getElementById('coc_image');
      var usn = document.getElementById('coc_usn');
      var datein = document.getElementById('coc_in');
      var dateout = document.getElementById('coc_out');
      var approve = document.getElementById('coc_approve');

      var pipo = {
        "id": id.value,
        "name": name.value,
        "description": description.value,
        "image": image.value,
        "usn": usn.value,
        "datein": datein.value,
        "dateout": dateout.value,
        "approve": approve.value

      };

      this.pipo.push(pipo);

      approve.value = datein.value = dateout.value = id.value = usn.value = name.value = description.value = image.value = '';
      this.requestparty();
    }
  }, {
    key: "deleteForm",
    value: function deleteForm(key) {
      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        if (r[i].id == key) {
          this.pipo.splice(i, 1);
          break;
        }
      }
      this.pipoList();
    }
  }, {
    key: "updatePipoForm",
    value: function updatePipoForm(id) {

      id = id + 1;
      var baseDummy = {
        "id": id,
        "name": $('#cocname').val(),
        "description": $('#cocdes').val(),
        "usn": $('#cocusn').val(),
        "image": $('#cocimg').val(),
        "datein": $('#cocin').val(),
        "dateout": $('#cocout').val(),
        "approve": $('#cocapprove').val()
      };

      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        if (r[i].id == id) {
          r[i] = baseDummy;
          break;
        }
      }

      this.updateApproveId();
    }
  }, {
    key: "updateApproveId",
    value: function updateApproveId(id) {

      id = id + 1;
      var baseDummy = {
        "id": id,
        "name": $('#cocname').val(),
        "description": $('#cocdes').val(),
        "usn": $('#cocusn').val(),
        "image": $('#cocimg').val(),
        "datein": $('#cocin').val(),
        "dateout": $('#cocout').val(),
        "approve": $('#approverequest').val()
      };

      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        if (r[i].id == id) {
          r[i] = baseDummy;
          break;
        }
      }
      this.pipoList();
    }
  }, {
    key: "searchPipoById",
    value: function searchPipoById(id) {
      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        if (id == r[i].id) {
          return r[i];
        }
      }
    }
  }, {
    key: "searchPipoId",
    value: function searchPipoId(name) {
      var objects = [];
      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        var expr = r[i].name.toUpperCase().indexOf(name.toUpperCase()) > -1;
        if (expr) {
          objects.push(r[i]);
        }
      }
      return objects;
    }
  }]);

  return App;
}();

var Component = function (_App) {
  _inherits(Component, _App);

  function Component() {
    _classCallCheck(this, Component);

    return _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this));
  }

  _createClass(Component, [{
    key: "baseLayout",
    value: function baseLayout() {
      var html = "\n\n\n                ";

      html += "\n\n                <div id=\"landingPage\"></div>\n                <div id=\"recentHome\"></div>\n                <div id=\"pipoView\"></div>\n                <div id=\"recentView\"></div>\n                <div id=\"adminView\"></div>\n                <div id=\"updatePipo\"></div>\n                <div id=\"pipoList\"></div>\n                <div id=\"createForm\"></div>\n                <div id=\"loginForm\"></div>\n                <div id=\"requestparty\"></div>\n                <div id=\"checkRequest\"></div>\n                <div id=\"approveView\"></div>\n                <div id=\"updateApproveId\"></div>\n                <div id=\"updateApprove\"></div>\n                <div id=\"validateForm\"></div>\n                <div id=\"logoutValidation\"></div>\n                <div id=\"submitValidation\"></div>\n\n\n\n\n\n\n\n\n                ";

      this.reRender("\n                  " + html + "\n\n                  ", document.getElementById("app"));
      this.recentHome();
    }
  }, {
    key: "recentHome",
    value: function recentHome() {

      var html = "\n\n\n\n                <header id=\"header\"onclick=\"component.requestparty()\">\n                <div class=\"inner\">\n                <div class=\"content\">  \n\n      <h1><br><br>Welcome to <br>Pass in Pass out :*</h1>\n\n\n\n                </div>\n                \n                <a href=\"#\" class=\"button hidden\"><span> <3 <3 </span></a>\n                </div>\n                </header>\n\n\n\n                \n\n\n\n                ";

      this.render("   \n                  " + html + "\n                  ", document.getElementById("recentHome"));
    }
  }, {
    key: "pipoView",
    value: function pipoView(id) {
      var r = this.searchPipoById(id);
      var html = "\n          ";
      html += "\n\n\n\n      <section>       \n            <div id=\"wrapper\" >\n            <div id=\"login\" class=\"animate form\">\n                <div class=\"card\">\n                <div class=\"card-image\">\n                <img src=\"" + r.image + "\">\n                </div>\n                <div class=\"card-stacked\">\n                <div class=\"card-content\">\n                <h2 class=\"center-align\">" + r.name + "</h2>\n                <br>\n                <p><b>Date In: </b>" + r.datein + "</p>\n                <p><b>Date Out: </b>" + r.dateout + "</p>\n                <p><b>Item Details: </b>" + r.description + "</p>\n                </div>\n                <div class=\"card-action small\"> \n                <div class=\"center-align\">          \n    <center <span onclick=\"component.checkRequest()\" class=\"action-button shadow animate blue\">Close</span></center>\n                </div>            \n                </div>     \n                </div>   \n\n                </div>      \n                </div>\n                ";

      this.reRender("   \n                  " + html + "     \n                  ", document.getElementById("pipoView"));
      $('#updateApproveId').hide();
      $('#pipoView').show();
      $('#adminView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#pipoList').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "recentView",
    value: function recentView(id) {
      var r = this.searchPipoById(id);
      var html = "\n\n                ";
      html += "\n\n\n\n\n          <section>       \n            <div id=\"wrapper\" >\n            <div id=\"login\" class=\"animate form\">\n                <div class=\"card\">\n                <div class=\"card-image\">\n                <img src=\"" + r.approve + "\">\n                </div>\n                <div class=\"card-stacked\">\n                <div class=\"card-content\">\n                <h4 class=\"center-align\">Control #: " + r.id + "</h4>\n                    <h2 class=\"center-align\">" + r.name + "</h2>\n                <h2 class=\"center-align\">" + r.usn + "</h2>\n\n                <br>\n\n                </div>\n                <div class=\"card-action\">         \n           <center <span onclick=\"component.requestparty()\" class=\"action-button shadow animate blue\">Back to Home</span></center>\n                     <center <span onclick=\"component.checkRequest()\" class=\"action-button shadow animate orange\">Proceed to List</span></center>\n                </div>            \n                </div>     \n                </div>   \n\n                </div>      \n                </div>\n                ";

      this.reRender("   \n                  " + html + "     \n                  ", document.getElementById("recentView"));
      $('#updateApproveId').hide();
      $('#recentView').show();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#pipoList').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
    }
  }, {
    key: "adminView",
    value: function adminView(id) {
      var r = this.searchPipoById(id);
      var html = "\n      \n\n                ";

      html += "\n\n\n\n\n          <section>       \n            <div id=\"wrapper\" >\n            <div id=\"login\" class=\"animate form\">\n                <div class=\"card\">\n                <div class=\"card-image\">\n                <img src=\"" + r.image + "\">\n\n                </div>\n                <div class=\"card-stacked\">\n                <div class=\"card-content\">\n                <div class=\"left-align\">\n                   <h4 class=\"center-align\">Control #: " + r.id + "</h4>\n                <h2 class=\"center-align\">" + r.name + "</h2>\n                     <h2 class=\"center-align\">" + r.usn + "</h2>\n                <br>\n                </div>\n                <div class=\"card-action \">    \n            <span onclick=\"component.pipoList()\" class=\"action-button shadow animate blue\">Close</span>\n      \n             <span onclick=\"component.deleteForm(" + r.id + ")\" class=\"action-button shadow animate red\">Delete Request</span>\n                <br>\n           <br>\n            <center <span onclick=\"component.updateApprove(" + r.id + ")\" class=\"action-button shadow animate purple\">Open Request</span></center>\n                </div>            \n                </div>     \n                </div>   \n\n                </div>      \n                </div>\n                ";

      this.reRender("   \n                  " + html + "     \n                  ", document.getElementById("adminView"));
      $('#logoutValidation').hide();
      $('#updateApproveId').hide();
      $('#adminView').show();
      $('#pipoView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#pipoList').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "approveView",
    value: function approveView(id) {
      var r = this.searchPipoById(id);
      var html = "\n    \n\n                ";
      html += "\n\n\n\n             <section>       \n            <div id=\"wrapper\" >\n            <div id=\"login\" class=\"animate form\">\n                <div class=\"card\">\n                <div class=\"card-image\">\n                <img src=\"" + r.approve + "\">\n                </div>\n                <div class=\"card-stacked\">\n                <div class=\"card-content\">\n                <h2 class=\"center-align\">" + r.name + "</h2>\n                <br>\n                <p><b>Date In: </b>" + r.datein + "</p>\n                <p><b>Date Out: </b>" + r.dateout + "</p>\n                <p><b>Item Details: </b>" + r.description + "</p>\n                </div>\n                <div class=\"card-action small\"> \n                <div class=\"center-align\">          \n    <center <span onclick=\"component.checkRequest()\" class=\"action-button shadow animate blue\">Close</span></center>\n                </div>            \n                </div>     \n                </div>   \n\n                </div>      \n                </div>\n                ";

      this.reRender("   \n                  " + html + "     \n                  ", document.getElementById("approveView"));
      $('#updateApproveId').hide();
      $('#approveView').show();
      $('#adminView').hide();
      $('#pipoView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#pipoList').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "pipoList",
    value: function pipoList() {
      var html = "\n\n\n                   <ul class=\"topnav\" id=\"myTopnav\">\n <li><a class=\"active\" href=\"#\"onclick=\"component.logoutValidation()\"><i class=\"material-icons\">info_outline</i>Logout</a></li> \n <li class=\"icon\">\n\n  </li>\n  \n</ul>\n\n                <nav>\n                <div class=\"nav-wrapper   white accent-2\">\n                <form>\n                <div class=\"input-field\">       \n                <input onkeyup=\"component.pipoItems(this.value)\" id=\"search\" type=\"search\" placeholder=\"Search\" required>\n                <label for=\"search \"><i class=\"material-icons \">search</i></label>\n                <i class=\"material-icons\"onclick=\"component.pipoList()\">close</i>\n                </div>\n                </form>\n                </div>\n                </nav>\n                <br/>\n\n                ";

      html += "\n                <div id=\"pipoItems\">\n            \n                ";
      var r = this.pipo;
      for (var i = 0; i < r.length; i++) {
        html += "\n\n                  <div class=\"col s6 m6\">\n                  <div class=\"card  \">\n                  <div class=\"card-image\">\n                  <img src=\"" + r[i].image + "\">\n              <span class=\"card-title lime accent-1\">Name: " + r[i].name + "<br>Usn: " + r[i].usn + "</span>\n\n                  </div>\n                  <div class=\"card-content\">\n                   <p>Control # : " + r[i].id + "</p>\n                  </div>\n                  <div class=\"card-action lime accent-1\">\n                  <a href=\"#\" onclick=\"component.adminView(" + r[i].id + ")\"><i class=\"material-icons\">assignment</i>Students Request</a>\n                  </div>\n                  </div>\n                  </div>\n                  ";
      }

      html += "\n\n                </div>";

      this.reRender("\n                  " + html + "\n                  ", document.getElementById("pipoList"));
      $('#logoutValidation').hide();
      $('#updateApproveId').hide();
      $('#adminView').hide();
      $('#pipoList').show();
      $('#pipoView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "pipoItems",
    value: function pipoItems(name) {
      var html = "";
      var r = this.searchPipoId(name);
      for (var i = 0; i < r.length; i++) {
        html += "\n                  <div class=\"col s6 m4\">\n                  <div class=\"card \">\n                  <div class=\"card-image\">\n                  <img src=\"" + r[i].image + "\">\n              <span class=\"card-title lime accent-1\">Name: " + r[i].name + " <br> Usn: " + r[i].usn + "</span>\n\n                  </div>\n                  <div class=\"card-content\">\n                  <br>\n                  </div>\n                  <div class=\"card-action  lime accent-1\">\n                  <a href=\"#\" onclick=\"component.adminView(" + r[i].id + ")\"><i class=\"material-icons\">assignment</i>Students Request</a>\n                  </div>\n                  </div>\n                  </div>\n                  ";
      }

      this.reRender("\n                  " + html + "\n                  ", document.getElementById("pipoItems"));
      $('#updateApproveId').hide();
      $('#pipoList').show();
      $('#adminView').hide();
      $('#pipoView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "pipoInventory",
    value: function pipoInventory(name) {
      var html = "";
      var r = this.searchPipoId(name);
      for (var i = 0; i < r.length; i++) {
        html += "\n                 <div class=\"col s6 m4\">\n                 <div class=\"card\">\n                 <div class=\"card-image\">\n                 <img src=\"" + r[i].image + "\">\n                 <span class=\"card-title cyan accent-1\">Name: " + r[i].name + " <br>Usn: " + r[i].usn + "</span>\n\n                 </div>\n                 <div class=\"card-content\">\n                 <br>\n                 </div>\n                 <div class=\"card-action cyan accent-1\">\n                 <a href=\"#\" onclick=\"component.pipoView(" + r[i].id + ")\"><i class=\"material-icons\">assignment</i>View Request</a>\n                  <a href=\"#\" onclick=\"component.approveView(" + r[i].id + ")\"><i class=\"material-icons\">verified_user</i>Approval </a>\n\n                 </div>\n                 </div>\n                 </div>\n\n                 ";
      }

      this.reRender("\n                " + html + "\n                ", document.getElementById("pipoInventory"));
      $('#updateApproveId').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#recentHome').hide();
      $('#updatePipo').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').show();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "checkRequest",
    value: function checkRequest() {

      var html = "\n\n\n<ul class=\"topnav\" id=\"myTopnav\">\n <li><a class=\"active\" href=\"#\"onclick=\"component.requestparty()\"><i class=\"material-icons\">lock_outline</i>Back</a></li> \n  \n</ul>\n              <nav>\n              <div class=\"nav-wrapper   white accent-2\">\n              <form>\n              <div class=\"input-field\">       \n              <input onkeyup=\"component.pipoInventory(this.value)\" id=\"search\" type=\"search\" placeholder=\"Search\" required>\n              <label for=\"search \"><i class=\"material-icons \">search</i></label>\n              <i class=\"material-icons\"onclick=\"component.checkRequest()\">close</i>\n              </div>\n              </form>\n              </div>\n              </nav>\n              <br/>\n\n              ";

      html += "\n              <div id=\"pipoInventory\">\n        \n              ";

      var r = this.pipo;
      var count = 0;
      for (var i = r.length - 1; i >= 0; i--) {
        if (count++ === this.pipo) break;
        html += "\n\n                <div class=\"col s6 m6\">\n                <div class=\"card \">\n                <div class=\"card-image\">\n                <img src=\"" + this.studentpicture[0].pic + "\">\n                <span class=\"card-title cyan accent-1\">Name: " + r[i].name + " <br> Usn: " + r[i].usn + "</span>\n                </div>\n                <div class=\"card-content\">\n                 <h4>Control #: " + r[i].id + " </h4>\n                </div>\n                <div class=\"card-action  cyan accent-1\">\n                <a href=\"#\" onclick=\"component.pipoView(" + r[i].id + ")\"><i class=\"material-icons\">assignment</i>View Request</a>\n                <a href=\"#\" onclick=\"component.approveView(" + r[i].id + ")\"><i class=\"material-icons\">verified_user</i>Approval </a>\n                </div>\n                </div>\n                </div>\n                ";
      }
      this.reRender("\n                " + html + "\n                ", document.getElementById("checkRequest"));
      $('#updateApproveId').hide();
      $('#createForm').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').show();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "createForm",
    value: function createForm() {

      var html = "\n\n\n              ";

      for (var i = 0; i < this.studentpicture.length; i++) {
        html += "\n   <div class=\"container\" style=\"background-color:#f1f1f1\">\n            <h2><i class=\"small material-icons\">lock_outline</i>Pass in Form </h2>\n   <div class=\"container\" style=\"background-color:#f1f1f1\">\n   <input disabled value=\"" + (this.pipo.length + 1) + "\" id=\"base_id\" type=\"hidden\">\n               <input disabled value=\"" + this.studentpicture[i].pic + "\" id=\"coc_image\" placeholder=\"Current Picture\"type=\"hidden\"/>\n               <input disabled value=\"" + this.studentpicture[i].pendingpic + "\" id=\"coc_approve\" placeholder=\"Pending Approval\"type=\"hidden\"/>\n    <label><b>Requesting Party</b></label>\n    <input type=\"text\"id=\"coc_name\" placeholder=\"Enter Requesting Party\">\n    <label><b>Universal Student Number</b></label>\n    <input type=\"text\"id=\"coc_usn\" placeholder=\"Enter USN\">\n        <label><b>Item Details</b></label>\n    <input type=\"text\"id=\"coc_description\" placeholder=\"Enter Item Details\">\n    <label><b>Date In</b></label>\n    <input type=\"text\"id=\"coc_in\" placeholder=\"Enter Date In\">\n        <label><b>Date Out</b></label>\n    <input type=\"text\"id=\"coc_out\" placeholder=\"Enter Date Out\">\n    <button type=\"submit\"onclick=\"component.submitValidation()\">Submit</button>\n        <button type=\"button\"onclick=\"component.requestparty()\">Back</button>\n  </div>\n\n  </div>\n\n\n\n\n               ";
      }
      this.reRender("\n              " + html + "\n              ", document.getElementById("createForm"));
      $('#updateApproveId').hide();
      $('#submitValidation').hide();
      $('#createForm').show();
      $('#adminView').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "submitValidation",
    value: function submitValidation() {

      var html = "\n      \n\n        \n  ";
      var r = this.pipo;
      var a = document.getElementById("coc_name");
      var b = document.getElementById("coc_usn");
      var c = document.getElementById("coc_description");
      var d = document.getElementById("coc_out");
      var e = document.getElementById("coc_in");
      if (a.value != "" && b.value != "" && c.value != "" && d.value != "" & e.value != "") {
        alert("Request has been submitted");
        return this.createDesign();
      } else if (a.value == "" && b.value == "" && c.value == "" && d.value == "" & e.value == "") {
        alert("You haven't Filled up all the inputs");
        return this.createForm();
      }

      //Each Conditional Statement
      else if (a.value == "") {
          alert("Requesting Party and below must be Filled up");
          return this.createForm();
        } else if (b.value == "") {
          alert("USN and below must be Filled up");
          return this.createForm();
        } else if (c.value == "") {
          alert("Item Details and below must be Filled up");
          return this.createForm();
        } else if (e.value == "") {
          alert("Date in and below must be Filled up");
          return this.createForm();
        } else if (d.value == "") {
          alert("Date out and below must be Filled up");
          return this.createForm();
        } else {
          alert("You haven't filled up all the inputs");
          return this.createForm();
        }

      this.reRender("\n              " + html + "\n              ", document.getElementById("submitValidation"));
      $('#submitValidation').show();
      $('#validateForm').hide();
      $('#updateApproveId').hide();
      $('#createForm').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var html = "\n\n        ";
      var r = this.login;
      var passinInput1 = document.getElementById("username");
      var passinInput2 = document.getElementById("password");
      if (passinInput1.value == r[0].username && passinInput2.value == r[0].password || passinInput1.value == r[1].username && passinInput2.value == r[1].password || passinInput1.value == r[2].username && passinInput2.value == r[2].password || passinInput1.value == r[3].username && passinInput2.value == r[3].password || passinInput1.value == r[4].username && passinInput2.value == r[4].password) {
        alert("Login Successful! Welcome");
        return this.pipoList();
      } else if (passinInput1.value == "" && passinInput2.value == "") {
        alert("Username and Password must be filled up.");
        return this.loginForm();
      } else if (passinInput1.value == "") {
        alert("Username must be filled up.");
        return this.loginForm();
      } else if (passinInput2.value == "") {
        alert("Password must be filled up.");
        return this.loginForm();
      } else {
        alert("Incorrect Username or Password!. Try again");
        return this.loginForm();
      }

      this.reRender("\n              " + html + "\n              ", document.getElementById("validateForm"));
      $('#validateForm').show();
      $('#updateApproveId').hide();
      $('#createForm').hide();
      $('#adminView').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "logoutValidation",
    value: function logoutValidation() {

      var logoutStatement = confirm("Are you sure you want to Log out?");
      if (logoutStatement == true) {
        alert("You have Signed Out!");
        return this.loginForm();
      } else {
        return this.pipoList();
      }
      var html = "\n   \n        \n  ";

      this.reRender("\n              " + html + "\n              ", document.getElementById("logoutValidation"));
      $('#logoutValidation').show();
      $('#validateForm').hide();
      $('#updateApproveId').hide();
      $('#createForm').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "loginForm",
    value: function loginForm() {
      var html = "\n      \n\n        \n  ";

      html += "\n   <div class=\"container\" style=\"background-color:#f1f1f1\">\n  <div class=\"imgcontainer\">\n\n            <h2><i class=\"medium material-icons\">verified_user</i>Administrator Login </h2>\n    <img src=\"img/aa.jpg\">\n  </div>\n\n   <div class=\"container\" style=\"background-color:#f1f1f1\">\n    <label><b>Universal Administrator Number</b></label>\n    <input type=\"text\"id=\"username\" placeholder=\"Enter UAN\">\n    <label><b>Password</b></label>\n    <input type=\"password\"id=\"password\" placeholder=\"Enter Password\">\n    <button type=\"submit\"onclick=\"component.validateForm()\">Login</button>\n        <button type=\"button\"onclick=\"component.requestparty()\">Back</button>\n        <br>\n\n  </div>\n\n  </div>\n\n\n\n            ";

      this.reRender("\n              " + html + "\n              ", document.getElementById("createForm"));
      $('#validateForm').hide();
      $('#updateApproveId').hide();
      $('#createForm').show();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#adminView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "updatePipo",
    value: function updatePipo(id) {

      id = id - 1;

      var html = "\n\n\n\n            <section>       \n            <div id=\"wrapper\" >\n\n\n\n            <div id=\"login\" class=\"animate form\">\n\n            <h1><i class=\"medium material-icons right\">verified_user</i>Final Approval</h1> \n            <p> \n           <input disabled value=\"" + this.picture[0].approvepic + "\"id=\"cocimg\"type=\"hidden\">\n            </p>\n            <p> \n            <label for=\"username\"placeholder=\"Enter Name\"><i class=\"material-icons center\">mode_edit</i>Approve Name </label>\n            <input value=\"" + this.pipo[id].name + "\"id=\"cocname\"/>\n            </p>\n            <p> \n            <label for=\"username\"placeholder=\"Enter USN\"><i class=\"material-icons center\">contact_phone</i>Approve Usn </label>\n            <input value=\"" + this.pipo[id].usn + "\" id=\"cocusn\"/>\n            </p>\n            <p> \n            <label for=\"username\"placeholder=\"Enter Date In\"><i class=\"material-icons center\">offline_pin</i>Approve Date In </label>\n            <input value=\"" + this.pipo[id].datein + "\"id=\"cocin\"/>\n            </p>\n            <p> \n            <label for=\"username\"placeholder=\"Enter Date Out\"><i class=\"material-icons center\">call_received</i>Approve Date Out </label>\n            <input value=\"" + this.pipo[id].dateout + "\" id=\"cocout\"/>\n            </p>\n            <p> \n            <label for=\"username\"placeholder=\"Enter Item Details: \"><i class=\"material-icons center\">assignment</i>Approve Item Details: </label>\n            <input value=\"" + this.pipo[id].description + "\"id=\"cocdes\"/> </p>\n              <p> \n            <input disabled value=\"" + this.picture[0].approvepic + "\" id=\"approverequest\"type=\"hidden\"/>\n            </p>\n\n\n            </p>\n\n\n\n   \n\n\n            </p>\n            <p class=\"login button\"> \n            <a href=\"#\" class=\"action-button shadow animate blue\"onclick=\"component.pipoList()\">Close</a>\n            <a href=\"#\" class=\"action-button shadow animate red\"onclick=\"component.updateApproveId(" + id + ")\">Approve Request</a>\n\n\n            </form>\n            </div>\n\n\n\n            </div>\n            </div>  \n            </section>\n\n\n\n\n\n\n\n\n\n\n            ";
      this.reRender("\n\n              " + html + "\n\n              ", document.getElementById("updatePipo"));
      $('#updateApproveId').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').show();
      $('#recentHome').hide();
      $('#adminView').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "updateApprove",
    value: function updateApprove(id) {
      var r = this.searchPipoById(id);
      id = id - 1;

      var html = "\n\n             \n            <section>       \n            <div id=\"wrapper\" >\n            <div id=\"login\" class=\"animate form\">\n\n            <h1><i class=\"medium material-icons right\">verified_user</i>Check Request</h1> \n                <div class=\"card\">\n                <div class=\"card-image\">\n                <img src=\"" + this.pipo[id].image + "\">\n\n                </div>\n                <div class=\"card-stacked\">\n                <div class=\"card-content\">\n                <div class=\"left-align\">\n                    <h4 class=\"center-align\">Control #: " + this.pipo[id].id + "</h4>\n                <h2 class=\"center-align\">" + this.pipo[id].name + "</h2>\n                   <h2 class=\"center-align\">" + this.pipo[id].usn + "</h2>\n                       <br>\n                <p><b>Date In: </b>" + this.pipo[id].datein + "</p>\n                <p><b>Date Out: </b>" + this.pipo[id].dateout + "</p>\n                <p><b>Item Details:  </b>" + this.pipo[id].description + "</p>\n                </div>\n\n              <p class=\"login button\"> \n                    <br>\n            <a href=\"#\" class=\"action-button shadow animate blue\"onclick=\"component.pipoList()\">Back</a>\n            <a href=\"#\" class=\"action-button shadow animate green\"onclick=\"component.updatePipo(" + r.id + ")\">Verify this Request?</a>\n      <br>\n      <br>\n           <input disabled value=\"" + this.picture[0].approvepic + "\"id=\"cocimg\"type=\"hidden\">\n            <input disabled value=\"" + this.pipo[id].name + "\"id=\"cocname\"type=\"hidden\"/>\n            <input disabled value=\"" + this.pipo[id].usn + "\" id=\"cocusn\"type=\"hidden\"/>\n            <input disabled value=\"" + this.pipo[id].datein + "\"id=\"cocin\"type=\"hidden\"/>\n            <input disabled value=\"" + this.pipo[id].dateout + "\" id=\"cocout\"type=\"hidden\"/>\n            <input disabled value=\"" + this.pipo[id].description + "\"id=\"cocdes\"type=\"hidden\"/> </p>\n            <input disabled value=\"" + this.picture[0].approvepic + "\" id=\"approverequest\"type=\"hidden\"/>\n\n\n\n            </p>\n          \n\n            </form>\n            </div>\n\n\n\n            </div>\n            </div>  \n            </section>\n\n\n\n\n\n            ";

      this.reRender("\n\n              " + html + "\n\n              ", document.getElementById("updateApproveId"));
      $('#updateApproveId').show();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#adminView').hide();
      $('#createForm').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "landingPage",
    value: function landingPage() {
      var html = "\n\n\n\n\n            ";
      this.reRender("\n              " + html + "\n              ", document.getElementById("createForm"));
      $('#createForm').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').hide();
      $('#recentHome').show();
      $('#loginForm').hide();
      $('#adminView').hide();
      $('#landingPage').hide();
      $('#requestparty').hide();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }, {
    key: "requestparty",
    value: function requestparty() {

      var html = "\n\n<ul class=\"topnav\" id=\"myTopnav\">\n\n <li><a class=\"active\" href=\"#\"onclick=\"component.requestparty()\"><i class=\"material-icons\">lock_outline</i>Pass in Pass out</a></li> \n  <li><a href=\"#\"onclick=\"component.loginForm()\"><i class=\"material-icons\">verified_user</i>Login as Administrator</a></li>\n  <li><a href=\"#\"onclick=\"component.createForm()\"><i class=\"material-icons\">note_add</i>Get Pass Form</a></li>\n\n\n  \n\n  <li class=\"icon\">\n    <a href=\"javascript:void(0);\" style=\"font-size:15px;\" onclick=\"myFunction()\">\u2630</a>\n\n  </li>\n</ul>\n            <section id=\"home-section\" class=\"line\">\n            <div class=\"margin\">    \n            <div class=\"s-12 l-9\">\n\n\n            <article class=\"post-2 line\">                \n            <div class=\"s-12 l-6 post-image\">                   \n            <a href=\"#\"onclick=\"component.createForm()\">\n            <img src=\"img/pipo.png\">\n            </a>                \n            </div>\n            <div class=\"s-12 l-5 post-text\">\n            <a href=\"#\">\n            <center> <h2>Welcome <br>to</br> Pass in Pass out App</h2></center>\n                </a>\n              <center><a href=\"#\" class=\"action-button shadow animate grey\"onclick=\"component.createForm()\"><i class=\"small material-icons\">https</i>Get Form!</a></center>  \n            </div>                     \n            </article>\n\n            <article class=\"post-6 right-align line\">               \n            <div class=\"s-12 l-6 post-image\">                   \n            <a href=\"#\"onclick=\"component.loginForm()\">\n            <img src=\"img/login.png\" alt=\"Fashion 2\">\n            </a>                \n            </div>\n         \n            <div class=\"s-12 l-5 post-text\">\n            <a href=\"#\">\n            <h2><center>Login <br>As</br>Admin</center></h2> \n            </a>\n            <p>Login as Administrator here.\n            </p>  \n            <br>\n              <center><a href=\"#\" class=\"action-button shadow animate cyan\"onclick=\"component.loginForm()\"><i class=\"small material-icons\">verified_user</i>Login here</a></center>\n              \n            </div>\n           \n            </article>\n\n            <article class=\"post-3 line\">      \n            <div class=\"s-12 l-6 post-image\">                   \n            <a href=\"#\"onclick=\"component.checkRequest()\">\n            <img src=\"img/request.png\" alt=\"Fashion 3\">\n            </a>                \n            </div>\n              <div class=\"s-12 l-5 post-text\">\n\n            <a href=\"#\">\n            <h2>Check Request Form</h2>\n            </a>\n    \n  <p>Check Student Requests here.\n            </p>             <br>\n             <center><a href=\"#\" class=\"action-button shadow animate blue\"onclick=\"component.checkRequest()\"><i class=\"small material-icons\">offline_pin</i>Requests</a></center>            \n            </div>\n             \n            </article>\n\n          \n\n            </article>\n            <article class=\"post-5 right-align line\">\n            </article>\n\n               <article class=\"post-1 right-align line\">  \n               <div>\n                    \n\n    ";
      var r = this.pipo;
      var count = 0;
      for (var i = r.length - 1; i >= 0; i--) {
        if (count++ === 1) break;
        html += "\n\n                \n                     <div class=\"s-12 l-6 post-image\">\n              <div class=\"card \">\n              <div class=\"card-image\">\n                       <center> <h4>Control #: " + r[i].id + "</h4></center>\n              <img src=\"" + r[i].image + "\">\n              </div>\n              <div class=\"card-content\">\n             \n        <h2 class=\"center-align\">Name: " + r[i].name + " <br>Usn: " + r[i].usn + "<br></h2>\n        <br>\n\n                <center><a href=\"#\" class=\"action-button shadow animate purple\"onclick=\"component.recentView(" + r[i].id + ")\"><i class=\"material-icons\">assignment</i>Open</a></center>\n              </div>\n\n              </div>\n              </div>\n              ";
      }
      html += "\n                          \n                   \n            </div>\n\n            <div class=\"s-12 l-4 post-text\">\n            <a href=\"#\">\n            <h2>Recent Request</h2>\n                <h2></h2>\n            </a>\n            <p>This is the Latest Request that the user submbitted to the system. He/she is recommended to wait for the approval of the adminisrator so he can freely pass in and out the campus.          \n            </p>\n            </div>\n\n            </article>\n            <article class=\"post-5 right-align line\">\n\n      <div class=\"s-12 l-5 post-text\">\n            <a href=\"#\">\n            <center><h2>For More Info...</h2></center>\n            </a>\n            <center>\n            <p>Hello Guys, Thank you for Visiting my App!</p>          \n             </center>\n           <br>\n\n             <center><a href=\"https://www.facebook.com/Aruukazorudickuru\" class=\"action-button shadow animate green \"><i class=\"material-icons\">message</i>Message!</a></center>\n                 <br> \n        <center><a href=\"https://github.com/ChocoleytReeseDC\" class=\"action-button shadow animate red \">GitHub!</a></center>\n          \n            </div>\n <div class=\"s-12 l-7 post-image\">                   \n            <a href=\"https://www.facebook.com/Aruukazorudickuru\">\n            <img src=\"img/reese.jpg\" alt=\"Fashion 4\">\n            </a>            \n            </div>\n\n           \n               \n            </div>      \n          \n       \n\n                              </div>\n            </aside>\n            </div>\n            </div>\n            </section>\n\n\n\n            <div class=\"line\">\n            <footer>\n            <div class=\"s-12 l-8\">\n            <p>\n\n            <a href=\"https://www.facebook.com/Aruukazorudickuru\">Copyright 2016, @ArrukaZorudickuru</a><br>\n            <a href=\"https://github.com/ChocoleytReeseDC\"> @Github ChocoleytReeseDc</a>\n            <br>\n\n            Visit also my Clash of Clans App\n            <a href=\"http://decodeapp-herokudelacruz.herokuapp.com/\">@Clash of Clans App!</a>\n            Thanks for visiting my App <3.\n\n            </p>\n            </div>\n\n            <div class=\"s-12 l-4\">                                \n            <a class=\"right\" href=\"https://www.facebook.com/Aruukazorudickuru\"target=\"_blank\">Static-Responsive-Dynamic<br>\n            by Winter Chocoleyt Dela Cruz \n            </a>              \n\n            </div>\n            </footer>\n\n\n\n\n            ";

      html += "  \n\n            ";
      this.reRender("\n              " + html + "\n              ", document.getElementById("requestparty"));
      $('#createForm').hide();
      $('#pipoList').hide();
      $('#pipoView').hide();
      $('#updatePipo').hide();
      $('#recentHome').hide();
      $('#loginForm').hide();
      $('#landingPage').hide();
      $('#adminView').hide();
      $('#requestparty').show();
      $('#checkRequest').hide();
      $('#approveView').hide();
      $('#updateItems').hide();
      $('#recentView').hide();
    }
  }]);

  return Component;
}(App);

var component = new Component();
component.baseLayout();

// <div id="register" class="animate form">

//                            <h1><i class="medium material-icons right">library_add</i> Sign up </h1> 
//                            <p> 
//                                <label for="usernamesignup"><i class="material-icons">mode_edit</i>Username</label>
//                                <input id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="Enter Valid Username" />
//                            </p>

//                            <p> 
//                                <label for="emailsignup" ><i class="material-icons ">email</i>Email Address</label>
//                                <input id="emailsignup" name="emailsignup" required="required" type="email" placeholder="Enter Valid Email"/> 
//                            </p>
//                            <p> 
//                                <label for="passwordsignup" ><i class="material-icons ">info_outline</i>Password </label>
//                                <input id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="Enter Valid Password"/>
//                            </p>
//                            <p> 
//                                <label for="passwordsignup_confirm" ><i class="material-icons ">info_outline</i>Confirm Password </label>
//                                <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="Confirm Password"/>
//                            </p>  

//                            <p class="signin button"> 
//                              <a href="#" class="action-button shadow animate red"onclick="component.loginForm()">Sign up</a>

//            </p>
//                            <p class="change_link">  
//              Already a member ?
//              <a href="#tologin" class="to_register"> Go and log in </a>
//            </p>
//                        </form>
//                    </div>
