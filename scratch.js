body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.container {
  margin: 0 auto;
  max-width: 1280px;
  width: 90%;
}

@media only screen and (min-width: 601px) {
  .container {
    width: 85%;
  }
}

@media only screen and (min-width: 993px) {
  .container {
    width: 70%;
  }
}

.col .row {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.row {
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
}

.row .col {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 0.75rem;
  min-height: 1px;
}

/* .row .col.s8 {
  width: 66.6666666667%;
  margin-left: auto;
  left: auto;
  right: auto;
} */

/* .row .col.s12 {
  width: 100%;
  margin-left: auto;
  left: auto;
  right: auto;
} */

/* .row .col.offset-s2 {
  margin-left: 16.6666666667%;
} */

.btn-flat {
  border: none;
  border-radius: 2px;
  display: inline-block;
  height: 36px;
  line-height: 36px;
  padding: 0 16px;
  text-transform: uppercase;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
  font-size: 14px;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: transparent;
  color: #343434;
  cursor: pointer;
  -webkit-transition: background-color 0.2s;
  transition: background-color 0.2s;
}

.center-align {
  text-align: center;
}

.input-field.col {
  left: 0.75rem;
}

#container {
  position: fixed;
  width: 340px;
  height: 280px;
  left: 50%;
  margin-left: -170px;
}

form {
  margin: 0 auto;
  margin-top: 20px;
}

/* label {
  color: #555;
  display: inline-block;
  margin-left: 18px;
  padding-top: 10px;
  font-size: 14px;
} */

p a {
  font-size: 11px;
  color: #aaa;
  margin-top: -13px;
  margin-right: 20px;
}

p a:hover {
  color: #555;
}

input {
  font-family: "Helvetica Neue", Helvetica, sans-serif;
  font-size: 12px;
  outline: none;
}

input[type=text],
input[type=password] {
  color: #777;
  padding-left: 10px;
  margin: 10px;
  margin-top: 12px;
  margin-left: 18px;
  width: 290px;
  height: 35px;
}

#lower {
  background: #ecf2f5;
  width: 100%;
  height: 69px;
  margin-top: 20px;
}

.z-depth-2 {
  -webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
          box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
}

nav {
  color: #fff;
  background-color: #ee6e73;
  width: 100%;
  height: 56px;
  line-height: 56px;
}

nav.nav-extended {
  height: auto;
}

nav.nav-extended .nav-wrapper {
  min-height: 56px;
  height: auto;
}

nav.nav-extended .nav-content {
  position: relative;
  line-height: normal;
}

.white {
  background-color: #FFFFFF !important;
}

nav .brand-logo {
  position: absolute;
  color: #fff;
  display: inline-block;
  font-size: 2.1rem;
  padding: 0;
}

nav .brand-logo.center {
  left: 50%;
  -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
}

@media only screen and (max-width: 992px) {
  nav .brand-logo {
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
  nav .brand-logo.left, nav .brand-logo.right {
    padding: 0;
    -webkit-transform: none;
            transform: none;
  }
  nav .brand-logo.left {
    left: 0.5rem;
  }
  nav .brand-logo.right {
    right: 0.5rem;
    left: auto;
  }
}

nav .brand-logo.right {
  right: 0.5rem;
  padding: 0;
}

.black-text {
  color: #000000 !important;
}

.material-icons {
  text-rendering: optimizeLegibility;
  -webkit-font-feature-settings: 'liga';
     -moz-font-feature-settings: 'liga';
          font-feature-settings: 'liga';
}

nav i.material-icons {
  display: block;
  font-size: 24px;
  height: 56px;
  line-height: 56px;
}

nav .brand-logo i.material-icons {
  float: left;
  margin-right: 15px;
}