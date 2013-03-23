angular.module('copyService', ['ngResource'])
    .factory('CopyService', function($resource) {
        return $resource('assets/data/copy/copy_en_GB.json');
});
