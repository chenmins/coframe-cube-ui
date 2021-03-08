//Do not modify this file, it will be auto generated
import vuexDecorator from '@lib/vuexDecorator';

import DictApiController from './platform-user/DictApiController';
import AuthApiController from './platform-user/AuthApiController';
import CulturalControllerImpl from './platform-cultural/CulturalControllerImpl';
import PipeReportController from './platform-health/PipeReportController';
import HealthApiController from './platform-health/HealthApiController';
import HelpControllerImpl from './platform-help/HelpControllerImpl';
import WorkCartControllerImpl from './platform-card/WorkCartControllerImpl';
import ScheduleControllerImpl from './platform-schedule/ScheduleControllerImpl';
import WorkCardFeignImpl from './platform-dal/WorkCardFeignImpl';
import HelpFeignImpl from './platform-dal/HelpFeignImpl';
import CulturalFeignImpl from './platform-dal/CulturalFeignImpl';
import ScheduleFeignImpl from './platform-dal/ScheduleFeignImpl';
import UserAttrApiFeignImpl from './platform-dal/UserAttrApiFeignImpl';

export default {
    DictApiController: vuexDecorator('DictApiController',DictApiController),
    AuthApiController: vuexDecorator('AuthApiController',AuthApiController),
    CulturalControllerImpl: vuexDecorator('CulturalControllerImpl',CulturalControllerImpl),
    PipeReportController: vuexDecorator('PipeReportController',PipeReportController),
    HealthApiController: vuexDecorator('HealthApiController',HealthApiController),
    HelpControllerImpl: vuexDecorator('HelpControllerImpl',HelpControllerImpl),
    WorkCartControllerImpl: vuexDecorator('WorkCartControllerImpl',WorkCartControllerImpl),
    ScheduleControllerImpl: vuexDecorator('ScheduleControllerImpl',ScheduleControllerImpl),
    WorkCardFeignImpl: vuexDecorator('WorkCardFeignImpl',WorkCardFeignImpl),
    HelpFeignImpl: vuexDecorator('HelpFeignImpl',HelpFeignImpl),
    CulturalFeignImpl: vuexDecorator('CulturalFeignImpl',CulturalFeignImpl),
    ScheduleFeignImpl: vuexDecorator('ScheduleFeignImpl',ScheduleFeignImpl),
    UserAttrApiFeignImpl: vuexDecorator('UserAttrApiFeignImpl',UserAttrApiFeignImpl),
}
