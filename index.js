const adviceNumEl = document.querySelector("#adviceNum")
const adviceTextEl = document.querySelector("#adviceText")
const button = document.getElementById("button")

button.addEventListener("click", getAdvice)

async function getAdvice () {
    try {
       const response = await axios.get('https://api.adviceslip.com/advice')
       const adviceText = response.data.slip.advice
       adviceTextEl.textContent = `"${adviceText}"`
       const adviceNum = response.data.slip.id
       adviceNumEl.textContent = adviceNum
 
    } catch (error) {
        adviceTextEl.textContent = "Something went wrong. Please try again."
        adviceNumEl.textContent = "00"
        console.log(error)
    }
}







