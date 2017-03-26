import React from "react"

class Component extends React.Component
{
    constructor()
    {
        super()
        this.onMessage = this.onMessage.bind(this)
    }

    componentWillMount()
    {
        this.socket = new WebSocket(
            "ws://127.0.0.1:8080/ws"
        )

        this.socket.addEventListener(
            "message", this.onMessage
        )

        // DEBUG

        this.socket.addEventListener("open", () => {
            this.socket.send("hello world")
        })
    }

    onMessage(e)
    {
        console.log("message: " + e.data)
    }

    componentWillUnmount()
    {
        this.socket.removeEventListener(this.onMessage)
        this.socket = null
    }

    render() {
        return <div>hello world</div>
    }
}

export default Component
