import Cookies from 'js-cookie'

const INACTIVE_TRIGGER = 5000
const TIMEOUT_TRIGGER = 10000
const MODAL_SEEN_COOKIE = 'fornyc_modal_seen'
const MODAL_SEEN_EXPIRES = 1

export const setModalSeenCookie = function (expires = MODAL_SEEN_EXPIRES) {
    Cookies.set(MODAL_SEEN_COOKIE, '', { expires: expires })
}

export const modalSeen = function () {
    const cookie_exists = Cookies.get(MODAL_SEEN_COOKIE) !== undefined
    const is_debug = /show_modal/.test(window.location.search)
    return cookie_exists && !is_debug
}

export const initTimeoutTrigger = function (callback) {
    setTimeout(callback, TIMEOUT_TRIGGER)
}

export const initInactiveTrigger = function (callback) {
    const away = require('away')
    const timer = away(INACTIVE_TRIGGER)
    timer.on('idle', callback)
}

export default {
    setModalSeenCookie,
    modalSeen,
    initTimeoutTrigger,
    initInactiveTrigger
}
