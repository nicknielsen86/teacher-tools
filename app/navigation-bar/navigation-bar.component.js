'use strict';

angular.module('navigationBar', []).
component('navigationBar', {
  templateUrl: 'navigation-bar/navigation-bar.template.html',
  controller: [navigationBarController]
});

function navigationBarController() {
  var self = this;

  try {
    self.navigation = getRouts('navBar');
  } catch (e) {
    console.log("Warning: function 'getRouts' does not exists");
  }
}