import { MaterialSectionController } from '../controllers/MaterialSectionController';

//Directive definition for the MaterialSection component.
export function MaterialSectionDirective() {
  'ngInject';

  return {
    restrict: 'E',
    scope: true,
    transclude: true,
    templateUrl: 'components/material-section/tmpl/material-section.html',
    bindToController: true,
    controllerAs: '$materialSection',
    controller: MaterialSectionController
  };
};
