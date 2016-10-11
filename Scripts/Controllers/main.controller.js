angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        "postsApi",
        function ($scope, $location, $route, postsApi) {
            $scope.$route = $route;
            $scope.models = {
                posts: [],
                subscriptions: []

            }
           

                 postsApi.getPosts()
               .then(function (data) {
                   if (data != null)
                       $scope.models.posts = data;
               });


                 $scope.getFeed = function () {
                     angular.forEach($scope.models.posts, function (post) {
                         if ($scope.models.subscriptions.indexOf(post.author) != -1)
                             post.subscribed = true;
                         else
                             post.subscribed = false;

                     });


                 };
                 $scope.loadSubscriptions = function () {

                     var dataString = localStorage.getItem("subscriptions");
                     if (dataString)
                         $scope.models.subscriptions = JSON.parse(dataString);


                 };
            
                 $scope.saveSubscriptions = function () {
                     var jsonString = JSON.stringify($scope.models.subscriptions);
                     localStorage.setItem("subscriptions", jsonString);

                 };



                 $scope.loadSubscriptions();
                 $scope.getFeed();

            
                $scope.go = function (url) {
                $location.path(url);
            };
        }

    ]);