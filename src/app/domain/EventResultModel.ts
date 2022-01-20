import LuckyUserModel from './LuckyUserModel';

export default interface EventResultModel {
    id?: string;
    eventId?: string;
    eventName?: string;
    luckyUsersList?: LuckyUserModel[];
}
