import React, { useRef, Component } from 'react';
import moment from 'moment';
import 'moment/locale/es'
import './history.scss';
import TextInfo from '../TexInfo/TextInfo';

moment.locale('es-CL');
// const scrollToRef = (ref) => 

class History extends Component {

  // myRef = useRef(null);
  state = {
    myRef: null,
  }

  componentDidMount() {
      var elmnt = document.getElementById("content");
    //   elmnt.scrollIntoView();
    // }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const { myRef } = this.state;
  //   debugger;
  //   if (prevState.myRef !== myRef && myRef) {
  //     window.scrollTo({ behavior: 'smooth', right: myRef.current.offsetRight });
  //   }
  // }

  render() {
    const { myRef } = this.state;
    const history = [{
      title: 'Fase Roja',
      backlog: 1,
      color: 'red',
      creation_status: {
        id: 2,
        name: "Ingresado",
        detail: "Aprobado"
      },
      date_action: "2019-05-24T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      },
    }, {
      backlog: 2,
      title: 'Fase Roja',
      color: 'red',
      creation_status: {
        id: 2,
        name: "Aprobado",
        detail: "Aprobado"
      },
      date_action: "2019-06-18T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      }
    }, {
      title: 'Fase Azul',
      backlog: 5,
      creation_status: {
        id: 2,
        name: "Aprobado",
        detail: "Aprobado"
      },
      date_action: "2019-07-24T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      }
    }, {
      title: 'Fase Azul',
      backlog: 3,
      creation_status: {
        id: 2,
        name: "Aprobado",
        detail: "Aprobado"
      },
      date_action: "2019-07-24T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      },
    }, {
      title: 'Fase Azul',
      backlog: 6,
      creation_status: {
        id: 2,
        name: "Aprobado",
        detail: "Aprobado"
      },
      date_action: "2019-07-24T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      },
    }, {
      title: 'Fase Azul',
      backlog: 7,
      creation_status: {
        id: 2,
        name: "Aprobado",
        detail: "Aprobado"
      },
      date_action: "2019-07-24T12:30:46.713002-04:00",
      id: 4,
      supervisor_reason_selection: {
        id: 1,
        name: "Faltan Datos",
        detail: "Faltan Datos"
      },
      supervisor_reasons: "FAkta",
      user_action: {
        id: 4,
        username: "ibox.supervisor",
        first_name: "supervisor",
        last_name: "supervisor",
        email: "cesar.a.flores@iboxstudio.cl"
      },
    }];
    return (
      <div className="history-container" ref={this.scrollToRef}>
        {/* <div className="history-content">
        <div className="history-dot">
        </div>
      </div> */}
        {history.map((h, i) => {
          const next = history[i + 1] || { date_action: new moment() };
          return (
            <React.Fragment key={h.backlog}>
              {/* {(history.length - 1 === i) && <div ref={this.scrollToRef} />} */}
              <div className="history-info" style={{ borderColor: h.color }}>
                <div className="history-header">
                  <div className="history-info-title">
                    {h.title}
                  </div>
                  <div className="history-badge" style={{ backgroundColor: h.color }}>
                    {h.creation_status.name}
                  </div>
                </div>
                {/* <div style={{ width: '100%', backgroundColor: 'lightgrey', marginTop: 8, marginBottom: 8, height: 1 }} /> */}
                <div className="history-info-content">
                  <TextInfo label={`@${h.user_action.username}`} text="este es un comentario que hizo" />
                </div>
                {/* <div style={{ width: '100%', backgroundColor: 'lightgrey', marginTop: 8, marginBottom: 8, height: 1 }} /> */}
                <div className="history-info-footer">
                  <div>
                    {parseInt(moment.duration(moment(next.date_action).diff(moment(h.date_action))).as('days'), 10)} días
                </div>
                  <div>
                    {`${moment(h.date_action).format('LL')}`}
                  </div>
                </div>
              </div>
              <div
                style={{
                  padding: 4,
                  height: '100%',
                  display: ' flex',
                  alignItems: 'center',
                  color: 'royalblue',
                }}
                className="phase-not-md"
              >
                <i className="fas fa-angle-right fa-2x phase-not-md" />
              </div>
            </React.Fragment>
          )
        })}
      </div>
    );
  }
}

export default History;