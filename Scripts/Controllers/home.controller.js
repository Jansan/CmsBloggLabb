angular.module("mainModule")
    .controller("HomeController", [
        "$scope",
        "$routeParams",
        "postsApi",
        function ($scope, $routeParams, postsApi) {
            $scope.title = "Home";
            
            
            $scope.subscribe = function (author) {
                if ($scope.models.subscriptions.indexOf(author) == -1) {
                    $scope.models.subscriptions.push(author);
                }


                $scope.saveSubscriptions();
                $scope.getFeed();
            };

            $scope.$watch("models.posts", function (posts) {


                $scope.post = $scope.models.posts.filter(function (post) {
                    return post.id == $routeParams.id;

                })[0];
            });

            //up voting
            $scope.upVote = function (post) {
                post.upvotes++;
                postsApi.upvotePost(post);
            }
            //down voting
            $scope.downVote = function (post) {
                post.downvotes++;
                postsApi.downvotePost(post);
            }
            
            
        }
    ]);
        