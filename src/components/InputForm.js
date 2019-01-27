import React, { Component } from "react"
import { EpisodesDropdown } from "./EpisodesDropdown"
export class InputForm extends Component {
    render() {
        return <div class="flex-container">
            <header class="header">Header</header>
            <h1> Hello world</h1>
            <div class="flex-item">
                What episode are you on?
                <EpisodesDropdown
                    onEpisodeChange={this.props.onEpisodeChange} />
            </div>
        </div>
    }
}