'use strict';

describe('navigation-bar', function() {

  beforeEach(module('navigationBar'));

  describe('navigationBarController', function(){

    it('should get a and display a set of nav items', inject(function($controller, _$httpBackend_) {
      var ctrl,
          http = _$httpBackend_

      http.expectGET('navigation/pages.json')
                    .respond([{href: 'lesson/123'}, {href: 'lesson/321'}]);
      
      ctrl = $controller('navigationBarController');
      
      expect(ctrl).toBeDefined();
      expect(ctrl.navigation).toEqual([]);

      http.flush();

      expect(ctrl.navigation).toEqual([{href: 'lesson/123'}, {href: 'lesson/321'}]);
      expect(navList.count()).toBe(2);
    }));

  });
});