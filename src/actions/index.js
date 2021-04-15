//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import HelpControllerImpl from './platform-help/HelpControllerImpl';

export default {
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
}
