//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import HelpControllerImpl from './platform-help/HelpControllerImpl';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';

export default {
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
}
