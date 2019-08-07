export  class  AppareilService {

  appareils = [
    {
      name: 'Machine à laver',
      status : 'éteint'
    },
    {
      name: 'Ordinateur',
      status : 'Allumé'
    },
    {
      name: 'Téleviseur',
      status : 'éteint'
    },
    {
      name: 'Fer à repassé',
      status : 'éteint'
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Allumé';
    }
  }

  switchOffAll() {
  for (let appareil of this.appareils ) {
  appareil.status = 'éteint';
}
  }

  switchOnOne(index: number) {
    this.appareils[index].status = 'Allumé';
  }

  switchOffOne(index: number) {
    this.appareils[index].status = 'éteint';
  }


}
