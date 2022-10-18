import React,{useCallback,useState,useEffect} from 'react'
import { Clock } from '../componentes/Clock';

export const ClockApp = () => {
    const [timerDays, seTimerDays]=useState();
    const [timerHours, seTimerHours]=useState();
    const [timerMinutes, seTimerMinutes]=useState();
    const [timerSeconds, seTimerSeconds]=useState();
    const[date,setDate] = useState();
    
    let interval;

    const startTimer=()=>{
        const countDownDate= new Date(date).getTime();
        interval = setInterval(()=>{
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days= Math.floor(distance/(24*60*60*1000));

            const hours= Math.floor((distance%(24*60*60*1000))/(60*60*1000));

            const minutes= Math.floor((distance%(60*60*1000))/(1000*60));
            
            const seconds= Math.floor((distance%(1000*60))/1000);
            
            if (distance<0){
                //stop
                clearInterval(interval.current);
            }else{
                //update
                seTimerDays(days);
                seTimerHours(hours);
                seTimerMinutes(minutes);
                seTimerSeconds(seconds);
            }
        });
    };

    useEffect(()=>{
        setTimeout(()=>startTimer(),500)
       
    },[startTimer]);

    return (
    <div className="clockApp">
        <div className="setdate">
                <p>Cuanto queda hasta el</p>
                <input type="date"
                className="buscador"
                placeholder="How much time until..."
                onChange={e => setDate(e.target.value)}
                value={date}
                onKeyPress={startTimer}
                />
        </div>
        <Clock timerDays={timerDays}
                timerHours={timerHours}
                timerminutes={timerMinutes}
                timerSeconds={timerSeconds}
                date={date}/>
    </div>
  )
}
