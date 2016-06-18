import dispatcher$ from "app/dispatcher";

function sendCommand(component, action, pars){
    dispatcher$.next({
        action: component+'.'+action,
        pars: pars
    })
}

export default sendCommand;
