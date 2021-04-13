//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import BarberControllerImpl from './platform-order/BarberControllerImpl';
import HelpControllerImpl from './platform-help/HelpControllerImpl';

export default {
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    BarberControllerImpl: vuexDecorator('BarberControllerImpl',BarberControllerImpl),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
}
