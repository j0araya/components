  import {
    PhaseInfo,
    PhaseExperience,
    PhaseTech,
  } from '../components/UI/Phases/Phase';

const Info = (function () {
  return {
    info: [{
      id: 1,
      title: 'Fase Roja',
      color: '#FB6542',
      component: PhaseInfo,
      data: [{
        title: 'Jonathan Araya',
        subtitle: 'Desarrollador y Magallánico',
        from: 'Jul. 1989',
        to: 'now',
        currentCity: 'Viña del Mar',
        currentCoutry: 'Chile',
      }],
    }, {
      id: 2,
      title: 'Experiencia',
      color: '#375E97',
      component: PhaseExperience,
      data: [{
        title: 'React, React-Native Developer',
        subtitle: 'Ibox Studio',
        from: 'Jul 2018',
        to: 'now',
        location: 'Viña del Mar, Región de Valparaíso, Chile',
      }, {
        title: 'Teaching Assistant',
        subtitle: 'Desafío Latam',
        from: 'Sep 2018',
        to: 'Feb 2019',
        location: 'Valparaíso, Región de Valparaíso, Chile',
      }, {
        title: 'Front-end & Back-end Dev',
        subtitle: 'Fixe',
        from: 'Apr 2017',
        to: 'Jun 2018',
        location: 'Viña del Mar, Región de Valparaíso, Chile'
      }, {
        title: 'Front-end & Back-end Dev',
        subtitle: 'Devsecops',
        from: 'Jan 2016',
        to: 'Dec 2016',
        location: 'Remote'
      }, {
        title: 'Web Developer',
        subtitle: 'Efexi',
        from: 'Jul 2015',
        to: 'Dec 2015',
        location: 'Viña del Mar, Región de Valparaíso, Chile'
      }],
    }, {
      id: 3,
      title: 'Técnologias',
      color: '#3F681C',
      component: PhaseTech,
      data: [],
    }],
    getInfo: () => this.info,
  }
})();

export default Info;