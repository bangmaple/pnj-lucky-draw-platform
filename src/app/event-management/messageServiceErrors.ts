import {Message} from 'primeng/api';

export const ERROR_PLEASE_UPLOAD_LUCKY_USERS: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo mới sự kiện',
    detail: 'Vui lòng tải lên danh sách người tham dự sự kiện. 😿'
};

export const ERROR_PLEASE_SELECT_LUCKY_USERS: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo mới sự kiện',
    detail: 'Vui lòng chọn danh sách người tham dự trước khi tạo. 😅'
};

export const SUCCESS_CREATED_AN_EVENT: Message = {
    severity: 'success',
    summary: 'Thành công! 😻',
    detail: 'Bạn đã hoàn tất thêm một sự kiện vào hàng chờ! 🤘'
};

export const ERROR_BLANK_EVENT_NAME: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo mới sự kiện',
    detail: 'Vui lòng không được để trống tên sự kiện. 😿'
};

export const ERROR_EVENT_DURATION_NOT_VALIDATED: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo mới sự kiện',
    detail: 'Vui lòng không được để thời gian quay số bé hơn 1 hoặc lớn hơn 100. 😿'
};

export const ERROR_EMPTY_EVENTS: Message = {
    severity: 'error',
    summary: 'Sự kiện có sẵn đang trống 😿',
    detail: 'Bạn hãy tạo một sự kiện để bắt đầu thôi nhé 😼 !'
};
