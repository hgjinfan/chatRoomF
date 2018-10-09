import {
    GET_USERINFO,
    SAVE_USERINFO
} from './mutation-types'

export default {
    [GET_USERINFO](state, info) {
        if (info.message) {
            state.userInfo = null
        } else {
            state.userInfo = { ...info
            }
        }
    },
    [SAVE_USERINFO](state, info) {
        state.userInfo = info
        // state.isLogin = true
    }
}