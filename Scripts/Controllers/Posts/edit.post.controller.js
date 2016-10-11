angular.module("mainModule")
    .controller("EditPostController", [
        "$scope",
        "$routeParams",
        "postsApi",
        function ($scope, $routeParams, postsApi) {
            $scope.title = "New post";
            $scope.post = $scope.models.posts.filter(function (post) {
                return post.id == $routeParams.id;

            })[0];

            $scope.updatePost = function () {
                postsApi.updatePost($scope.post)
                    .then(function (data) {
                        $scope.models.post = data;
                        $scope.go('/Admin');
                    });
            };
        }
    ]);