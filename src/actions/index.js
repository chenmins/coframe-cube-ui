//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import HelpControllerImpl from './platform-help/HelpControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';

export default {
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
}
