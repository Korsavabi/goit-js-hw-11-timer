

// let date = new Date('Sep 29 2020 00:00:00').getTime();
// const p = document.getElementById('event-day');

// let expirationDate = setInterval(() => {
//     let currentTime = new Date().getTime();
//     let distance = date - currentTime;
//     // console.log(distance);

//     let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     p.textContent = `${day}d ${hour}h:${minutes}m:${seconds}s`;
//     if(distance < 0){
//         clearInterval(expirationDate);
//         p.textContent = 'Expired'

//     }
// }, 1000);

// class PromotionTimer{
//   constructor(date){
//       this.date = new Date(date).getTime();
//       this.p = document.getElementById('event-day');
//   }
//   expirationDate(){
//   setInterval(() => {
//       let distance = this.date - this.currentTime();

//       let day = Math.floor(distance / (1000 * 60 * 60 * 24));
//       let hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//       let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//       let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//       this.p.textContent = `${day}d ${hour}h:${minutes}m:${seconds}s`;
//       if(distance < 0){
//           clearInterval(this.expirationDate);
//           this.p.textContent = 'Expired';
//       }

//   }, 1000);
// }
// currentTime(){
//   return new Date().getTime();
// }
// init() {
//   this.expirationDate()
// }
// }
// new PromotionTimer('Sep 28 2020 17:30:00').init();


// class CountdownTimer {
//   constructor(date) {
//     this.selector = document.getElementById('timer-1');
//     this.targetDate = new Date(date);
//   }
//   expirationDate() {
//     setInterval(() => {
//       let distance = this.targetDate - this.currentTime();
//       days = Math.floor(time / (1000 * 60 * 60 * 24));
//       hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//       mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//       secs = Math.floor((time % (1000 * 60)) / 1000);

//       this.selector.textContent = `${days}d ${hours}h:${mins}m:${secs}s`;
//       if (distance < 0) {
//         clearInterval(this.expirationDate);
//         this.selector.textContent = 'Expired';
//       }

//     }, 1000);
//   }
//   currentTime() {
//     return new Date().getTime();
//   }
//   init() {
//     this.expirationDate()
//   }
// };
// new CountdownTimer('Jul 17 2020 09:38:10').init();

// let days = document.querySelector('[data-value="days"]');
// let hours = document.querySelector('[data-value="hours"]');
// let mins = document.querySelector('[data-value="mins"]');
// let secs = document.querySelector('[data-value="secs"]');
// let date = new Date('Nov 17 2020 09:38:10').getTime();

// const selector = document.getElementById('timer-1');

// let expirationDate = setInterval(() => {
//     let currentTime = new Date().getTime();
//     let distance = date - currentTime;
//     // console.log(distance);

//     days = day = Math.floor(distance / (1000 * 60 * 60 * 24));
//     hours = hour = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//     mins = minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     secs = seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     selector.textContent = `${days}`;
//     selector.textContent = `${hours}`;
//     selector.textContent = `${mins}`;
//     selector.textContent = `${secs}`;

//     if(distance < 0){
//         clearInterval(expirationDate);
//         selector.textContent = 'Expired'

//     }
// }, 1000);


class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  pad(value) {
    return String(value).padStart(2,'0');
  }
  getTimer() {
    let time = this.targetDate.getTime() - this.currentTime();
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs, time };

  }
  expirationDate() {
    this.getTimer();
    const clock = document.querySelector(this.selector);
    const days = clock.querySelector('[data-value="days"]');
    const hours = clock.querySelector('[data-value="hours"]');
    const mins = clock.querySelector('[data-value="mins"]');
    const secs = clock.querySelector('[data-value="secs"]');

    const updateTime = () => {
      const t = this.getTimer();
      days.textContent = `${t.days}`;
      hours.textContent = `${t.hours}`;
      mins.textContent = `${t.mins}`;
      secs.textContent = `${t.secs}`;

      if (t.time < 0) {
        clearInterval(stopInterval);
        days.textContent = `00`;
        hours.textContent = `00`;
        mins.textContent = `00`;
        secs.textContent = `00`;
      }
    }
    const stopInterval = setInterval(() => {
      updateTime();
    }, 1000);

  }
  currentTime() {
    return new Date().getTime();
  }
  init() {
    this.expirationDate();
  }
};
new CountdownTimer({ selector: '#timer-1', targetDate: new Date('Oct 02 2020 15:25:00') }).init();

