import config from '../config'
import TokenService from './token-service'

const EventApiService = {
  getEvents() {
    return fetch(`${config.API_ENDPOINT}/events`, {
      headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getEvent(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
      headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getEventComments(eventId) {
    return fetch(`${config.API_ENDPOINT}/events/${eventId}/comments`, {
      headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  postComment(eventId, text) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
				'content-type': 'application/json',
				'authorization':`Bearer ${TokenService.getAuthToken()}`
			},
      body: JSON.stringify({
        event_id: eventId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default EventApiService
