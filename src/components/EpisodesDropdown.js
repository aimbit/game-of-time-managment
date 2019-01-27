import React, { Component } from "react"
import episodes from "../data/episodes.json"

export class EpisodesDropdown extends Component {
    render() {
        return <select onChange={(event) => this.props.onEpisodeChange(event.target.value)} name="episode">

            {this.generateOptions()}

        </select>
    }
    generateOptions() {
        return episodes.map(function (episode) {
            return <option value={episode.rank}>{`S${episode.season}:E${episode.episode} ${episode.title}`}</option>
        })
    }
}