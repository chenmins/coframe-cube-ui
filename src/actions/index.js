//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import HelpControllerImpl from './platform-help/HelpControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';

export default {
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
}
