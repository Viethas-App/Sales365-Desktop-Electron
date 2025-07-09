"use strict";
(self["webpackChunkSales365_Viethas"] = self["webpackChunkSales365_Viethas"] || []).push([["src_app_sales_menu_manage_socials-channel_socials-channels_module_ts"],{

/***/ 69404:
/*!********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/services/facebook.service.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FacebookService": () => (/* binding */ FacebookService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);


class FacebookService {
    // FB.api(path, method, params, callback)
    constructor(vhAuth) {
        this.vhAuth = vhAuth;
    }
    /**
     * Khởi tạo sdk với id
     * @param id_facebook_app  //id này lấy ở app trên facebook
     */
    init(id_facebook_app) {
        try {
            return Promise.resolve(FB.init({
                appId: id_facebook_app,
                status: true,
                xfbml: true,
                version: 'v19.0'
            }));
        }
        catch (err) {
            return Promise.reject(err);
        }
    }
    /**
     * Xác định người dùng đã đăng nhập vào facebook hay chưa
     * Có 3 TH có thể xảy ra
     * TH1 : connected : user đã đăng nhập và ủy quyền truy cập , lúc này chỉ cần lấy userID và accessToken
     * TH2 : not_authorized : user đã đăng nhập vào fb nhưng chưa cấp quyền cho ứng dụng, lúc này cần gọi hàm login
     * TH3 : unknown : user chưa đăng nhập, phải gọi hàm login
     * NOTE : cần check status trước, lưu thông tin vào session tránh để call api này quá nhiều lần
     * @returns Promise<any>
     */
    getLoginStatus() {
        return new Promise((resolve, reject) => {
            FB.getLoginStatus((response) => {
                if (!response)
                    reject();
                else
                    resolve(response);
            }, true);
        });
    }
    /**
     * Đăng nhập facebook dùng sau khi hàm getLoginStatus trả kết quả là not_authorized hoặc unknown
     * @param permissions : những quyền người dùng cần cấp thêm cho app
     * @returns nếu đăng nhập thành công thì sẽ trả về response nếu không sẽ trả về lỗi, nghĩa là user không đăng nhập
     * hoặc không cấp quyền
     */
    loginFacebook(permissions) {
        return new Promise((resolve, reject) => {
            FB.login((response) => {
                if (response.authResponse) {
                    resolve(response);
                }
                else
                    reject();
            }, {
                scope: permissions || 'pages_messaging,pages_show_list,pages_manage_metadata,pages_read_engagement,pages_read_user_content,pages_manage_engagement,pages_manage_posts',
                return_scopes: true // trong response sẽ trả về danh sách những quyền mà user đã cấp
            });
        });
    }
    // manage_pages,pages_manage_ads,pages_manage_metadata,pages_read_engagement,pages_read_user_content
    /**
     * Đăng xuất facebook khỏi app
     * Lưu ý đăng xuất facebook khỏi app chứ trong trang facebook.com vẫn bình thường
     * @returns
     */
    logoutFacebook() {
        return new Promise((resolve, reject) => {
            FB.logout((response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm này là hàm ĐỒNG BỘ dùng để get AuthResponse(bao gồm userID, accessToken...)
     * Note: chỉ được dùng hàm này khi đã chắc chắn user đăng nhập rồi, khi load lại trang tuyệt đối k dùng hàm này
     */
    getAuthResponse() {
        try {
            return FB.getAuthResponse();
        }
        catch (err) {
        }
    }
    getPage() {
        FB.Canvas.getPageInfo(function (info) {
            alert('Width: ' + info.clientWidth + ' Height: ' + info.clientHeight);
        });
    }
    /**
     * hàm này trả về tất cả các page(accesstoken,infoPage...) của user, trong đó có task của user trong từng page
     * example : let info = this.fbService.getAuthResponse()
                this.fbService.getPageAccessTokenByUserID(info.userID, info.accessToken).then(res => {
                  
                }).catch(err =>
     * @param userID
     * @param accessToken
     * @returns
     */
    getPageAccessTokenByUserID(userID, accessToken) {
        return new Promise((resolve, reject) => {
            FB.api(`/${userID}/accounts`, 'GET', { access_token: accessToken }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**Hàm này để xem lại */
    getPageMultipleMetrics(page_id, page_access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}/insights`, 'GET', { metric: 'page_impressions_unique,page_engaged_users', access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy thông tin page như id, name, địa chỉ , link
     * Note : cần chờ facebook xác thực quyền
     * @param access_token
     * @returns
     */
    getInformationPageByAccessToken(access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/pages/search`, 'GET', { q: 'Facebook', fields: 'id,name,location,link,photos', access_token: access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm thiết lập kết nối webhook
     */
    connectWebhook(page_id, page_access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}/subscribed_apps`, 'POST', { subscribed_fields: 'feed,messages', access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm get thiết lập kết nối webhook
     */
    getInfoConnectWebhook(page_id, page_access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}/subscribed_apps`, 'GET', { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm lấy thông tin user qua PSID, sử dụng cho trường hợp webhook bắn event trả về
     * @param PSID
     * @param page_access_token
     * @returns id,name,first_name,last_name,profile_pic
     */
    getInfoUserByPSID(PSID, page_access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/${PSID}`, 'GET', { fields: 'id,name,first_name,last_name,profile_pic', access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Gửi tin nhắn dạng text cho user
     * @param page_access_token
     * @param body
     * @example let body = {
        messaging_type: "RESPONSE",
        recipient: {
          id: "4762454490487027"
        },
        message: {
          text: "Hello world!"
        }
      }
      this.fbService.sendMessageToUserTypeText("EAAIUrNe1KZCABABIISF6ZBJ89hSLO9fCRYQ0Qcrl2WNbgoVM3iJZCTuZBL2xBNoZC9Xi8kE1sd8wpDTPoJrKs4GWCBpkFnzpLZB2PNZAZAjZC0AgT3WqdFP7pjpukmVp0Wcp0pI05F2zzgAN4DnvXZBUU3q1YxQvbAAPt6ZCKeiy4EmMrsOyeEZBB0VWS6sFjO5cYGVSuGh4exdZCmCVYhLW97ZAYi", body).then(res => {
        
      }).catch(err =>
    }
     * @returns
     */
    sendMessageToUserTypeText(page_access_token, body) {
        return new Promise((resolve, reject) => {
            FB.api(`/me/messages`, 'POST', Object.assign({ access_token: page_access_token }, body), (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    getMessageToUser(page_access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/me/messages`, 'GET', { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy danh sách các cuộc hội thoại, mỗi id tương ứng với 1 cuộc hội thoại
     * @param page_access_token
     * @param page_id
     * @returns
     */
    getListConversationID(page_access_token, page_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}/conversations`, 'GET', { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy danh sách dựa tin nhắn dựa trên conversation
     * @ffields messages,message_count,participants,senders
     * @param page_access_token
     * @param conversationID
     * @returns
     */
    getListMessageByConversationID(page_access_token, conversationID) {
        return new Promise((resolve, reject) => {
            FB.api(`/${conversationID}`, 'GET', { access_token: page_access_token, limit: 50, fields: 'messages,message_count,participants,unread_count,can_reply' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy chi tiết tin nhắn
     * @param page_access_token
     * @param messageID
     * @param after
     * @param fields story,from,to,message,attachments
     * @returns
     */
    getMessageDetailByMessageID(page_access_token, messageID, fields) {
        return new Promise((resolve, reject) => {
            FB.api(`/${messageID}`, 'GET', { access_token: page_access_token, fields: fields || 'story,from,to,message,attachments,shares,tags' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy dữ liệu của trang tiếp theo
     * @param next
     * @returns
     */
    getNextPaging(next) {
        //cắt bỏ chuỗi https://graph.facebook.com/v19.0, với 32 là độ dài chuỗi url này
        let url = next;
        return new Promise((resolve, reject) => {
            FB.api(url, 'GET', (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * @param page_access_token
     * @param data
     * @note : lưu ý hình ảnh phải convert sang url để upload
     * @example : * let body = {
        messaging_type: "RESPONSE",
        recipient: {
          id: "4762454490487027"
        },
        message: {
          attachment: {
            type: "image",
            payload: {
              is_reusable: true,
              url: "https://previews.123rf.com/images/vectorshots/vectorshots1211/vectorshots121100267/16104680-smile-icon-vector.jpg"
            }
          }
        }
      }
     * @returns
     */
    sendImageWithUrl(page_access_token, url, senderID) {
        let body = {
            tag: "ACCOUNT_UPDATE",
            messaging_type: "MESSAGE_TAG",
            recipient: {
                id: senderID
            },
            message: {
                attachment: {
                    type: "image",
                    payload: {
                        is_reusable: true,
                        url: url
                    }
                }
            }
        };
        return new Promise((resolve, reject) => {
            FB.api(`/me/messages?access_token=${page_access_token}`, 'POST', body, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy tất cả bài đăng trong page
     * @param page_access_token
     * @param page_id
     * @returns
     */
    getAllPostInPageByID(page_access_token, page_id) {
        return new Promise((resolve, reject) => {
            FB.api(`${page_id}/feed`, 'GET', { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy tất cả comment ở dạng test
     * @param page_access_token
     * @param post_id
     * @returns
     */
    getCommentByPostID(page_access_token, post_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${post_id}/comments?summary=1`, 'GET', { access_token: page_access_token, order: 'reverse_chronological', total_count: 'stream' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     *
     * @param page_access_token
     * @param page_id
     * @returns
     */
    pageChatLogin(page_access_token, page_id) {
        return new Promise((resolve, reject) => {
            FB.api(`${page_id}/chat_plugin`, 'GET', { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy album ảnh của page dựa vào page_id
     * @param page_access_token
     * @param page_id
     * @returns
     */
    getAlbumInPage(page_access_token, page_id) {
        return new Promise((resolve, reject) => {
            FB.api(`${page_id}/albums`, 'GET', { access_token: page_access_token, fields: 'backdated_time,count,created_time,description,from,link,name,comments,picture' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy chi tiết các bài post dựa vào page_post_id
     * @param page_access_token
     * @param page_post_id
     * @returns
     */
    getPageFeedByPageID(page_access_token, page_post_id) {
        return new Promise((resolve, reject) => {
            FB.api(`${page_post_id}`, 'GET', { access_token: page_access_token, fields: 'actions,admin_creator,attachments,child_attachments,created_time,feed_targeting,from,full_picture,icon,message,message_tags,parent_id,permalink_url,properties,status_type,story,subscribed,to,updated_time' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy chi tiết comment theo id
     * @param page_access_token
     * @param comment_id
     * @returns
     */
    getCommentByID(page_access_token, comment_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}`, 'GET', { access_token: page_access_token, fields: 'attachment,can_comment,can_remove,can_hide,can_like,can_reply_privately,comment_count,created_time,from,like_count,message,message_tags,object,parent,private_reply_conversation,user_likes,is_hidden' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Cập nhật comment, thường dùng hàm này để ẩn comment
     * @param page_access_token
     * @param comment_id
     * @param body
     * @example let body = {
        is_hidden: true
      }
      this.fbService.updateCommentByID("abc", "107282545132151_107296281797444", body).then(res => {
        
      }).catch(err =>
     * @returns
     */
    updateCommentByID(page_access_token, comment_id, body) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}?access_token=${page_access_token}`, 'POST', Object.assign({}, body), (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm này dùng để xóa comment theo ID
     * @param page_access_token
     * @param comment_id
     * @returns
     */
    deleteCommentByID(page_access_token, comment_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}?access_token=${page_access_token}`, 'DELETE', (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Hàm này để lấy thông tin của user
     * @param userID
     * @param access_token
     * @returns
     */
    getInfoUser(userID, access_token) {
        return new Promise((resolve, reject) => {
            FB.api(`/${userID}?access_token=${access_token}`, 'GET', { fields: 'id,name,picture.width(400).height(400)' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy access_token thời hạn lâu dành cho user
     * @param short_live_access_token
     * @returns
     */
    getLongLiveAccessTokenUser(short_live_access_token) {
        // 807938100918626
        //33477c365cbbb5aebd0e678a7dbb3bc1
        // 951006302165608
        //043c870398b650244761099fda588cb5
        return new Promise((resolve, reject) => {
            FB.api(`/v19.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${807938100918626}&client_secret=${'c01f433d25acac9d86838f08f5166907'}&fb_exchange_token=${short_live_access_token}`, 'GET', (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy access token dành cho page thời hạn lâu
     * @param long_access_token_user
     * @param userId
     * @returns
     */
    getLongLiveAccessTokenPage(long_access_token_user, userId) {
        return new Promise((resolve, reject) => {
            FB.api(`/v19.0/${userId}/accounts?access_token=${long_access_token_user}`, 'GET', (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy ảnh đại diện của user/page
     * Lưu ý nếu truyền page_id thì trả về đại diện của page, ngược lại truyền userID sẽ trả về đại diện của user
     * @param long_access_token_user
     * @param page_id
     * @returns
     */
    getProfileIamgeOfUserOrPage(long_access_token_user, page_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}/picture?access_token=${long_access_token_user}&redirect=false`, 'GET', (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lưu vào danh sách list đã connect
     * @param listPage
     */
    setListPageConnect(listPage, userID) {
        this.vhAuth.localStorageSET('fb_list_page_connect', { userID, listPage });
    }
    /**
     * Hàm này để lấy ra những page đã connect
     * @returns listPage
     */
    getListAccountConnect() {
        return this.vhAuth.localStorageGET('fb_list_page_connect');
    }
    /**
     * Đăng nhập đăng xuất, nếu đăng xuất thì clear listpageConnect
     * @param status
     */
    setStatusLogin(status) {
        this.vhAuth.localStorageSET('fb_login_status', status);
        if (!status)
            this.setListPageConnect({}, '');
    }
    getStatusLogin() {
        return this.vhAuth.localStorageGET('fb_login_status');
    }
    /**
     * Set thông tin user connect
     * @param user
     */
    setInfoUserConnect(user) {
        this.vhAuth.localStorageSET('fb_info_user_connect', user);
    }
    getInfoUserConnect() {
        return this.vhAuth.localStorageGET('fb_info_user_connect');
    }
    /**
     * Hàm này để update hình ảnh và nhận về attachment_id, mục đích lấy attachment_id để gửi tin nhắn hình ảnh, file
     * @param page_access_token
     * @param data
     * @returns attachment_id
     */
    updateImageToSendMessageAndReceiveAttachment(page_access_token, data) {
        return new Promise((resolve, reject) => {
            fetch(`https://graph.facebook.com/v19.0/me/message_attachments?access_token=${page_access_token}`, {
                body: data,
                method: 'post'
            }).then((res) => {
                if (res)
                    res.json().then(result => {
                        resolve(result);
                    }).catch(() => reject());
            }).catch(() => reject());
        });
    }
    /**
     * Hàm này để update hình ảnh và nhận về attachment_id, mục đích lấy attachment_id để gửi tin nhắn hình ảnh, file
     * @param page_access_token
     * @param data
     * @returns attachment_id
     */
    sendImageFromFile(page_access_token, id_recipient, attachment_id) {
        let json = {
            "recipient": {
                id: id_recipient
            },
            "message": {
                "attachment": {
                    "type": "image",
                    "payload": {
                        "attachment_id": attachment_id
                    }
                }
            },
            "tag": "ACCOUNT_UPDATE",
            "messaging_type": "MESSAGE_TAG",
        };
        return new Promise((resolve, reject) => {
            FB.api(`https://graph.facebook.com/v19.0/me/messages?access_token=${page_access_token}`, 'POST', json, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * hàm này để lấy các message đặc biệt như sticker hay message có gắn link
     * @param page_access_token
     * @param message_id
     * @returns
     */
    getLinkShares(page_access_token, message_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/v19.0/${message_id}/shares`, 'GET', { access_token: page_access_token, fields: 'link,name,description,template' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy chi tiết các bài post dựa vào id_post
     * @param page_access_token
     * @param id_post
     * @returns
     */
    getPostByIdPost(page_access_token, page_id, post_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${page_id}_${post_id}/`, 'GET', { access_token: page_access_token, fields: 'id,actions,application,can_reply_privately,child_attachments,coordinates,created_time,expanded_height,expanded_width,feed_targeting,from,full_picture,height,icon,is_expired,is_hidden,message,message_tags,permalink_url,properties' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy các reply-comment
     * @param page_access_token
     * @param comment_id
     * @returns
     */
    getReplyCommentByID(page_access_token, comment_id) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}/comments?summary=1`, 'GET', { access_token: page_access_token, order: 'reverse_chronological', total_count: 'stream' }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Lấy các reply-comment
     * @param page_access_token
     * @param comment_id
     * @param like
     * @returns
     */
    likeCommentByCommentId(page_access_token, comment_id, like) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}/likes`, `${like ? 'DELETE' : 'POST'}`, { access_token: page_access_token }, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Reply bình luận facebook
     * @param page_access_token
     * @param comment_id
     * @param json = {
          message: "@{user id}This is a test comment",
          attachment_id : 123456789
      },
     * @returns
     */
    replyCommentFacebookText(page_access_token, comment_id, json) {
        return new Promise((resolve, reject) => {
            FB.api(`/${comment_id}/comments?access_token=${page_access_token}`, "POST", json, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Reply bình luận facebook
     * @param page_access_token
     * @param comment_id
     * @param json = {
          message: "@{user id}This is a test comment",
          attachment_id : 123456789
      },
     * @returns
     */
    replyCommentFacebookImage(comment_id, json) {
        return new Promise((resolve, reject) => {
            fetch(`https://graph.facebook.com/v19.0/${comment_id}/comments`, {
                body: json,
                method: 'POST'
            }).then((res) => {
                if (res)
                    res.json().then(result => {
                        resolve(result);
                    }).catch(() => reject());
            }).catch(() => reject());
        });
    }
    /**
     * Reply comment private message
     * @param page_access_token
     * @param comment_id
     * @param json =
     * {
     * recipient: {
          comment_id: "4762454490487027"
        },
        message: {
          text: "Hello world!"
        }
      
     * @returns
     */
    replyPrivateMessageOnComment(page_access_token, json) {
        return new Promise((resolve, reject) => {
            FB.api(`/me/messages?access_token=${page_access_token}`, "POST", json, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
        });
    }
    /**
     * Đánh dấu tin nhắn đã đọc
     * @param page_access_token
     * @param PSID
     * @param sender_action ='mark_seen,typing_on,typing_off'
     * @returns
     */
    displayingSenderAction(page_access_token, PSID, sender_action) {
        let json = {
            recipient: {
                id: PSID
            },
            sender_action: sender_action
        };
        return new Promise((resolve, reject) => {
            FB.api(`/me/messages?access_token=${page_access_token}`, "POST", json, (response) => {
                if (response)
                    resolve(response);
                else
                    reject();
            });
            // fetch(`https://graph.facebook.com/v19.0/me/messages?access_token=${page_access_token}`, {
            //   body: json, method: 'POST'
            // }).then((res: any) => {
            //   if (res) res.json().then(result => {
            //     resolve(result)
            //   }).catch(() => reject())
            // }).catch(() => reject())
        });
    }
}
FacebookService.ɵfac = function FacebookService_Factory(t) { return new (t || FacebookService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_1__.VhAuth)); };
FacebookService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FacebookService, factory: FacebookService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54298:
/*!*********************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/socials-channels.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialsChannelsComponent": () => (/* binding */ SocialsChannelsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/facebook.service */ 69404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/spin */ 80289);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 70325);







class SocialsChannelsComponent {
    constructor(fbService, router, vhComponent, lang) {
        this.fbService = fbService;
        this.router = router;
        this.vhComponent = vhComponent;
        this.lang = lang;
    }
    ngOnInit() {
        this.initData();
    }
    initData() {
        //Khởi tạo facebook sdk, nghiên cứu lại chỗ khởi tạo fb nên đặt ở đâu là phù hợp
        this.fbService.init(807938100918626).then(res => {
            //Sau khởi tạo là lấy thông tin đăng nhập, nếu đã đăng nhập thì navigate sang trang quản lý
            if (this.fbService.getAuthResponse())
                this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook']);
            else {
                this.fbService.getLoginStatus().then((res) => {
                    if (res.status == 'connected')
                        this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook']);
                    else {
                        this.vhComponent.alertMessageDesktop('warning', this.lang.translate('Bạn chưa đăng nhập hoặc tài khoản của bạn chưa được ủy quyền') + '!');
                        this.router.navigate(['/sales/dashboard/manage/socials-channel/socials-connect']);
                    }
                }).catch(() => this.vhComponent.alertMessageDesktop('error', this.lang.translate('Có lỗi xảy ra') + '!'));
            }
        }).catch(err => { });
    }
}
SocialsChannelsComponent.ɵfac = function SocialsChannelsComponent_Factory(t) { return new (t || SocialsChannelsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_0__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService)); };
SocialsChannelsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SocialsChannelsComponent, selectors: [["app-socials-channels"]], decls: 2, vars: 3, consts: [[3, "nzTip"]], template: function SocialsChannelsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "nz-spin", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "translate");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("nzTip", "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, "Loading"), "...");
    } }, directives: [ng_zorro_antd_spin__WEBPACK_IMPORTED_MODULE_5__.NzSpinComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["nz-spin[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbHMtY2hhbm5lbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic29jaWFscy1jaGFubmVscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXNwaW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 78168:
/*!******************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/socials-channels.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialsChannelsModule": () => (/* binding */ SocialsChannelsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _socials_channels_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials-channels.component */ 54298);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 7602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 70325);
/* harmony import */ var src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/ng-zorro-ant.module */ 12760);
/* harmony import */ var _socials_connect_socials_connect_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socials-connect/socials-connect.component */ 55612);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);









const routes = [
    {
        path: 'socials-connect',
        component: _socials_connect_socials_connect_component__WEBPACK_IMPORTED_MODULE_2__.SocialsConnectComponent
    },
    {
        path: '',
        component: _socials_channels_component__WEBPACK_IMPORTED_MODULE_0__.SocialsChannelsComponent
    },
    {
        path: 'facebook',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_sales_menu_manage_socials-channel_facebook_facebook_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./facebook/facebook.module */ 91609)).then(m => m.FacebookModule)
    },
];
class SocialsChannelsModule {
}
SocialsChannelsModule.ɵfac = function SocialsChannelsModule_Factory(t) { return new (t || SocialsChannelsModule)(); };
SocialsChannelsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SocialsChannelsModule });
SocialsChannelsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes),
            src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SocialsChannelsModule, { declarations: [_socials_channels_component__WEBPACK_IMPORTED_MODULE_0__.SocialsChannelsComponent, _socials_connect_socials_connect_component__WEBPACK_IMPORTED_MODULE_2__.SocialsConnectComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, src_app_ng_zorro_ant_module__WEBPACK_IMPORTED_MODULE_1__.NgZorroAntModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateModule] }); })();


/***/ }),

/***/ 55612:
/*!************************************************************************************************!*\
  !*** ./src/app/sales/menu/manage/socials-channel/socials-connect/socials-connect.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialsConnectComponent": () => (/* binding */ SocialsConnectComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/facebook.service */ 69404);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/sales/components/vh-component/vh-component */ 20411);
/* harmony import */ var src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/sales/services/language.service */ 26825);
/* harmony import */ var ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/notification */ 8175);
/* harmony import */ var ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-vhframeworks */ 17302);
/* harmony import */ var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/grid */ 95039);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 70325);









class SocialsConnectComponent {
    constructor(fbService, router, vhComponent, lang, notification, vhAuth) {
        this.fbService = fbService;
        this.router = router;
        this.vhComponent = vhComponent;
        this.lang = lang;
        this.notification = notification;
        this.vhAuth = vhAuth;
    }
    ngOnInit() {
    }
    /**
     * Hàm này để bắt sự kiện click vào facebook và mở trang đăng nhập faceboook
     */
    loginFacebook() {
        // let check = this.vhAuth.getStore()
        // if (check.isTester) {
        this.fbService.loginFacebook().then(res => {
            if (res.status == 'connected')
                this.router.navigate(['/sales/dashboard/manage/socials-channel/facebook']);
            else
                this.vhComponent.alertMessageDesktop('error', this.lang.translate('Bạn chưa đăng nhập'));
        }).catch(() => { });
        // }
        // else {
        //   this.notification
        //     .blank(
        //       "",
        //       this.lang.translate("Vui lòng liên hệ hotline 0934 60 60 60 để sử dụng chức năng này") + "."
        //     )
        //     .onClick.subscribe(() => {
        //     });
        // }
    }
}
SocialsConnectComponent.ɵfac = function SocialsConnectComponent_Factory(t) { return new (t || SocialsConnectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_facebook_service__WEBPACK_IMPORTED_MODULE_0__.FacebookService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_components_vh_component_vh_component__WEBPACK_IMPORTED_MODULE_1__.VhComponent), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_sales_services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_zorro_antd_notification__WEBPACK_IMPORTED_MODULE_5__.NzNotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ionic_vhframeworks__WEBPACK_IMPORTED_MODULE_6__.VhAuth)); };
SocialsConnectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SocialsConnectComponent, selectors: [["app-socials-connect"]], decls: 23, vars: 9, consts: [["nz-row", "", 1, "socials-channel"], ["nz-col", "", "nzSpan", "10", 1, "socials-channel-banner", "center-all-content"], [1, "banner"], ["src", "assets/icon/management/socials-channel/banner.svg", "alt", ""], ["nz-col", "", "nzSpan", "14", 1, "socials-channel-login", "center-all-content"], [1, "socials-channel-login-facebook", 3, "click"], [1, "icon"], ["width", "53", "height", "53", "viewBox", "0 0 53 53", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["width", "53", "height", "53", "rx", "10", "fill", "#1B80E4"], ["d", "M27.1266 53V32.3539H21V24.9203H27.1266V18.5711C27.1266 13.5818 30.7457 9 39.0847 9C42.461 9 44.9577 9.28842 44.9577 9.28842L44.761 16.2301C44.761 16.2301 42.2148 16.208 39.4363 16.208C36.4291 16.208 35.9473 17.4429 35.9473 19.4925V24.9203H45L42.6998 32.3539H35.9473V53H27.1266Z", "fill", "white"], [1, "title"]], template: function SocialsConnectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SocialsConnectComponent_Template_div_click_11_listener() { return ctx.loginFacebook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "rect", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 3, "Choose the social channel you want to connect"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, "You can connect channels at any time"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](22, 7, "Optimize time and efficiency in closing orders on the world's largest social network"));
    } }, directives: [ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzRowDirective, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_7__.NzColDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".socials-channel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.socials-channel-login[_ngcontent-%COMP%] {\n  background-color: white;\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n}\n.socials-channel-login-facebook[_ngcontent-%COMP%] {\n  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.25);\n  border-radius: 12px;\n  padding: 24px;\n  width: 60%;\n  max-width: 414px;\n  cursor: pointer;\n}\n.socials-channel-login-facebook[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: left;\n  margin: 8px 16px 0 0;\n}\n.socials-channel-login-facebook[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 1px 5px 1px rgba(110, 110, 110, 0.33);\n  background: #f3f7ff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbHMtY29ubmVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQUVSO0FBRFE7RUFDSSwyQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHWjtBQUZZO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUFJaEI7QUFEUTtFQUNJLHFEQUFBO0VBQ0EsbUJBQUE7QUFHWiIsImZpbGUiOiJzb2NpYWxzLWNvbm5lY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29jaWFscy1jaGFubmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgJi1sb2dpbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICYtZmFjZWJvb2sge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQxNHB4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMTZweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi1mYWNlYm9vazpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDFweCBoc2xhKDAsIDAlLCA0My4xJSwgMC4zMyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmM2Y3ZmY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_sales_menu_manage_socials-channel_socials-channels_module_ts.js.map