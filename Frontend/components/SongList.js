var React = require('react');
var SongListEntry = require('./SongListEntry');

var SongList = React.createClass({

	componentDidMount() {
		
		window.addEventListener("resize", this.adjustHeight);
		this.adjustHeight();
	},

	adjustHeight() {
		var elem = document.getElementById("scrollcontainer");
		var win = window.innerHeight,
		    top = elem.getBoundingClientRect().top,
		    available = win-top;

		console.log("set height to "+win+"-"+top+": "+available);
		elem.style.height = available+"px";
	},


	render(){
		return (
			<div className="list-group col-xs-12 col-md-6 col-md-offset-3">
				{ this.props.songs && this.props.songs.length ?
					this.props.songs.map(songObj =>
						<SongListEntry key={songObj.id} song={songObj} score={0} voted="" handle={this.props.handle} view={this.props.view} />
					)
				  : this.props.selection && this.props.selection.length ?
					this.props.selection.map(songId => {
						const songObj = this.props.songs[songId];
						console.log(songObj);
						return <SongListEntry
							key={songId}
							song={songObj.track}
							score={songObj.score}
							voted={songObj.voted}
							handle={this.props.handle}
							view={this.props.view} />
					})
				  : <span className="error">No results</span>

				}
				</div>
			</div>
		)
	}

});

module.exports = SongList;