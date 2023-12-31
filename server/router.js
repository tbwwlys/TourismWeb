let express = require('express')
let router = express.Router()
let user = require('./API/user')
let swiperList = require('./API/swiperList')
let categoryList = require('./API/categoryList')
let articleLeft = require('./API/articleLeft')
let articleRight = require('./API/articleRight')
let detail = require('./API/detail')
let detailPicture = require('./API/detailPicture')
let comments = require('./API/comments')
let communityPostText = require('./API/communityPostText')
let communityPostImg = require('./API/communityPostImg')
let hotelList = require('./API/hotelList')
let hotelDetail = require('./API/hotelDetail')
let hotelDetailPic = require('./API/hotelDetailPic')
let roomList = require('./API/roomList')
let room = require('./API/room')

router.get('/register', user.add)
router.get('/login', user.get)
router.get('/swiperList', swiperList.get)
router.get('/categoryList', categoryList.get)
router.get('/articleLeft', articleLeft.get)
router.get('/articleRight', articleRight.get)
router.get('/detail', detail.get)
router.get('/detailPicture', detailPicture.get)
router.get('/comments', comments.get)
router.get('/communityPostText', communityPostText.get)
router.get('/communityPostImg', communityPostImg.get)
router.get('/hotelList', hotelList.get)
router.get('/hotelDetail', hotelDetail.get)
router.get('/hotelDetailPic', hotelDetailPic.get)
router.get('/roomList', roomList.get)
router.get('/room', room.get)

module.exports = router