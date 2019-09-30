<template>
  <div id="app">
     
      <div>
        <b-navbar type="dark" variant="info">
          <div class="container">
            <b-navbar-nav>
              <b-nav-item href="#">Home</b-nav-item>

              <!-- Navbar dropdowns -->
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="User" right>
                <b-dropdown-item href="#">Account</b-dropdown-item>
                <b-dropdown-item href="#">Settings</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </div>
        </b-navbar>
      </div>
      <div class="container">
        <!-- <h1>Let's Go Somewhere</h1> -->
         <hr>
        
         <router-link to="/">Home</router-link>&nbsp;
         <router-link to="/users/10">Users 10</router-link>&nbsp;
         <router-link to="/people/2">People</router-link>
          
         <hr>
         <router-view></router-view>
      </div>
  </div>
</template>
