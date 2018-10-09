import {GET_USERINFO} from './mutation-types'
export default {
    state: {
        userInfo: null
    },
    mutations: {
        [GET_USERINFO] () {
            
        }
    },
    actions: {
        async getUserInfo({commit,state}) {
            let res = await getUser()
            commit(GET_USERINFO, res)
        }
    }
}