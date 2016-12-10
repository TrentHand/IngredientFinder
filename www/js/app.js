// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var app = angular.module("IngredientFinder", ["ngRoute", "ionic", "ngCordova"]);

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
  AuthFactory.isAuthenticated()
  .then((userExists) => {
    if(userExists){
      resolve();
    } else {
      reject();
    }
  });
});

app.config(function ($routeProvider, $ionicConfigProvider) {

    $routeProvider.
        when("/login", {
            templateUrl: "partials/Login.html",
            controller: "LoginCtrl"
        }).
        when("/viewproduct", {
            templateUrl: "partials/SingleProduct.html",
            controller: "SingleProductCtrl"
        }).
        when("/main", {
            templateUrl: "partials/ViewAllProducts.html",
            controller: "ViewAllProductsCtrl"
        }).
        when("/viewlocation", {
            templateUrl: "partials/ViewSingleLocation.html",
            controller: "ViewSingleLocationCtrl"
        }).
        when("/addlocation", {
            templateUrl: "partials/AddLocation.html",
            controller: "AddLocationCtrl",
            resolve: {isAuth}
        }).
        when("/addproduct", {
            templateUrl: "partials/NewProduct.html",
            controller: "NewProductCtrl",
            resolve: {isAuth}
        }).
        when("/viewuserlocations", {
            templateUrl: "partials/ViewUserLocations.html",
            controller: "ViewUserLocationsCtrl",
            resolve: {isAuth}
        }).
        when("/viewuserproducts", {
            templateUrl: "partials/ViewUserProductss.html",
            controller: "ViewUserProductsCtrl",
            resolve: {isAuth}
        }).
        // not sure what this will be used for
        // when("/trips/:tripId", {
        //     templateUrl: "partials/trip-details.html",
        //     controller: "TripDetailCtrl"
        // }).
        otherwise('/')
})

app.run( ($location, FBCreds) => {
    let creds = FBCreds
    let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
    }
    firebase.initializeApp(authConfig)
})