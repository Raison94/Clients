import Api from '@/services/Api'

export default {
  client: function (credentials) {
    return Api().post('client',credentials)
  }
}