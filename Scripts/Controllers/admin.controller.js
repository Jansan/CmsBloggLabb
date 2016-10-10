angular.module("mainModule")
    .controller("AdminController", [
        "$scope",
        "postsApi",
        function ($scope, postsApi) {
            $scope.title = "Admin Page";

            //delete function
            $scope.deletePost = function (post) {
                postsApi.deletePost(post.id)
                .then(function () {
                    var index = $scope.posts.map(function (post) {
                        return post.id;
                    }).indexOf(post.id);

                    $scope.posts.splice(index, 1);
                });
            }//end of delete function

            
        }
           

    ]);