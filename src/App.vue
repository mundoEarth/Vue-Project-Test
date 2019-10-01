<template>
  <div id="app">
     
      <div>
        <b-navbar type="dark" variant="info" toggleable="lg">
          <div class="container">
            <b-navbar-brand href="#">Mundo Earth</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Home</b-nav-item>
                <b-nav-item href="#">Blog</b-nav-item>
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
            </b-collapse>
          </div>
        </b-navbar>
      </div>
      <div class="container">
        <!-- <h1>Let's Go Somewhere</h1> -->
        <!--  <hr>
        
         <router-link to="/">Home</router-link>&nbsp;
         <router-link to="/users/10">Users 10</router-link>&nbsp;
         <router-link to="/people/2">People</router-link>
          
         <hr> -->
          <div class="pt-4">
            <router-view></router-view>
          </div>
      </div>
  </div>
</template>
