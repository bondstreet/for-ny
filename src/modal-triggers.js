import Cookies from 'js-cookie'
import ouibounce from 'ouibounce'

const INACTIVE_TRIGGER = 5000
const TIMEOUT_TRIGGER = 10000

const MODAL_SEEN_COOKIE = 'fornyc_modal_seen'
const MODAL_SEEN_EXPIRES = 1

const FORM_SUBMITTED_COOKIE = 'fornyc_leadform_submitted'
const FORM_SUBMITTED_EXPIRES = 365

export const setModalSeenCookie = function () {
    Cookies.set(MODAL_SEEN_COOKIE, '', { expires: MODAL_SEEN_EXPIRES })
}

export const setFormSubmittedCookie = function () {
    Cookies.set(FORM_SUBMITTED_COOKIE, '', { expires: FORM_SUBMITTED_EXPIRES })
}

export const modalSeen = function () {
    const cookie_exists = Cookies.get(MODAL_SEEN_COOKIE) !== undefined
    const is_debug = /show_modal/.test(window.location.search)
    return cookie_exists && !is_debug
}

export const leadFormSubmitted = function () {
    const cookie_exists = Cookies.get(FORM_SUBMITTED_COOKIE) !== undefined
    const is_debug = /show_form/.test(window.location.search)
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

export const initExitIntentTrigger = function (callback) {
    ouibounce(false, {
        aggressive: true,
        callback: callback
    })
}

export default {
    setModalSeenCookie,
    setFormSubmittedCookie,
    modalSeen,
    leadFormSubmitted,
    initExitIntentTrigger,
    initTimeoutTrigger,
    initInactiveTrigger
}
