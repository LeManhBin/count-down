function main() {
    const eleDay = document.querySelector('.js-day')
    const eleHour = document.querySelector('.js-hour')
    const eleMinute = document.querySelector('.js-minute')
    const eleSecond = document.querySelector('.js-second')
    const newYearTime = new Date(2023, 0, 1)
  
    setInterval(() => {
      const currentTime = new Date()
      let timeRemaining = Math.floor((newYearTime.getTime() - currentTime.getTime()) / 1000)
      const dayRemain = Math.floor(timeRemaining / 60 / 60 / 24)
  
      // Tính lại thời gian còn lại
      timeRemaining = timeRemaining - dayRemain * 24 * 60 * 60
      const hourRemain = Math.floor(timeRemaining / 60 / 60)
  
      // Tính lại thời gian còn lại
      timeRemaining = timeRemaining - hourRemain * 60 * 60
      const minuteRemain = Math.floor(timeRemaining / 60)
  
      // Tính lại thời gian còn lại
      timeRemaining = timeRemaining - minuteRemain * 60
      const secondRemain = timeRemaining
      
      eleDay.textContent = dayRemain;
      eleHour.textContent = hourRemain;
      eleMinute.textContent = minuteRemain;
      eleSecond.textContent = secondRemain;
 
      console.log(eleResultCountDown);
    }, 1000)
  }
  
  main()