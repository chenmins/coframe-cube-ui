//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';

export default {
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
}
