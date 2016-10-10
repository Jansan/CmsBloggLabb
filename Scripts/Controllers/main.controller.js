angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function ($scope, $location, $route, postsApi) {
            $scope.$route = $route;
            $scope.posts = [];

                 postsApi.getPosts()
               .then(function (data) {
                   if (data != null)
                       $scope.posts = data;
               });
            
                $scope.go = function (url) {
                $location.path(url);
            };
        }

    ]);