import React from "react"

class Farm extends React.Component
{
    constructor()
    {
        super()

        this.onMessage = this.onMessage.bind(this)

        this.state = {
            "farm": {
                "width": 0,
                "height": 0,
            },
            "patches": [],
        };
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
            this.socket.send("new-farm")
        })
    }

    onMessage(e)
    {
        let data = JSON.parse(e.data);

        if (data.farm) {
            this.setState({"farm": data.farm})
        }

        if (data.patches) {
            this.setState({"patches": data.patches})
        }
    }

    componentWillUnmount()
    {
        this.socket.removeEventListener(this.onMessage)
        this.socket = null
    }

    render() {
        let rows = []
        let farm = this.state.farm
        let statePatches = this.state.patches

        for (let y = 0; y < farm.height; y++) {
            let patches = []

            for (let x = 0; x < farm.width; x++) {
                let className = "patch"

                statePatches.forEach((patch) => {
                    if (patch.x === x && patch.y === y) {
                        className += " " + patch.type

                        if (patch.wet) {
                            className += " " + wet
                        }
                    }
                })

                patches.push(
                    <div className={className}
                        key={x + "x" + y} />
                )
            }

            rows.push(
                <div className="row" key={y}>
                    {patches}
                </div>
            )
        }

        return (
            <div className="farm">{rows}</div>
        )
    }
}

export default Farm
