import LuckyUserModel from './LuckyUserModel';

export default interface EventModel {
    eventId?: string;
    eventName?: string;
    eventDrawDuration?: number;
    eventTime?: string;
    eventLuckyUserListName?: string;
    pendingLuckyUsers?: LuckyUserModel[];
}
