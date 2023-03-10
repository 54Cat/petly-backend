const getNoticesByCategory = require('./getNoticesByCategory');
const getNoticeById = require('./getNoticeById');
const getUsersNotices = require('./getUsersNotices');
const addNotice = require('./addNotice');
const deleteNotice = require('./deleteNotice');
const getFavoriteNotices = require('./getFavoriteNotices');
const findNotice = require('./findNotice');
const updateFavoriteNotice = require('./updateFavoriteNotice');

module.exports = {    
    getNoticesByCategory,
    getNoticeById,
    getUsersNotices,
    addNotice,
    deleteNotice,
    getFavoriteNotices,
    findNotice,
    updateFavoriteNotice
}