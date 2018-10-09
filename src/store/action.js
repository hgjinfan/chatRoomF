import {
    getUser
} from '@/service/api'
import {
    GET_USERINFO
} from './mutation-types'

export default {
    async getUserInfo({
        commit
    }) {
        let res = await getUser()
        commit(GET_USERINFO, res)
    }
}