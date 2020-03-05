import { CHANGE_MODAL_VISIBLE , BLOCKUSER} from './action-types'

export const showModalAction = (record) => {
    return {
        type: CHANGE_MODAL_VISIBLE,
        content: record
    }
}

export const blockUser = (index) => {
    return {
        type: BLOCKUSER,
        blockUserId: index
    }
}