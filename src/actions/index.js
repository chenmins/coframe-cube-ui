//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import HelpControllerImpl from './platform-help/HelpControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';

export default {
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
}
