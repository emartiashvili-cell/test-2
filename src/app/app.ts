import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // =========================
  // AUTH
  // =========================

  isLoggedIn = false;

  showSignIn = false;
  showSignUp = false;

  firstName = '';
  lastName = '';
  email = '';
  password = '';
  repeatPassword = '';

  loginEmail = '';
  loginPassword = '';

  message = '';
  messageType = '';

  // =========================
  // CART
  // =========================

  cartCount = 0;
  cartTotal = 0;

  // =========================
  // AUTH FUNCTIONS
  // =========================

  openSignIn() {
    this.showSignIn = true;
    this.showSignUp = false;

    this.message = '';
    this.messageType = '';
  }

  openSignUp() {
    this.showSignUp = true;
    this.showSignIn = false;

    this.message = '';
    this.messageType = '';
  }

  closeAuth() {
    this.showSignIn = false;
    this.showSignUp = false;

    this.message = '';
    this.messageType = '';
  }

  // =========================
  // SIGN UP
  // =========================

  register() {

    if (
      !this.firstName.trim() ||
      !this.lastName.trim() ||
      !this.email.trim() ||
      !this.password ||
      !this.repeatPassword
    ) {
      this.message = 'Please fill in all fields.';
      this.messageType = 'error';
      return;
    }

    if (!this.email.includes('@')) {
      this.message = 'Please enter a valid email address.';
      this.messageType = 'error';
      return;
    }

    if (this.password.length < 6) {
      this.message = 'Password must contain at least 6 characters.';
      this.messageType = 'error';
      return;
    }

    if (this.password !== this.repeatPassword) {
      this.message = 'Passwords do not match.';
      this.messageType = 'error';
      return;
    }

    /*
      Save registered user information.
      This is frontend-only authentication.
    */

    localStorage.setItem(
      'foodgoUser',
      JSON.stringify({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      })
    );

    this.message = 'Registration successful!';
    this.messageType = 'success';

    this.loginEmail = this.email;
    this.loginPassword = '';

    setTimeout(() => {

      this.showSignUp = false;
      this.showSignIn = true;

      this.message = 'Account created. Please sign in.';
      this.messageType = 'success';

    }, 800);
  }

  // =========================
  // SIGN IN
  // =========================

  login() {

    if (!this.loginEmail.trim() || !this.loginPassword) {

      this.message = 'Please enter email and password.';
      this.messageType = 'error';

      return;
    }

    const savedUser = localStorage.getItem('foodgoUser');

    if (!savedUser) {

      this.message = 'No account found. Please sign up first.';
      this.messageType = 'error';

      return;
    }

    const user = JSON.parse(savedUser);

    if (
      this.loginEmail !== user.email ||
      this.loginPassword !== user.password
    ) {

      this.message = 'Incorrect email or password.';
      this.messageType = 'error';

      return;
    }

    this.firstName = user.firstName;
    this.lastName = user.lastName;

    this.isLoggedIn = true;

    this.showSignIn = false;
    this.showSignUp = false;

    this.message = 'Welcome back, ' + this.firstName + '!';
    this.messageType = 'success';

    setTimeout(() => {
      this.message = '';
    }, 2500);
  }

  // =========================
  // LOG OUT
  // =========================

  logout() {

    this.isLoggedIn = false;

    this.showSignIn = false;
    this.showSignUp = false;

    this.loginPassword = '';

    this.message = 'You have logged out successfully.';
    this.messageType = 'success';

    setTimeout(() => {
      this.message = '';
    }, 2500);
  }

  // =========================
  // CART
  // =========================

  addToCart(price: number) {

    this.cartCount++;
    this.cartTotal += price;

    this.message = 'Item added to cart!';
    this.messageType = 'success';

    setTimeout(() => {
      this.message = '';
    }, 1800);
  }

  // =========================
  // REMOVE FROM CART
  // =========================

  removeFromCart(price: number) {

    if (this.cartCount > 0) {

      this.cartCount--;

      this.cartTotal -= price;

      if (this.cartTotal < 0) {
        this.cartTotal = 0;
      }
    }
  }
} 