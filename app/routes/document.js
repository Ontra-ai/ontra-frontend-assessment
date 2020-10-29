import Route from '@ember/routing/route'

export default class extends Route {
  model({document_id}) {
    return {
      id: document_id
    }
  }
}
