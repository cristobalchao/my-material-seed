// CSS modules
import 'angular-material/angular-material.css';
import './app.module.scss';

// Angular modules.
import Main from './main/_module';
import Configurations from './configuration/_module';
import Components from './components/_module';


export default angular
   .module('myMaterialSeed', [
      'ngMaterial',
      'ngRoute',
      'ngAria',
      'ngResource',
      Main.name,
      Configurations.name,
      Components.name
   ]);
