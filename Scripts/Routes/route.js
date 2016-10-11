angular.module("mainModule")
    .config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $routeProvider

            .when("/", {
                templateUrl: "Views/Home.html",
                controller: "HomeController",
                CaseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Posts/New", {
                templateUrl: "Views/Posts/NewPost.html",
                controller: "NewPostController",
                CaseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Posts/Edit/:id", {
                templateUrl: "Views/Posts/EditPost.html",
                controller: "EditPostController",
                CaseInsensitiveMatch: true,
                activeTab: "Home"
            })
            .when("/Subscriptions", {
                templateUrl: "Views/Subscriptions.html",
                controller: "SubscriptionsController",
                CaseInsensitiveMatch: true,
                activeTab: "Subscriptions"
            })
            .when("/Admin", {
                templateUrl: "Views/Admin.html",
                controller: "AdminController",
                CaseInsensitiveMatch: true,
                activeTab: "Admin"
            });
        }
    ]);