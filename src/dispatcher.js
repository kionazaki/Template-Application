import Rx from "rxjs";

  const dispatcher$ = new Rx.Subject;
  //dispatcher$.subscribe(r=>console.log(r));

export default dispatcher$;
