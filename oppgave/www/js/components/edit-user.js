import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  static styles = css`
    .formClass {
        text-align: center;
        border-radius: 12px;
      }
    .form-group{
      widt: 50rem;
      font-family: Verdana, Courier, monospace;
    }
    .btn {
      background-color: #4CAF50;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 15px;
      border-radius: 12px;
    }
    .btn:hover{
      background-color: darken(#C06C84,20%);
      color:white;
      box-shadow: 0 4px 17px rgba(0,0,0,0.2);
      transform: translate3d(0, -2px, 0);
    }
    `;

  render() {
    return html `
    <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    </head>
    <form onSubmit = "javascript: return false;" id = "userForm" method="POST">
      <div class ="form-group">
      <label for="email"> E-Mail Adress</label>
      <input class="formClass" id="userName" name="uname" type="text" value="${this.user.uname}" required>
      <input type="hidden" id="userId" name="uid" value="${this.user.uid}">
    </div>
    <div class ="form-group">
    <label for="firstName">First Name</label>
    <input class="formClass" id="firstName" name="firstName" type="text" value="${this.user.uname}" required>
    </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input class="formClass" id="lastName" name="lastName" type="text" value="${this.user.lastName}" required>
    </div>
    <div class="form-group">
      <label for="oldpwd">Old Password</label>
      <input type="password" class="formClass" id="oldpwd" name="oldpwd" type="text" value="">
    </div>
    <div class="form-group">
      <label for="newpwd">New Password</label>
      <input type="password" class="formClass" id="passwrd" name="passwrd" type="text" value="">
      <div>
        <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn mt-3" value="Submit">
      </div>
     
    </form>
    `;
  }

   updateUser(e) {
    const dataForm = new FormData(e.target.form);
    console.log(e)
    fetch('api/updateUser.php', {
     method: 'POST',
     body: dataForm
    }).then(res=>res.json())
      .then(data=>{
        if (data.status=='success') {
            console.log("The user was updated");
        } else {
            console.log("The user was not updated");
        }
      })
  }

}
customElements.define('edit-user', EditUser);
