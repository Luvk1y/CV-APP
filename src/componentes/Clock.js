import React, {Fragment} from "react"

export const Clock = ({timerDays,timerHours,timerMinutes,timerSeconds}) => {
    
  return (
    <Fragment>
        <section className="clock">
                <div className="clockdir">
                    <section>
                        <p>{timerDays}</p>
                        <small>Days</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerHours}</p>
                        <small>Hours</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerMinutes}</p>
                        <small>Minutes</small>
                    </section>
                    <span>:</span>
                    <section>
                        <p>{timerSeconds}</p>
                        <small>Seconds</small>
                    </section>
                </div> 
        </section>
    </Fragment>
        );
}
