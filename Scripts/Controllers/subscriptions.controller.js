/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("SubscriptionsController", [
        "$scope",
        function ($scope) {
            $scope.title = "Subscriptions";

            $scope.getFeed();

            $scope.unsubscribe = function (author) {
                $scope.models.subscriptions = $scope.models.subscriptions.filter(function (subscriptions) {
                    return subscriptions != author;

                });

                $scope.getFeed();
                $scope.saveSubscriptions();

            };

        }
    ]);