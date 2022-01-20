import {Message} from 'primeng/api';

export const SUCCESSFULLY_UPLOADED_LUCKY_USERS_LIST_MESSAGE: Message = {
    severity: 'success',
    summary: 'Thành công tải lên máy chủ!',
    detail: 'Tải danh sách người tham dự lên máy chủ thành công!'
};

export const FAILED_UPLOAD_LUCKY_USERS_LIST_MESSAGE: Message = {
    severity: 'error',
    summary: 'Thất bại khi tải lên máy chủ!',
    detail: 'Tải danh sách người tham dự lên máy chủ thất bại!'
};

export const INVALID_UPLOAD_EXCEL_XLSX_FILE: Message = {
    severity: 'error',
    summary: 'Lỗi khi tải lên tệp tin',
    detail: 'Chỉ chấp nhận định dạng tệp tin Excel dạng XLSX'
};

export const SUCCESSFULLY_UPLOADED_THEN_FILL_MISSING_FIELDS: Message = {
    severity: 'success',
    summary: 'Tải lên dữ liệu người tham dự thành công!',
    detail: 'Hãy điền thông tin cần thiết để tạo danh sách mới nhé!',
};
