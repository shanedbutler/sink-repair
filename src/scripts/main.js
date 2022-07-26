import { deleteRequest, fetchData } from "./dataAccess.js"
import { SinkRepair } from "./SinkRepair.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchData("serviceRequests")
    .then(() => fetchData("plumbers"))
        .then(
            () => {
            mainContainer.innerHTML = SinkRepair()
        }
    )
}

render()

document.addEventListener("click", e => {
    if (e.target.id.startsWith("request--")) {
        const [,requestId] = e.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

document.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)
