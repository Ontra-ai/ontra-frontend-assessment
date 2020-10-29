import Route from '@ember/routing/route'

export default class extends Route {
  model() {
    return [
      {
        id: 1,
        project: "Virgo",
        account: "Property Brothers",
        opened: "2020-10-10T14:48:00",
        status: "document-sent",
        originator: "Maria Bailey",
        type: "non-disclosure"
      },
      {
        id: 2,
        account: "Square Property Investments",
        project: "Sagittarius",
        opened: "2020-11-19T18:21:00",
        status: "followed-up",
        originator: "Michael Lonergan",
        type: "non-disclosure"
      },
      {
        id: 3,
        project: "Virgo",
        account: "Property Brothers",
        opened: "2020-03-10T04:48:00",
        status: "document-sent",
        originator: "Sheila Smith",
        type: "consulting-agreement"
      },
    ]
  }
}
