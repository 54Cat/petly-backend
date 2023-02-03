const getNoticesByCategory = require('./getNoticesByCategory');
const getNoticeById = require('./getNoticeById');
const getUsersNotices = require('./getUsersNotices');
const addNotice = require('./addNotice');
const deleteNotice = require('./deleteNotice');
const getFavoriteNotices = require('./getFavoriteNotices');
const addFavoriteNotice = require('./addFavoriteNotice');
const getTitleNotice = require('./getTitleNotice');


module.exports = {    
    getNoticesByCategory,
    getNoticeById,
    getUsersNotices,
    addNotice,
    deleteNotice,
    getFavoriteNotices,
    addFavoriteNotice,
    getTitleNotice,
    
}