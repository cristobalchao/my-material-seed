/**
 * Controller for the MaterialSection component.
 */
export class MaterialSectionController {
  /**
   * @constructor
   * @param {!angular.Scope} $scope
   */
  constructor($scope) {
    'ngInject';

    this._$scope = $scope;
  }

  $onInit() {
    this.buttonTag = 'Hello material';
  }
}
