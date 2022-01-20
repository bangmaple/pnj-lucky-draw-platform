import {Message} from 'primeng/api';


export const INVALID_CSV_FORMAT: Message = {
    severity: 'error',
    summary: 'Tệp tin CSV bị lỗi!',
    detail: 'Mình chỉ chấp nhận tệp CSV theo mẫu hợp lệ thôi bạn nhé! 😿'
};

export const ERROR_NOT_VALIDATED_LUCKY_USERS_LIST_NAME: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo danh sách người tham dự!',
    detail: 'Vui lòng không được để trống tên danh sách tham dự!'
};

export const ERROR_NOT_UPLOADED_LUCKY_USERS_LIST: Message = {
    severity: 'error',
    summary: 'Lỗi khi tạo danh sách người tham dự!',
    detail: 'Chưa có danh sách người dùng nào được tải lên!'
};

export const SUCCESS_CREATED_LUCKY_USERS_LIST: Message = {
    severity: 'success',
    summary: 'Thành công',
    detail: 'Thành công khi tạo danh sách người tham dự!'
};
