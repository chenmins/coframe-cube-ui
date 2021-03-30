//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import HelpControllerImpl from './platform-help/HelpControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';

export default {
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
}
